import React from 'react';
import PropTypes from 'prop-types';

const EmailBody = ({
  children,
  className = '',
  style = {},
  backgroundColor = '#f3f3f3',
  width = '100%',
  align = 'center',
}) => {
  // Условные комментарии для Outlook
  const openingComment = `
<!--[if (gte mso 9)|(IE)]>
  <table align="${align}" cellpadding="0" cellspacing="0" border="0" width="${width}">
    <tr>
      <td>
<![endif]-->
`;

  const closingComment = `
<!--[if (gte mso 9)|(IE)]>
      </td>
    </tr>
  </table>
<![endif]-->
`;

  return (
    <table
      className={`body ${className}`}
      style={{
        backgroundColor,
        width,
        ...style,
      }}
      align={align}
      cellPadding="0"
      cellSpacing="0"
      border="0"
    >
      <tbody>
        <tr>
          <td align={align} valign="top" style={{ padding:  '0 10px' }}>
            {/* Вставляем условные комментарии */}
            <div dangerouslySetInnerHTML={{ __html: openingComment }} />
            {children}
            <div dangerouslySetInnerHTML={{ __html: closingComment }} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

EmailBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  backgroundColor: PropTypes.string,
  width: PropTypes.string,
  align: PropTypes.string,
};

export default EmailBody;
