import React from 'react';

const Column = ({
  children,
  width = '',
  className = '',
  style = {},
  align = 'left',
  valign = 'top',
}) => {
  return (
    <td
      className={`${className}`}
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
