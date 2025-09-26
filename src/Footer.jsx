import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h3>Hdez.dev</h3>
          <p>Frontend Developer & Communication Specialist</p>
        </div>

        <nav className="footer-nav">
          <a href="#hero">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
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
        <p>© {new Date().getFullYear()} Hdez.dev — All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
