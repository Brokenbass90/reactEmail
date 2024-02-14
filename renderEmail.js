const React = require('react');
const ReactDOMServer = require('react-dom/server');
const BlogEmail = require('./src/components/BlogEmail');

const locales = ['en', 'es', 'de', 'pt', 'ru', 'th']; // Список локалей
const emailHtml = {};

locales.forEach(locale => {
  const htmlContent = ReactDOMServer.renderToStaticMarkup(<BlogEmail locale={locale} />);
  emailHtml[locale] = htmlContent;
});
