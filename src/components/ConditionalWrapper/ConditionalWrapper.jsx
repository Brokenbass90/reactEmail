import React from 'react';
import PropTypes from 'prop-types';

const ConditionalWrapper = ({ children, width = '580' }) => {
  const openingComment = `<!--[if (gte mso 9)|(IE)]>
    <table cellpadding="0" cellspacing="0" border="0" width="${width}" align="center"><tr><td>
  <![endif]-->`;

  const closingComment = `<!--[if (gte mso 9)|(IE)]>
    </td></tr></table>
  <![endif]-->`;

  return (
    <>
      {/* Вставляем условные комментарии без обёртки */}
      <div dangerouslySetInnerHTML={{ __html: openingComment }} />
      {children}
      <div dangerouslySetInnerHTML={{ __html: closingComment }} />
    </>
  );
};

ConditionalWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
};

export default ConditionalWrapper;
