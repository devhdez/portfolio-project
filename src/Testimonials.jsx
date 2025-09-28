import React from "react";
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials = t('testimonials.items', { returnObjects: true });

  return (
    <section className="testimonials" id="testimonials">
      <h2>{t('testimonials.title')}</h2>
      <div className="testimonials-container">
        {testimonials.map(({ quote, author, role }) => (
          <div className="testimonial-card" key={author}>
            <p className="testimonial-text">{quote}</p>
            <h4 className="testimonial-author">
              {author}
              <br />
              {role}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
