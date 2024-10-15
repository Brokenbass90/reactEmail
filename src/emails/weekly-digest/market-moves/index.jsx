import React from 'react';

const Email = ({ locale, styles, translations }) => {
  // Функция для получения перевода из определенного файла или значения по умолчанию
  const t = (file, key, defaultValue = '') => {
    return (translations[file] && translations[file][key]) || defaultValue;
  };

  return (
    <html>
      
      <head>
         <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <meta name="x-apple-disable-message-reformatting" />

         <link rel="preconnect" href="https://fonts.googleapis.com" />
         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
         <link
           href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Rubik&display=swap"
           rel="stylesheet"
         />
         <style type="text/css" dangerouslySetInnerHTML={{ __html: styles }}></style>
       </head>
      <body>
        <table className="body">
          <tr>
            <td className="center pt20" align="center" valign="top">
              <center>
                <table className="container border-radius">
                  <tr>
                    <td className="padd pt40 pb40">
                      <h1 className="title">
                        {t('aff-SabioTrade', 'block_00', '')}
                      </h1>
                      <p className="text">
                        {t('market-moves', 'block_02', '')}
                      </p>
                      <p className="text">
                        {t('aff-SabioTrade', 'block_02', '')}
                      </p>
                      <p
                        className="text"
                        dangerouslySetInnerHTML={{
                          __html: t('market-moves', 'block_00', ''),
                        }}
                      ></p>
                      <p
                        className="text"
                        dangerouslySetInnerHTML={{
                          __html: t('aff-SabioTrade', 'block_04', ''),
                        }}
                      ></p>
                      <a className="link" href="#">
                        {t('market-moves', 'block_05', 'Ссылка')}
                      </a>

                      <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                        <tr>
                 
                          <td className="column" width="50%" valign="top">
                            <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                              <tr>
                                <td align="center">
                                  <img
                                    src="https://fsms.quadcode.com/storage/public/cs/36/i4hl82562t0amleg/Blog-2.png"
                                    alt="Image 1"
                                    width="100%"
                                    style={{ maxWidth: '100%', height: 'auto' }}
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p
                                    className="text"
                                    dangerouslySetInnerHTML={{
                                      __html: t('aff-SabioTrade', 'block_04', ''),
                                    }}
                                  ></p>
                                </td>
                              </tr>
                            </table>
                          </td>

                          <td className="column" width="50%" valign="top">
                            <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                              <tr>
                                <td align="center">
                                  <img
                                    src="https://fsms.quadcode.com/storage/public/cs/36/i4hl82562t0amle0/Blog-3.png"
                                    alt="Image 2"
                                    width="100%"
                                    style={{ maxWidth: '100%', height: 'auto' }}
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <p>{t('aff-SabioTrade', 'image2_text', 'Текст под картинкой 2')}</p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
    
                    </td>
                  </tr>
                </table>
              </center>
            </td>
          </tr>
        </table>
      </body>
    </html>
  );
};

// Указываем файлы переводов
Email.translationFiles = ['market-moves', 'aff-SabioTrade'];

export default Email;

