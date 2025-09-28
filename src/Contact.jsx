// Contact.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import './index.css';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="contact" id="contact">
      <h2>{t('contact.title')}</h2>
      <p>{t('contact.description')}</p>
      
      <form 
        action="https://formspree.io/f/mdkwadbg"
        method="POST"
        className="contact-form"
      >
        <input
          type="text"
          name="name"
          placeholder={t('contact.namePlaceholder')}
          required
        />
        <input
          type="email"
          name="email"
          placeholder={t('contact.emailPlaceholder')}
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder={t('contact.messagePlaceholder')}
          required
        ></textarea>
        <button type="submit" className="contact-submit">{t('contact.submit')}</button>
      </form>
    </section>
  );
};

export default Contact;
