// components/Link.jsx
import React from 'react';

const Link = ({ href, children, className = '', style = {}, universal = false }) => {
  const linkStyle = {
    color: '#007BFF',
    textDecoration: 'none',
    ...style,
  };

  const linkProps = {
    href,
    className: `link ${className}`,
    style: linkStyle,
    ...(universal && { universal: 'true' }), // Добавление универсального атрибута при необходимости
  };

  return (
    <a {...linkProps}>
      {children}
    </a>
  );
};

export default Link;
