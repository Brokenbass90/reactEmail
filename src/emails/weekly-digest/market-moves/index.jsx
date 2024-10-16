import React from 'react';
import Logo from '../../../components/logo/logo';
import EmailBody from '../../../components/EmailBody/EmailBody';
import Container from '../../../components/Container/Container';
import Text from '../../../components/Text/Text';
import Image from '../../../components/Image/Image';
import Column from '../../../components/TwoColumn/TwoColumn';
import Link from '../../../components/Link/Link';
import Button from '../../../components/Button/Button';

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
      <body className='plr10'>
        <EmailBody backgroundColor="#f5f9fc" width="100%">
          <Container
              padding="0"
              backgroundColor="none"
              borderRadius="0"
              maxWidth="580px"
              tdClassName="padd pt20"
            >
            
            <Logo
              src="https://fsms.iqoption.com/storage/public/cc/q0/m2ui9sl8a8p49h2g/logo-blog.png"
              href="https://api.iqoption.com/v1/multi-links/open-asset?type=forex&asset=1?aff=7&afftrack=mail_blog10-10-24&retrack=blog10-10-24"
              alt="Logo"
              width="96px"
              maxWidth='96px'
              paddingTop="8px"
              paddingBottom="0"
              align="center"
              margin="0 auto"
            />

            <img
              className='bg-image'
              src="https://fsms.iqoption.com/storage/public/cc/q0/isui9sl8a8p49h20/Group 218 (1).png"
              width="100%"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Container>
          <Container
            backgroundColor="#ffffff"
            borderRadius="8px"
            width="580px"
            tdClassName="padd pt40 pb40"
          >
            <Text className="title">
              {t('market-moves', 'block_01', '')}
            </Text>

            <p className="subtitle">
              {t('aff-SabioTrade', 'block_00', '')}
            </p>
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
                <Column>
                  <Image
                    src="https://fsms.quadcode.com/storage/public/cs/36/i4hl82562t0amleg/Blog-2.png"
                    alt="Example Image"
                    width="100%"
                    height="auto"
                    className="responsive-image"
                    style={{ borderRadius: '8px' }}
                  />
                  <Text className="text">
                    {t('market-moves', 'block_01', '')}
                  </Text>
                  <Link href="https://example.com" className="custom-link" style={{ color: '#007BFF' }}>
                    {t('market-moves', 'block_05', 'Ссылка')}
                  </Link>
                </Column>
                <Column>
                  <Image
                    src="https://fsms.quadcode.com/storage/public/cs/36/i4hl82562t0amle0/Blog-3.png"
                    alt="Example Image"
                    width="100%"
                    height="auto"
                    className="responsive-image"
                    style={{ borderRadius: '8px' }}
                  />
                </Column>
                <Text className="text">
                  {t('market-moves', 'block_01', '')}
                </Text>
                <Link href="https://example.com" className="custom-link" style={{ color: '#007BFF' }}>
                    {t('market-moves', 'block_05', 'Ссылка')}
                </Link>
              </tr>
            </table>
            <Button
              href="https://example.com"
              width="100%"
              backgroundColor="#28a745"
              color="#FFFFFF"
              className="custom-button"
              style={{ fontSize: '16px' }}
            >
              {t('market-moves', 'block_05', 'Ссылка')}
            </Button>

          </Container>
        </EmailBody>
      </body>
    </html>
  );
};

// Указываем файлы переводов
Email.translationFiles = ['market-moves', 'aff-SabioTrade'];

export default Email;

