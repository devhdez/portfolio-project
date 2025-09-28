import React from "react";
import { useTranslation } from 'react-i18next';

const Features = () => {
  const { t } = useTranslation();
  const featureCards = t('features.items', { returnObjects: true });

  return (
    <section className="features">
      <h2>{t('features.title')}</h2>
      <div className="features-container">
        {featureCards.map(({ title, description }) => (
          <div className="feature-card" key={title}>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
