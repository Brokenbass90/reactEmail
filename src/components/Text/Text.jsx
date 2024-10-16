import React from 'react';

const Text = ({ children, className = '', style = {} }) => {
  return (
    <p className={className} style={style}>
      {children}
    </p>
  );
};

export default Text;
