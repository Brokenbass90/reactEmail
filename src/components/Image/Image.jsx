// src/components/Image/Image.jsx
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Компонент Image для использования в email-шаблонах.
 * Рендерит изображение с возможностью настройки стилей.
 */
const Image = ({
  src,
  alt = '',
  width = '100%',
  height = 'auto',
  style = {},
  className = '',
  maxWidth = '100%',
  borderRadius = '0',
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={{ maxWidth, height, borderRadius, ...style }} // Добавляем borderRadius в style
    />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,        // URL изображения
  alt: PropTypes.string.isRequired,        // Альтернативный текст
  width: PropTypes.string,                 // Ширина изображения
  height: PropTypes.string,                // Высота изображения
  style: PropTypes.object,                 // Дополнительные стили
  className: PropTypes.string,             // Дополнительные классы
  maxWidth: PropTypes.string,              // Максимальная ширина
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Скругление углов
};

export default Image;
