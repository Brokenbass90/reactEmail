import React from 'react';
import EmailHead from '../../../components/EmailHead/EmailHead';
import Footer from '../../../components/Footer/Footer';
import SocialNetworks from '../../../components/SocialNetworks/SocialNetworks';
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

  const socialNetworksData = [
    {
      href: 'https://www.facebook.com/iqoptioneu',
      imgSrc: 'https://fsms.iqoption.com/storage/public/cn/td/fri03qqv4qln7vdg/fb.png',
      altText: 'Facebook',
    },
    {
      href: 'https://www.instagram.com/iqoption_official/',
      imgSrc: 'https://fsms.iqoption.com/storage/public/cn/td/fri03qqv4qln7ve0/ig.png',
      altText: 'Instagram',
    },
    {
      href: 'https://www.youtube.com/c/IQOption',
      imgSrc: 'https://fsms.iqoption.com/storage/public/cn/td/gb285cee2vclvjq0/yt.png',
      altText: 'YouTube',
    },
    {
      href: 'https://twitter.com/IQOption',
      imgSrc: 'https://fsms.iqoption.com/storage/public/cn/td/fri03qqv4qln7vf0/tw.png',
      altText: 'Twitter',
    },
  ];

  return (
    <html >
      <EmailHead styles={styles} />
      <body className='plr10'>
        <EmailBody backgroundColor="#f5f9fc" width="100%">
          <Container
              padding="0"
              backgroundColor="#f5f9fc"
              borderRadius="0"
              maxWidth="580px"
              tdClassName="padd pt20"
            >
            
            <Logo
              src="https://fsms.iqoption.com/storage/public/cc/q0/m2ui9sl8a8p49h2g/logo-blog.png"
              href="https://api.iqoption.com/v1/multi-links/open-asset?type=forex&asset=1?aff=7&afftrack=mail_blog10-10-24&retrack=blog10-10-24"
              alt="Logo"
              width="96px"
              maxWidth="96px"
              paddingTop="8px"
              paddingBottom="0"
              align="center"
              margin="0 auto"
              universal={true}
            />
          </Container>
          <Container
              padding="0"
              backgroundColor="#f5f9fc"
              borderRadius="0"
              maxWidth="580px"
              tdClassName="padd pt20"
            >
            <Image
              src="https://fsms.iqoption.com/storage/public/cc/q0/isui9sl8a8p49h20/Group 218 (1).png"
              alt="Example Image"
              width="100%"
              height="auto"
              className="responsive-image"
            />
          </Container>

          <div style={{ height: '20px', fontSize: '20px', lineHeight: '20px' }}>&nbsp;</div>

          <Container
            backgroundColor="#ffffff"
            borderRadius="8px"
            width="580px"
            tdClassName="padd pt40 pb40"
          >
          <table width="100%" cellPadding="0" cellSpacing="0" border="0">
              <tr>
                <Column className='small-column-left'>
                    <Image
                      src="https://fsms.quadcode.com/storage/public/cs/36/i4hl82562t0amleg/Blog-2.png"
                      alt="Example Image"
                      width="100%"
                      height="auto"
                      className="responsive-image"
                      style={{ borderRadius: '8px' }}
                    />
                 </Column>
                 <Column className='small-column-right' width='70%'>
                 
                    <Text className="text" html={true}>
                      {t('market-moves', 'block_04')}
                    </Text>

                  </Column>
                </tr>
              </table>

            <Text className="title">
              {t('market-moves', 'block_01', '')}
            </Text>
            <Text className="text">
              {t('market-moves', 'block_02', '')}
            </Text>
          </Container>
        </EmailBody>

        <EmailBody backgroundColor="#e6f5df" width="100%" className='width100'>
            <Container
                padding="0"
                backgroundColor="#e6f5df"
                borderRadius="0"
                maxWidth="580px"
                tdClassName="padd pt20"
              >
                <Text className="title">
                {t('market-moves', 'block_05', '')}
              </Text>
              <Image
                src="https://fsms.quadcode.com/storage/public/cs/36/i4hl82562t0amleg/Blog-2.png"
                alt="Example Image"
                width="100%"
                height="auto"
                className="responsive-image"
                style={{ borderRadius: '8px' }}
              />
                  
            </Container>
        </EmailBody>

        <EmailBody backgroundColor="#f5f9fc" width="100%">
          <Container
              padding="0"
              backgroundColor="#f5f9fc"
              borderRadius="0"
              maxWidth="580px"
              tdClassName="padd pt20"
            >
            <table width="100%" cellPadding="0" cellSpacing="0" border="0">
              <tr>
                <Column className='column'>
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
                <Column className='column'>
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
                <Link
                    href="https://example.com"
                    className="custom-link"
                    style={{ color: '#007BFF' }}
                    universal={true} 
                  >
                    {t('market-moves', 'block_05', 'Ссылка')}
                </Link>
              </tr>
            </table>
            
            <Button
              href="https://ftvqpcw8xqn.typeform.com/to/AQmhPSJ9"
              width="245px"
              paddingTop="0"
              paddingBottom="0"
              borderRadius="4px"
              textColor="#fff"
              backgroundColor="#0081e3"
              align="center"
              universal={true} 
              imgSrc="https://static.cdnroute.io/files/storage/public/62/a8/50b90d0d72f8b6c6g8/icon_arrow__1___1_.png"
              imgAlt="Arrow Icon"
              imgStyle={{ maxWidth: '18px' }}
              className="medium-button"
            >
              {t('market-moves', 'block_05', 'Ссылка')}
            </Button>

          </Container>
          <Container
            backgroundColor="#f5f9fc"
            borderRadius="8px"
            width="580px"
            tdClassName="padd pt40 pb40"
          >
            <SocialNetworks networks={socialNetworksData} iconSize="24px" />
            <Footer
                backgroundColor="#f5f9fc"
                textColor="#474a50"
                companyAddress={translations.company_address}
                riskWarning={translations.risk_warning} 
                termsLink="https://iqoption.com/terms-and-conditions"
                unsubscribeLink={translations.unsubscribe_link}
              />

            </Container>
        </EmailBody>
      </body>
    </html>
  );
};

// Указываем файлы переводов
Email.translationFiles = ['market-moves', 'aff-SabioTrade'];

export default Email;

