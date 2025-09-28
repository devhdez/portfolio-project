import React from "react";
import { Trans, useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about" id="about">
      <h2>{t('about.title')}</h2>
      <div className="about-container">
        <img
          src="/portfolio-project/assets/me.jpg"
          alt="Profile"
          className="about-image"
        />
        <div className="about-text">
          {[0, 1].map((index) => (
            <p key={index}>
              <Trans
                i18nKey={`about.paragraphs.${index}`}
                components={{ strong: <strong /> }}
              />
            </p>
          ))}
          <a href="/about" className="about-button">
            {t('about.cta')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
