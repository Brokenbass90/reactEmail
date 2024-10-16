import React from 'react';

const Link = ({ href, children, className = '', style = {} }) => {
  return (
    <a href={href} className={`link ${className}`} style={style}>
      {children}
    </a>
  );
};

export default Link;
