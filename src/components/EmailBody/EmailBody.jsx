import React from 'react';

const EmailBody = ({
  children,
  className = '',
  style = {},
  tdClassName = '',
  tdStyle = {},
  tdAlign = 'center',
  tdValign = 'top',
  backgroundColor = '#f3f3f3',
  width = '100%',
}) => {
  return (
    <table
      className={`body ${className}`}
      style={{ backgroundColor, width, ...style }}
      cellPadding="0"
      cellSpacing="0"
      border="0"
    >
      <tr>
        <td
          className={tdClassName}
          style={tdStyle}
          align={tdAlign}
          valign={tdValign}
        >
          <center>{children}</center>
        </td>
      </tr>
    </table>
  );
};

export default EmailBody;
