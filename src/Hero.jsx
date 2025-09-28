import React from 'react';
import { useTranslation } from 'react-i18next';

const hero = () => {
  const { t } = useTranslation();
  const descriptionLines = t('hero.description', { returnObjects: true });

  return (
    <section className="hero" id="hero">
      <h1 className="hero-title typing">
        {t('hero.title')}
      </h1>

      <p>
        {descriptionLines.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < descriptionLines.length - 1 && (
              <>
                <br />
                <br />
              </>
            )}
          </React.Fragment>
        ))}
      </p>

      <img
        src={`${import.meta.env.BASE_URL}relaxed-guy.png`}
        alt="flat-image"
        className="flat-image"
      />

          <div className='hero-buttons'>
          <button className='hero-button hero-button-know'
            onClick={() => {document.getElementById('about').scrollIntoView({ behavior: 'smooth' });}}>
            {t('hero.cta.about')}
          </button>
          <button className='hero-button hero-button-primary'
            onClick={() => {document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });}}>
            {t('hero.cta.contact')}
          </button>

          </div>
    </section>
  );
};

export default hero;
