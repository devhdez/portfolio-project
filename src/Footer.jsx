import React from "react";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h3>Hdez.dev</h3>
          <p>{t('footer.tagline')}</p>
        </div>

        <nav className="footer-nav">
          <a href="#hero">{t('footer.nav.home')}</a>
          <a href="#services">{t('footer.nav.services')}</a>
          <a href="#about">{t('footer.nav.about')}</a>
          <a href="#testimonials">{t('footer.nav.testimonials')}</a>
          <a href="#contact">{t('footer.nav.contact')}</a>
        </nav>

        <div className="footer-contact">
          <a href="mailto:hdezdev@hotmail.com">hdezdev@hotmail.com</a>
          {/* <a href="tel:+1234567890">+1 234 567 890</a> */}
        </div>

        <div className="footer-socials">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">🔗</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">💻</a>
          <a href="mailto:youremail@example.com">✉️</a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>{t('footer.rights', { year })}</p>
      </div>
    </footer>
  );
};

export default Footer;
