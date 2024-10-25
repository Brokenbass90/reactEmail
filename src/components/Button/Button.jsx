import React from 'react';
import PropTypes from 'prop-types';

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

// Функция для объединения базового URL и параметров
const addUrlParams = (url, params) => {
  if (!url) return '';
  if (!params) return url;
  const hasQuestionMark = url.includes('?');
  const separator = hasQuestionMark ? '&' : '?';
  return `${url}${separator}${params}`;
};

const Button = ({
  href,
  baseHref, // Новый проп для базового URL
  params, // Новый проп для параметров URL
  children,
  width = '',
  paddingTop = '',
  paddingBottom = '',
  borderRadius = '4px',
  textColor = '#fff',
  backgroundColor = '#0081e3',
  align = 'center',
  universal = false,
  imgSrc = '',
  imgAlt = '',
  imgStyle = {},
  className = '',
  style = {},
}) => {
  // Если baseHref задан, используем его и params для формирования href
  const finalHref = baseHref ? addUrlParams(baseHref, params) : href;

  // Стиль внешней таблицы
  const outerTableStyle = {
    borderCollapse: 'collapse',
    borderSpacing: '0',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif !important',
    maxWidth: addUnit(width),
    padding: '0',
    textAlign: 'left',
    verticalAlign: 'top',
    width: '100%',
    ...style,
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
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif !important',
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
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif !important',
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
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif !important',
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
    fontFamily: 'Helvetica !important',
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
    href: finalHref,
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
        msInterpolationMode: 'bicubic',
        border: 'none',
        clear: 'both',
        display: 'inline-block',
        float: 'none',
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif !important',
        maxWidth: '0',
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
    <table align={align} className={className} style={outerTableStyle}>
      <tbody>
        <tr style={trStyle}>
          <td style={tdStyle}>
            <div className="button-wrapper_bot pt0">
              <table
                className="medium-button radius blue-button"
                style={innerTableStyle}
              >
                <tbody>
                  <tr
                    style={{
                      padding: '0',
                      textAlign: 'left',
                      verticalAlign: 'top',
                    }}
                  >
                    <td className="iq blue-button" style={innerTdStyle}>
                      <a {...aProps}>
                        {children}
                        {arrowImg}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

// Определение типов пропсов для компонента
Button.propTypes = {
  href: PropTypes.string, // Ссылка кнопки (может быть необязательной, если используются baseHref и params)
  baseHref: PropTypes.string, // Новый проп для базового URL
  params: PropTypes.string, // Новый проп для параметров URL
  children: PropTypes.node.isRequired, // Текст или содержимое кнопки
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Ширина кнопки
  paddingTop: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Верхний отступ
  paddingBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Нижний отступ
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Скругление углов
  textColor: PropTypes.string, // Цвет текста
  backgroundColor: PropTypes.string, // Цвет фона кнопки
  align: PropTypes.string, // Выравнивание кнопки
  universal: PropTypes.bool, // Добавить universal="true" к ссылке
  imgSrc: PropTypes.string, // URL изображения стрелки
  imgAlt: PropTypes.string, // Альтернативный текст для изображения
  imgStyle: PropTypes.object, // Дополнительные стили для изображения
  className: PropTypes.string, // Дополнительные классы
  style: PropTypes.object, // Дополнительные стили
};

export default Button;
