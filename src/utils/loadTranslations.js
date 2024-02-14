// src/utils/loadTranslations.js
function loadTranslations(locale, category) {
    try {
      return require(`../locales/${locale}/${category}.json`);
    } catch (error) {
      console.warn(`Could not load translations for locale: ${locale}, category: ${category}. Using empty translations.`);
      return {}; // Возвращаем пустой объект, если файл не найден
    }
  }
  
  export default loadTranslations;
  