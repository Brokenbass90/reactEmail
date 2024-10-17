import React from 'react';

const EmailHead = ({ styles }) => (
  <head>
    <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="x-apple-disable-message-reformatting" />
    <title> </title>

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Rubik&display=swap"
      rel="stylesheet"
    />
    <style dangerouslySetInnerHTML={{ __html: styles }}></style>
  </head>
);

export default EmailHead;
