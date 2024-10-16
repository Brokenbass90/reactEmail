import React from 'react';

const Container = ({
  children,
  className = '',
  style = {},
  innerStyle = {},
  tdClassName = '', // Добавляем tdClassName
  backgroundColor = '#ffffff',
  borderRadius = '0',
  maxWidth = '580px',
  padding = '50px',
}) => {
  const containerStyle = {
    backgroundColor,
    width: '100%',
    maxWidth,
    borderRadius,
    ...style,
  };

  return (
    <table
      className={`container ${className}`}
      align="center"
      width="100%"
      cellPadding="0"
      cellSpacing="0"
      border="0"
      style={containerStyle}
    >
      <tr>
        <td align="center" style={{ padding: '0px' }}>
          <table
            width="100%"
            cellPadding="0"
            cellSpacing="0"
            border="0"
            style={{ maxWidth: '100%' }}
          >
            <tr>
              <td
                className={tdClassName} // Применяем tdClassName здесь
                style={{
                  padding, // Применяем паддинги здесь
                  ...innerStyle,
                }}
              >
                {children}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  );
};

export default Container;
