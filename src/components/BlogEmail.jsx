// src/components/BlogEmail.js
import React from 'react';
import loadTranslations from '../utils/loadTranslations';
// import './BlogEmail.css';

function BlogEmail({ locale = 'ru' }) {
  const translations = loadTranslations(locale, 'aff-promo-ideas');
  const translationsTwo = loadTranslations(locale, 'aff-promo-no-rates');

  return (
    <table className='body-table'>
      <tr>
        <td>
          <h1 className='title'>{translations.block_00}</h1>
          <p >{translations.block_01}</p>
          <p dangerouslySetInnerHTML={{ __html: translationsTwo.block_03}}></p>
        </td>
      </tr>
    </table>
  );
}


export default BlogEmail