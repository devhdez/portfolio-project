import React from "react";
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();
  const services = t('services.items', { returnObjects: true });

  return (
    <section className="services" id="services">
      <h2>{t('services.title')}</h2>
      <div className="services-list">
        {services.map(({ icon, title, description }, index) => (
          <div
            className={`service-item${index === services.length - 1 ? ' coming-soon' : ''}`}
            key={title}
          >
            <div className="service-icon">{icon}</div>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
