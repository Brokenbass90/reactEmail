import React from 'react';

const SocialNetworks = ({ networks, iconSize = '24px' }) => (
  <div
    className="socials center"
    style={{
      display: 'block',
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      fontSize: '0',
      margin: '0 auto',
      textAlign: 'center',
    }}
  >
    {networks.map((network, index) => (
      <a
        key={index}
        href={network.href}
        target="_blank"
        style={{
          color: '#2ba6cb',
          display: 'inline-block',
          margin: '0 10px',
          textDecoration: 'none',
          verticalAlign: 'middle',
        }}
      >
        <img
          src={network.imgSrc}
          alt={network.altText}
          style={{
            border: 'none',
            clear: 'both',
            display: 'block',
            margin: '0 6px',
            maxWidth: iconSize,
            outline: 'none',
            textDecoration: 'none',
            width: 'auto',
          }}
        />
      </a>
    ))}
  </div>
);

export default SocialNetworks;
