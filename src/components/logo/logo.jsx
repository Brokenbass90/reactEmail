import React from 'react';

const addUnit = (value) => {
  if (typeof value === 'number') {
    return `${value}px`;
  } else if (typeof value === 'string') {
    if (value === 'auto') {
      return value;
    } else if (value.match(/^\d+$/)) {
      return `${value}px`;
    } else {
      return value;
    }
  }
  return value;
};

const Logo = ({
  src,
  href,
  alt = 'Logo',
  width = '',
  maxWidth = '',
  height = 'auto',
  paddingTop = 0,
  paddingBottom = 0,
  align = 'left',
  className = '',
  style = {},
  margin = '0',
}) => {
  const imgStyles = {
    width: width ? addUnit(width) : undefined,
    maxWidth: maxWidth ? addUnit(maxWidth) : undefined,
    height: height !== 'auto' ? addUnit(height) : 'auto',
    paddingTop: paddingTop ? addUnit(paddingTop) : undefined,
    paddingBottom: paddingBottom ? addUnit(paddingBottom) : undefined,
    display: 'block',
    margin: margin !== 'auto' ? addUnit(margin) : 'auto',
    ...style,
  };

  const imgElement = (
    <img
      src={src}
      alt={alt}
      style={imgStyles}
      className={className}
    />
  );

  return (
    <table width="100%" cellPadding="0" cellSpacing="0" border="0">
      <tr>
        <td align={align}>
          {href ? (
            <a href={href} target="_blank" style={{ textDecoration: 'none' }}>
              {imgElement}
            </a>
          ) : (
            imgElement
          )}
        </td>
      </tr>
    </table>
  );
};

export default Logo;
