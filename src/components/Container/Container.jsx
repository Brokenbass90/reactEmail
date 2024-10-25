import React from 'react';
import PropTypes from 'prop-types';

const Container = ({
  children,
  className = '',
  style = {},
  tdStyle = {},
  tdClassName = '',
  backgroundColor = '#ffffff',
  borderRadius = '0',
  maxWidth = '580px',
  padding = '50px',
  align = 'center',
}) => {
  const tableStyle = {
    backgroundColor,
    borderRadius,
    width: '100%',
    maxWidth,
    margin: '0 auto',
    ...style,
  };

  const cellStyle = {
    padding,
    ...tdStyle,
  };

  // Условные комментарии для Outlook
  const openingComment = `
<!--[if (gte mso 9)|(IE)]>
  <table align="${align}" cellpadding="0" cellspacing="0" border="0" width="${maxWidth}">
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
      className={`container ${className}`}
      align={align}
      width="100%"
      cellPadding="0"
      cellSpacing="0"
      border="0"
      style={tableStyle}
    >
      <tbody>
        <tr>
          <td align={align} valign="top" style={{ padding: '0px' }}>
            {/* Вставляем условные комментарии */}
            <div dangerouslySetInnerHTML={{ __html: openingComment }} />
            <table width="100%" cellPadding="0" cellSpacing="0" border="0">
              <tbody>
                <tr>
                  <td
                    className={tdClassName}
                    align={align}
                    style={cellStyle}
                  >
                    {children}
                  </td>
                </tr>
              </tbody>
            </table>
            <div dangerouslySetInnerHTML={{ __html: closingComment }} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  tdStyle: PropTypes.object,
  tdClassName: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.string,
  maxWidth: PropTypes.string,
  padding: PropTypes.string,
  align: PropTypes.string,
};

export default Container;
