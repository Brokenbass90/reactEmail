const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); 
const cleanCSS = require('gulp-clean-css');
const purgecss = require('gulp-purgecss');
const inlineCss = require('gulp-inline-css');
const browserSync = require('browser-sync').create();
const plumber = require('gulp-plumber');
const argv = require('yargs').argv;
const path = require('path');
const fs = require('fs');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const htmlbeautify = require('gulp-html-beautify');
const concat = require('gulp-concat');

// Бабелинг
require('@babel/register')({
  extensions: ['.js', '.jsx'],
  presets: ['@babel/preset-env', '@babel/preset-react'],
  ignore: [/node_modules/],
});

const paths = {
  emails: './src/emails',
  styles: './src/styles',
  locales: './src/locales',
  dist: './dist',
};

// компиляция стилей
gulp.task('compile-styles', () => {
  const theme = argv.theme;
  const email = argv.email;

  if (!theme || !email) {
    console.error('Пожалуйста, укажите параметры --theme и --email.');
    return Promise.resolve();
  }

  const emailStylesPath = path.resolve(`${paths.emails}/${theme}/${email}/styles.scss`);
  const globalStylesPath = path.resolve(`${paths.styles}/main.scss`);

  return gulp
    .src([globalStylesPath, emailStylesPath])
    .pipe(plumber())
    .pipe(
      sass({
        includePaths: ['node_modules/foundation-emails/scss'],
      }).on('error', sass.logError)
    )
    .pipe(concat('combined-styles.css'))
    .pipe(
      purgecss({
        content: [`${paths.emails}/${theme}/${email}/**/*.{jsx,html}`],
        safelist: ['body', 'html', 'table', 'td', 'th', 'img', 'a'], // селекторы
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      })
    )
    .pipe(cleanCSS()) // Минификтор
    .pipe(gulp.dest('./temp'));
});

// рендеринг писем
gulp.task('emails', (done) => {
  const theme = argv.theme;
  const email = argv.email;

  if (!theme || !email) {
    console.error('Пожалуйста, укажите параметры --theme и --email.');
    done();
    return;
  }

  const emailComponentPath = path.resolve(`${paths.emails}/${theme}/${email}/index.jsx`);
  if (!fs.existsSync(emailComponentPath)) {
    console.error(`Компонент письма не найден: ${emailComponentPath}`);
    done();
    return;
  }

  // скомпилированные стили из файла
  const compiledStyles = fs.readFileSync('./temp/combined-styles.css', 'utf8');

  const locales = fs.readdirSync(paths.locales);
  const outputFiles = [];

  // очистка кэша модулей перед каждой сборкой
  delete require.cache[require.resolve(emailComponentPath)];

  // очистка кэша модулей для файлов в src и locales
  Object.keys(require.cache).forEach((key) => {
    if (key.includes('src/') || key.includes('locales/')) {
      delete require.cache[key];
    }
  });

  // загрузка компонента письма заново после очистки кэша
  const EmailComponentModule = require(emailComponentPath);
  const EmailComponent = EmailComponentModule.default || EmailComponentModule;

  // получаем список файлов переводов из компонента или параметра
  const translationsParam = argv.translations;
  let translationFiles = EmailComponent.translationFiles || [email]; 

  if (translationsParam) {
    translationFiles = translationsParam.split(',');
  }

  locales.forEach((locale) => {
    let translations = {};

    translationFiles.forEach((file) => {
      const translationsPath = path.resolve(`${paths.locales}/${locale}/${file}.json`);
      try {
        const fileTranslations = JSON.parse(fs.readFileSync(translationsPath, 'utf8'));
        // сохраняем переводы по имени файла
        translations[file] = fileTranslations;
      } catch (error) {
        console.warn(`Не удалось загрузить переводы из ${translationsPath}`);
      }
    });

    const element = React.createElement(EmailComponent, {
      locale,
      styles: compiledStyles,
      translations,
    });

    const html = ReactDOMServer.renderToStaticMarkup(element);
    const fullHtml = `<!DOCTYPE html>\n${html}`;

    const outputDir = path.join(paths.dist, theme, email, locale);
    fs.mkdirSync(outputDir, { recursive: true });
    const outputFile = path.join(outputDir, 'index.html');
    fs.writeFileSync(outputFile, fullHtml);
    console.log(`Сгенерировано письмо для ${locale}: ${outputFile}`);
    outputFiles.push(outputFile);
  });

  // форматирование HTML-файлов
  return gulp
    .src(outputFiles, { base: './' })
    .pipe(htmlbeautify({ indent_size: 2 }))
    .pipe(gulp.dest('./'))
    .on('end', done);
});

// инлайнинг стилей
gulp.task('inline', () => {
  return gulp
    .src(`${paths.dist}/**/*.html`)
    .pipe(plumber())
    .pipe(
      inlineCss({
        applyStyleTags: false, // Не инлайнить стили из <style>
        applyLinkTags: true,
        removeStyleTags: false, // Оставить теги <style> в <head>
        removeLinkTags: true,
        preserveMediaQueries: true,
      })
    )
    .pipe(gulp.dest(paths.dist));
});

// запуск сервера разработки
gulp.task('serve', () => {
  const theme = argv.theme;
  const email = argv.email;
  const locale = argv.locale || 'en'; // параметр по умолчанию 'en'

  browserSync.init({
    server: {
      baseDir: paths.dist,
      middleware: [
        function (req, res, next) {
          res.setHeader('Content-Security-Policy', "default-src * 'unsafe-inline' data: blob:;");
          next();
        },
      ],
    },
    port: 3000,
    open: true, // автоматически открывать браузер
    startPath: `/${theme}/${email}/${locale}/index.html`, // путь к нужному письму
  });

  gulp.watch(
    [
      `${paths.styles}/**/*.scss`,
      `${paths.emails}/**/*.{js,jsx,scss}`,
      `${paths.locales}/**/*.json`,
    ],
    gulp.series('compile-styles', 'emails', 'inline', (done) => {
      browserSync.reload();
      done();
    })
  );
});

// задача по умолчанию
gulp.task(
  'default',
  gulp.series('compile-styles', 'emails', 'inline', 'serve')
);
