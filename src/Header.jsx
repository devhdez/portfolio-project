import React from 'react';
import { useTranslation } from 'react-i18next';
import './index.css';

const Header = () => {
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.resolvedLanguage || i18n.language || 'en';

  const toggleLanguage = () => {
    const newLang = currentLanguage.startsWith('en') ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  const isEnglish = currentLanguage.startsWith('en');

  const flagUrl = isEnglish
    ? '/portfolio-project/assets/spain-flag.png'
    : '/portfolio-project/assets/uk-flag.png';
  
  return (
    <header className="App-header">
      <img
        src="/portfolio-project/assets/HDEZ-cropped.svg"
        alt="Logo"
        className="logo"
      />
      <div className="nav-container">
        <nav className="nav">
          <ul>
            <li><a href="#hero">{t('header.nav.home')}</a></li>
            <li><a href="#services">{t('header.nav.services')}</a></li>
            <li><a href="#about">{t('header.nav.about')}</a></li>
            <li><a href="#contact">{t('header.nav.contact')}</a></li>
          </ul>
        </nav>
      </div>

      <button
        className="change-lng-button"
        onClick={toggleLanguage}
        style={{
          backgroundImage: `url(${flagUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'contain',
          color: 'white',
          minWidth: '150px',
          height: '40px',
          fontWeight: 'bold',
          border: 'none',
          borderRadius: '6px',
          padding: '0 1rem',
          cursor: 'pointer',
          textShadow: '1px 1px 2px rgba(0,0,0,0.6)',
          transition: 'background 0.3s ease',
          whiteSpace: 'nowrap'
        }}
      >
        {t('header.changeLanguage')}
      </button>
    </header>
  );
};

export default Header;
