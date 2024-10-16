import React from 'react';

const Image = ({
  src,
  alt = '',
  width = '100%',
  height = 'auto',
  style = {},
  className = '',
  maxWidth = '100%',
}) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{ maxWidth, height, ...style }}
      className={className}
    />
  );
};

export default Image;
