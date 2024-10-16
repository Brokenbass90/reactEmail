import React from 'react';

const Column = ({
  children,
  width = '50%',
  className = '',
  style = {},
  align = 'left',
  valign = 'top',
}) => {
  return (
    <td
      className={`column ${className}`}
      width={width}
      align={align}
      valign={valign}
      style={style}
    >
      {children}
    </td>
  );
};

export default Column;
