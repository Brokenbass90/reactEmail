// // components/Button.jsx
// import React from 'react';

// const Button = ({
//   href,
//   children,
//   className = '',
//   style = {},
//   width = 'auto',
//   align = 'center',
//   backgroundColor = '#007BFF',
//   color = '#FFFFFF',
//   universal = false, // Новый пропс, если требуется
// }) => {
//   const buttonStyle = {
//     display: 'inline-block',
//     width,
//     backgroundColor,
//     color,
//     textDecoration: 'none',
//     padding: '10px 20px',
//     borderRadius: '4px',
//     textAlign: 'center',
//     ...style,
//   };

//   const linkProps = {
//     href,
//     style: buttonStyle,
//     ...(universal && { universal: 'true' }), // Добавление универсального атрибута при необходимости
//   };

//   return (
//     <table align={align} border="0" cellPadding="0" cellSpacing="0">
//       <tr>
//         <td>
//           <a {...linkProps}>
//             {children}
//           </a>
//         </td>
//       </tr>
//     </table>
//   );
// };

// export default Button;
// src/components/Button/Button.jsx
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Функция для добавления единицы измерения к числовым значениям.
 * Если значение уже строка (например, 'auto'), возвращает его без изменений.
 */
const addUnit = (value) => {
  if (typeof value === 'number') {
    return `${value}px`;
  } else if (typeof value === 'string') {
    if (value === 'auto') {
      return value;
    } else if (/^\d+$/.test(value)) {
      return `${value}px`;
    } else {
      return value;
    }
  }
  return value;
};

/**
 * Компонент Button для использования в email-шаблонах.
 * Рендерит кнопку с inline-стилями и возможностью настройки атрибутов.
 */
const Button = ({
  href,
  children,
  width = '245px',
  paddingTop = '20px',
  paddingBottom = '30px',
  borderRadius = '4px',
  textColor = '#fff',
  backgroundColor = '#0081e3',
  align = 'center',
  universal = false,
  imgSrc = '',
  imgAlt = '',
  imgStyle = {},
}) => {
  // Стиль внешней таблицы
  const outerTableStyle = {
    borderCollapse: 'collapse',
    borderSpacing: '0',
    fontFamily: "Roboto, Helvetica, Arial, sans-serif !important",
    maxWidth: addUnit(width),
    padding: '0',
    textAlign: 'left',
    verticalAlign: 'top',
    width: '100%',
  };

  // Стиль строки таблицы
  const trStyle = {
    padding: '0',
    textAlign: 'left',
    verticalAlign: 'top',
  };

  // Стиль ячейки таблицы
  const tdStyle = {
    borderCollapse: 'collapse !important',
    color: '#222',
    fontFamily: "Roboto, Helvetica, Arial, sans-serif !important",
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '19px',
    margin: '0',
    padding: `0 0 ${addUnit(paddingBottom)}`,
    paddingTop: addUnit(paddingTop),
    textAlign: 'left',
    verticalAlign: 'top',
    wordBreak: 'normal',
  };

  // Стиль внутренней таблицы кнопки
  const innerTableStyle = {
    background: backgroundColor,
    borderCollapse: 'collapse',
    borderSpacing: '0',
    fontFamily: "Roboto, Helvetica, Arial, sans-serif !important",
    overflow: 'hidden',
    padding: '0',
    textAlign: 'left',
    verticalAlign: 'top',
    width: '100%',
  };

  // Стиль ячейки внутренней таблицы кнопки
  const innerTdStyle = {
    background: backgroundColor,
    border: 'none !important',
    borderCollapse: 'collapse !important',
    borderRadius: addUnit(borderRadius),
    color: '#222',
    display: 'block',
    fontFamily: "Roboto, Helvetica, Arial, sans-serif !important",
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '19px',
    margin: '0',
    padding: '0 !important',
    textAlign: 'center',
    verticalAlign: 'top',
    width: 'auto !important',
    wordBreak: 'normal',
  };

  // Стиль ссылки внутри кнопки
  const linkStyle = {
    color: textColor,
    display: 'block',
    fontFamily: "Helvetica !important",
    fontSize: '16px !important',
    fontWeight: '600 !important',
    letterSpacing: '0 !important',
    margin: '0 !important',
    padding: '17px 0 !important',
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'none !important',
    width: '100%',
  };

  // Подготовка пропсов для ссылки, включая условное добавление атрибута 'universal'
  const aProps = {
    href,
    target: '_blank',
    style: linkStyle,
    className: 'butt',
    ...(universal ? { universal: 'true' } : {}),
  };

  // Создание изображения стрелки, если imgSrc предоставлен
  const arrowImg = imgSrc ? (
    <img
      src={imgSrc}
      alt={imgAlt}
      style={{
        '-ms-interpolation-mode': 'bicubic',
        border: 'none',
        clear: 'both',
        display: 'inline-block',
        float: 'none',
        fontFamily: "Roboto, Helvetica, Arial, sans-serif !important",
        maxWidth: '18px',
        outline: 'none',
        paddingLeft: '15px',
        textDecoration: 'none',
        verticalAlign: 'middle',
        width: 'auto',
        ...imgStyle,
      }}
      className="arrow-icon"
    />
  ) : null;

  return (
    <table align={align} style={outerTableStyle}>
      <tr style={trStyle}>
        <td style={tdStyle}>
          <div className="button-wrapper_bot pt0">
            <table className="medium-button radius blue-button" style={innerTableStyle}>
              <tr style={{
                padding: '0',
                textAlign: 'left',
                verticalAlign: 'top',
              }}>
                <td className="iq blue-button" style={innerTdStyle}>
                  <a {...aProps}>
                    {children}
                    {arrowImg}
                  </a>
                </td>
              </tr>
            </table>
          </div>
        </td>
      </tr>
    </table>
  );
};

// Определение типов пропсов для компонента
Button.propTypes = {
  href: PropTypes.string.isRequired,          // Ссылка кнопки
  children: PropTypes.node.isRequired,        // Текст или содержимое кнопки
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),          // Ширина кнопки (по умолчанию '245px')
  paddingTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),     // Верхний отступ
  paddingBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),  // Нижний отступ
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),    // Скругление углов
  textColor: PropTypes.string,                // Цвет текста
  backgroundColor: PropTypes.string,          // Цвет фона кнопки
  align: PropTypes.string,                     // Выравнивание кнопки (по умолчанию 'center')
  universal: PropTypes.bool,                   // Добавить universal="true" к ссылке
  imgSrc: PropTypes.string,                    // URL изображения стрелки (опционально)
  imgAlt: PropTypes.string,                    // Альтернативный текст для изображения
  imgStyle: PropTypes.object,                  // Дополнительные стили для изображения
};

export default Button;
