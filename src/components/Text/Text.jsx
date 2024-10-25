import React from 'react';
import PropTypes from 'prop-types';

const addUnit = (value) => {
  if (typeof value === 'number') {
    return `${value}px`;
  } else if (typeof value === 'string') {
    if (value === 'auto' || value.endsWith('%')) {
      return value;
    } else if (/^\d+$/.test(value)) {
      return `${value}px`;
    } else {
      return value;
    }
  }
  return value;
};

const cssStyleObjectToString = (styleObject) => {
  return Object.entries(styleObject)
    .map(([key, value]) => {
      // Преобразуем camelCase в kebab-case
      const kebabKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      return `${kebabKey}: ${value}`;
    })
    .join('; ');
};

const Text = ({
  children,
  className = '',
  style = {},
  html = false,
  paddingTop = 0,
  paddingBottom = 0,
  imgSrc,
  imgAlt = '',
  imgStyle = {},
  imgClassName = '',
  imgPlaceholder = '{{img}}',
}) => {
  const combinedStyle = {
    ...style,
    paddingTop: addUnit(paddingTop),
    paddingBottom: addUnit(paddingBottom),
  };

  if (html) {
    let content = children;

    if (imgSrc) {
      // Преобразуем объект стилей в строку CSS
      const imgStyleString = cssStyleObjectToString(imgStyle);

      // Создаем строку тега <img>
      const imgTag = `<img src="${imgSrc}" alt="${imgAlt}" class="${imgClassName}" style="${imgStyleString}" />`;

      // Заменяем плейсхолдер на тег изображения
      content = content.replace(imgPlaceholder, imgTag);
    }

    return (
      <p
        className={className}
        style={combinedStyle}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  // Для случая, когда html = false
  return (
    <p className={className} style={combinedStyle}>
      {imgSrc && (
        <img
          src={imgSrc}
          alt={imgAlt}
          className={imgClassName}
          style={{
            verticalAlign: 'middle',
            ...imgStyle,
          }}
        />
      )}
      <span style={{ verticalAlign: 'middle', marginLeft: imgSrc ? '5px' : '0' }}>
        {children}
      </span>
    </p>
  );
};

Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  html: PropTypes.bool,
  paddingTop: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  paddingBottom: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  imgStyle: PropTypes.object,
  imgClassName: PropTypes.string,
  imgPlaceholder: PropTypes.string,
};

export default Text;
