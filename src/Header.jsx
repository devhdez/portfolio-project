import React from 'react';
import { useTranslation } from 'react-i18next';
import './index.css';

const Header = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  const isEnglish = i18n.language === 'en';

  const buttonText = isEnglish ? 'Change Language!' : 'Cambiar Idioma!';
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
            <li><a href="#">Home</a></li>
            {/* <li><a href="#projects">Services</a></li> */}
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
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
        {buttonText}
      </button>
    </header>
  );
};

export default Header;
