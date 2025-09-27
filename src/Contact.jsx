// Contact.jsx
import React from 'react';
import './index.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Get in Touch</h2>
      <p>Have a project in mind? Let’s make it happen.</p>
      
      <form 
        action="https://formspree.io/f/mdkwadbg"
        method="POST"
        className="contact-form"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit" className="contact-submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
