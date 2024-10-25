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
      imgSrc:
        'https://fsms.iqoption.com/storage/public/cn/td/fri03qqv4qln7vdg/fb.png',
      altText: 'Facebook',
    },
    {
      href: 'https://www.instagram.com/iqoption_official/',
      imgSrc:
        'https://fsms.iqoption.com/storage/public/cn/td/fri03qqv4qln7ve0/ig.png',
      altText: 'Instagram',
    },
    {
      href: 'https://www.youtube.com/c/IQOption',
      imgSrc:
        'https://fsms.iqoption.com/storage/public/cn/td/gb285cee2vclvjq0/yt.png',
      altText: 'YouTube',
    },
    {
      href: 'https://twitter.com/IQOption',
      imgSrc:
        'https://fsms.iqoption.com/storage/public/cn/td/fri03qqv4qln7vf0/tw.png',
      altText: 'Twitter',
    },
  ];

  return (
    <html xmlns="http://www.w3.org/1999/xhtml">
      <EmailHead styles={styles} />
      <body>
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
              width="100%"
              height="auto"
              className="responsive-image"
              borderRadius="0"
            />
          </Container>

          <div
            style={{
              height: '20px',
              fontSize: '20px',
              lineHeight: '20px',
              backgroundColor: 'transparent',
            }}
          >
            &nbsp;
          </div>

          <Container
            backgroundColor="#ffffff"
            borderRadius="4px"
            width="580px"
            tdClassName="padd pt40 pb40 shadow"
          >
            <table width="100%" cellPadding="0" cellSpacing="0" border="0">
              <tr>
                <Column className="small-column-left">
                  <Image
                    src="https://fsms.quadcode.com/storage/public/cs/36/i4hl82562t0amleg/Blog-2.png"
                    alt="Example Image"
                    width="100%"
                    height="auto"
                    className="responsive-image"
                    style={{ borderRadius: '0' }}
                  />
                </Column>

                <Column className="small-column-right" width="70%">
                  <Text className="orange-text" html={true}>
                    {t('blog171024', 'block_01')}
                  </Text>
                  <Text className="fat-text" html={true}>
                    {t('blog171024', 'block_02')}
                  </Text>
                </Column>
              </tr>
            </table>
            <div
              style={{ height: '20px', fontSize: '20px', lineHeight: '20px' }}
            >
              &nbsp;
            </div>
            <Text className="text pb10" html={true}>
              {t('blog171024', 'block_03')}
            </Text>
            <Text className="text pb10" html={true}>
              {t('blog171024', 'block_04')}
            </Text>
            <Text className="text" html={true}>
              {t('blog171024', 'block_05')}
            </Text>

            <div
              style={{ height: '40px', fontSize: '40px', lineHeight: '40px' }}
            >
              &nbsp;
            </div>

            <Button
              baseHref={t('blog171024', 'block_23', '')}
              params="utm_source=emailcampaign&utm_campaign=mail_blog17-10-24&aff=88&afftrack=mail_blog17-10-24&retrack=mail_blog17-10-24"
              width="280px"
              paddingTop="0"
              paddingBottom="0"
              textColor="#fff"
              backgroundColor="#24c883"
              align="center"
              className="medium-button"
            >
              {t('blog171024', 'block_06')}
            </Button>
          </Container>
        </EmailBody>

        <div style={{ height: '30px', fontSize: '30px', lineHeight: '30px' }}>
          &nbsp;
        </div>

        <EmailBody backgroundColor="#e6f5df" width="100%" className="width100">
          <Container
            padding="0"
            backgroundColor="#e6f5df"
            borderRadius="0"
            maxWidth="580px"
            tdClassName="pt50 pb50"
          >
            <Image
              src="https://fsms.iqoption.com/storage/public/cc/q1/hemi9sl8a8p49h30/Line 2.png"
              width="80%"
              height="auto"
              style={{ width: '80%', paddingBottom: '0px' }}
            />

            <Text className="title pt15 pb20" html={true}>
              {`${t('blog171024', 'block_07')} <span style="color: #14b672 !important;">${t('blog171024', 'block_08')}</span>`}
            </Text>
            <div className="green-block">
              <Text
                className="fat-text"
                html={true}
                paddingTop="0"
                paddingBottom="4px"
              >
                {t('blog171024', 'block_09')}
              </Text>
              <Text
                className="gray-text"
                html={true}
                paddingTop="0"
                paddingBottom="12px"
                imgSrc="https://fsms.quadcode.com/storage/public/cn/oo/l1q85cee2vclvipg/green-man.png"
                imgAlt="Green Man"
                imgClassName="green-man"
                imgStyle={{
                  clear: 'both',
                  display: 'inline-block',
                  margin: '0 3px',
                  maxWidth: '100%',
                  outline: '0',
                  textDecoration: 'none',
                  verticalAlign: 'middle',
                  width: '24px !important',
                }}
              >
                {`${t('blog171024', 'block_10')}
                  {{img}}
                  <span style="color: #406134 !important; font-weight: 700;">${t('blog171024', 'block_11')}</span>`}
              </Text>

              <Text
                className="text"
                html={true}
                paddingTop="0"
                paddingBottom="12px"
              >
                {t('blog171024', 'block_12')}
              </Text>
              <Button
                baseHref={t('blog171024', 'block_24', '')}
                params="utm_source=emailcampaign&utm_campaign=mail_blog17-10-24&aff=88&afftrack=mail_blog17-10-24&retrack=mail_blog17-10-24"
                width="280px"
                paddingTop="0"
                paddingBottom="0"
                textColor="#fff"
                backgroundColor="#24c883"
                align="center"
                className="medium-button"
              >
                {t('blog171024', 'block_13')}
              </Button>

              {/* <Image
                  src="https://fsms.quadcode.com/storage/public/cs/36/i4hl82562t0amleg/Blog-2.png"
                  alt="Example Image"
                  width="100%"
                  height="auto"
                  className="responsive-image"
                  style={{ borderRadius: '0' }}
                /> */}
            </div>
          </Container>
        </EmailBody>

        <EmailBody backgroundColor="#f5f9fc" width="100%">
          <Container
            padding="0"
            backgroundColor="#f5f9fc"
            borderRadius="0"
            maxWidth="580px"
            tdClassName="padd pt50"
          >
            <Image
              src="https://fsms.iqoption.com/storage/public/cc/q1/hehbdrom0oposqa0/Line 2 (1).png"
              width="80%"
              height="auto"
              style={{ width: '80%', paddingBottom: '0px' }}
            />

            <Text className="title pt15 pb20" html={true}>
              {`${t('blog171024', 'block_14')} <span style="color: #14b672 !important;">${t('blog171024', 'block_15')}</span>`}
            </Text>
            <table
              width="100%"
              cellPadding="0"
              cellSpacing="0"
              border="0"
              align="center"
            >
              <tr>
                <Column className="column shadow bg-white">
                  <div className="padding">
                    <Link
                      baseHref={t('blog171024', 'block_24')}
                      params="utm_source=emailcampaign&utm_campaign=mail_blog17-10-24&aff=88&afftrack=mail_blog17-10-24&retrack=mail_blog17-10-24"
                      target="_blank"
                    >
                      <Image
                        src="https://fsms.quadcode.com/storage/public/cs/36/i4hl82562t0amleg/Blog-2.png"
                        alt="Example Image"
                        width="100%"
                        height="auto"
                        className="responsive-image"
                        style={{ borderRadius: '8px' }}
                      />
                    </Link>

                    <div className="padding-for-columns">
                      <Text html={true} className="item-title pb15">
                        {t('blog171024', 'block_16')}
                      </Text>
                      <Text html={true} className="text pb15">
                        {t('blog171024', 'block_17')}
                      </Text>
                      <Link
                        baseHref={t('blog171024', 'block_25')}
                        params="utm_source=emailcampaign&utm_campaign=mail_blog17-10-24&aff=88&afftrack=mail_blog17-10-24&retrack=mail_blog17-10-24"
                        className="link"
                        target="_blank"
                        imgSrc="https://fsms.iqoption.com/storage/public/62/d6/7c3ee61fa6c4d6h4a2/blue_arrow.png"
                        imgAlt="Arrow"
                        imgStyle={{ width: '7px', marginLeft: '5px' }}
                        imgPosition="after"
                      >
                        {t('blog171024', 'block_18')}
                      </Link>
                    </div>
                  </div>
                </Column>

                <Column
                  className="column"
                  style={{ width: '4%', height: '20px' }}
                >
                  &nbsp;
                </Column>

                <Column className="column shadow bg-white">
                  <div className="padding">
                    <Link
                      baseHref={t('blog171024', 'block_25')}
                      params="utm_source=emailcampaign&utm_campaign=mail_blog17-10-24&aff=88&afftrack=mail_blog17-10-24&retrack=mail_blog17-10-24"
                      target="_blank"
                    >
                      <Image
                        src="https://fsms.quadcode.com/storage/public/cs/36/i4hl82562t0amle0/Blog-3.png"
                        alt="Example Image"
                        width="100%"
                        height="auto"
                        className="responsive-image"
                        style={{ borderRadius: '8px' }}
                      />
                    </Link>
                    <div className="padding-for-columns">
                      <Text html={true} className="item-title pb15">
                        {t('blog171024', 'block_19')}
                      </Text>
                      <Text html={true} className="text pb15">
                        {t('blog171024', 'block_20')}
                      </Text>
                      <Link
                        baseHref={t('blog171024', 'block_25')}
                        params="utm_source=emailcampaign&utm_campaign=mail_blog17-10-24&aff=88&afftrack=mail_blog17-10-24&retrack=mail_blog17-10-24"
                        className="link"
                        target="_blank"
                        imgSrc="https://fsms.iqoption.com/storage/public/62/d6/7c3ee61fa6c4d6h4a2/blue_arrow.png"
                        imgAlt="Arrow"
                        imgStyle={{ width: '7px', marginLeft: '5px' }}
                        imgPosition="after"
                      >
                        {t('blog171024', 'block_21')}
                      </Link>
                    </div>
                  </div>
                </Column>
              </tr>
            </table>

            <Button
              href={`https://api.iqoption.com/v1/multi-links/open-asset?type=forex&asset=1?aff=7&afftrack=mail_blog10-10-24&retrack=blog10-10-24`}
              width="280px"
              paddingTop="30px"
              paddingBottom="0"
              textColor="#fff"
              backgroundColor="#24c883"
              align="center"
              className="medium-button"
            >
              {t('blog171024', 'block_21')}
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
Email.translationFiles = ['blog171024'];

export default Email;
