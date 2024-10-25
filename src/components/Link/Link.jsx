import React from 'react';
import PropTypes from 'prop-types';

const addUrlParams = (url, params) => {
  if (!url) return '';
  if (!params) return url;
  const hasQuestionMark = url.includes('?');
  const separator = hasQuestionMark ? '&' : '?';
  return `${url}${separator}${params}`;
};

const Link = ({
  href,
  baseHref,
  params,
  children,
  className = '',
  style = {},
  universal = false,
  imgSrc,
  imgAlt = '',
  imgStyle = {},
  target = '_self',
}) => {
  const finalHref = baseHref ? addUrlParams(baseHref, params) : href;

  const linkStyle = {
    color: '#007BFF',
    textDecoration: 'none',
    ...style,
  };

  const linkProps = {
    href: finalHref,
    className: `link ${className}`,
    style: linkStyle,
    target,
    ...(universal && { universal: 'true' }),
  };

  if (!finalHref) {
    console.warn('Link component: href is not defined or empty.');
  }

  return (
    <a {...linkProps}>
      {children}
      {imgSrc && (
        <img
          src={imgSrc}
          alt={imgAlt}
          style={{
            verticalAlign: 'middle',
            display: 'inline-block',
            ...imgStyle,
          }}
        />
      )}
    </a>
  );
};

Link.propTypes = {
  href: PropTypes.string,
  baseHref: PropTypes.string,
  params: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  universal: PropTypes.bool,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  imgStyle: PropTypes.object,
  target: PropTypes.string,
};

export default Link;
