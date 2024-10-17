// import React from 'react';

// const Text = ({ children, className = '', style = {} }) => {
//   return (
//     <p className={className} style={style}>
//       {children}
//     </p>
//   );
// };

// export default Text;
// src/components/Text/Text.jsx
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Компонент Text для использования в email-шаблонах.
 * Позволяет рендерить как простой текст, так и HTML-разметку.
 */
const Text = ({ children, className = '', style = {}, html = false }) => {
  if (html) {
    return (
      <p
        className={className}
        style={style}
        dangerouslySetInnerHTML={{ __html: children }}
      />
    );
  }

  return (
    <p className={className} style={style}>
      {children}
    </p>
  );
};

Text.propTypes = {
  /**
   * Содержимое текста. Может быть строкой или HTML-разметкой.
   */
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,

  /**
   * Дополнительные классы для элемента <p>.
   */
  className: PropTypes.string,

  /**
   * Дополнительные стили для элемента <p>.
   */
  style: PropTypes.object,

  /**
   * Флаг для определения, нужно ли интерпретировать содержимое как HTML.
   */
  html: PropTypes.bool,
};

export default Text;
