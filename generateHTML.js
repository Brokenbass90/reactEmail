const fs = require('fs');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

// Импортируйте все компоненты писем
const BlogEmail = require('./src/components/BlogEmail').default;

// Словарь для соответствия имен компонентов их реальным компонентам
const components = {
  BlogEmail,
};

const locales = ['en', 'es', 'de', 'pt', 'ru', 'th', 'cn', 'vi', 'sv', 'it', 'id']; // Пример локалей

function generateEmailHTML(componentName, locale) {
  const Component = components[componentName];
  if (!Component) {
    console.error(`Component ${componentName} not found.`);
    return;
  }

  const props = {
    locale,
  };

  const htmlContent = ReactDOMServer.renderToStaticMarkup(<Component {...props} />);
  const outputPath = `./dist/${componentName}/${locale}/index.html`;

  fs.mkdirSync(`./dist/${componentName}/${locale}`, { recursive: true });
  fs.writeFileSync(outputPath, htmlContent, 'utf8');
}

Object.keys(components).forEach(componentName => {
  locales.forEach(locale => {
    generateEmailHTML(componentName, locale);
  });
});
