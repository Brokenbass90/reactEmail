import React from 'react';

const Button = ({
  href,
  children,
  className = '',
  style = {},
  width = 'auto',
  align = 'center',
  backgroundColor = '#007BFF',
  color = '#FFFFFF',
}) => {
  const buttonStyle = {
    display: 'inline-block',
    width,
    backgroundColor,
    color,
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    textAlign: 'center',
    ...style,
  };

  return (
    <table align={align} border="0" cellPadding="0" cellSpacing="0">
      <tr>
        <td>
          <a href={href} className={className} style={buttonStyle}>
            {children}
          </a>
        </td>
      </tr>
    </table>
  );
};

export default Button;
