// Contact.jsx
import React, { useState } from 'react';
import './index.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <section className="contact" id="contact">
      <h2>Get in Touch</h2>
      <p>Have a project in mind? Let’s make it happen.</p>
      {!submitted ? (
        <form 
        action="https://formspree.io/f/mdkwadbg"
        method="POST"
        className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="contact-submit">Send Message</button>
        </form>
      ) : (
        <p className="thank-you">Thanks for reaching out! I'll get back to you soon.</p>
      )}
    </section>
  );
};

export default Contact;