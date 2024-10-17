import React from 'react';

const Footer = ({
  backgroundColor = '#ffffff',
  textColor = '#474a50',
  companyAddress,
  riskWarning,
  termsLink,
  unsubscribeLink,
}) => (
  <div
    className="footer"
    style={{
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      padding: '0',
      backgroundColor,
    }}
  >
    <div
      className="address"
      style={{
        padding: '20px 0 0',
        paddingTop: '0',
      }}
    >
      <p
        className="address-text"
        style={{
          color: textColor,
          fontFamily: 'Helvetica',
          fontSize: '14px',
          fontWeight: '400',
          lineHeight: '22px',
          margin: '0',
          padding: '0',
          textAlign: 'center',
          textDecoration: 'none',
        }}
      >
        {companyAddress}
      </p>
    </div>
    <p
      className="warning pt20"
      style={{
        color: textColor,
        fontFamily: 'Helvetica',
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '22px',
        margin: '0',
        padding: '0',
        paddingTop: '20px',
        textAlign: 'center',
        
      }}
      dangerouslySetInnerHTML={{ __html: '{{embedded.company_address}}' }}
    >
    </p>
    <p
      className="subscribe"
      style={{
        color: '#626a7f',
        fontFamily: "Roboto, Helvetica, Arial, sans-serif",
        fontSize: '14px',
        fontWeight: '300',
        lineHeight: '19px',
        margin: '0 auto',
        padding: '0',
        paddingTop: '20px',
        textAlign: 'left',
        textDecoration: 'none',
      }}
    >
      <a
        href={'{{embedded.company_terms_link}}'}
        className="left"
        style={{
          color: textColor,
          display: 'inline-block',
          fontWeight: '400',
          textAlign: 'left',
          textDecoration: 'none',
        }}
      >
        Terms and Conditions
      </a>
      <a
        href={'{{embedded.unsubscribe_link}}'}
        className="right"
        style={{
          color: textColor,
          display: 'inline-block',
          float: 'right',
          fontWeight: '400',
          textAlign: 'right',
          textDecoration: 'none',
        }}
      >
        Unsubscribe
      </a>
    </p>
  </div>
);

export default Footer;
