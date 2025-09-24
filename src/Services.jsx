import React from "react";

const Services = () => {
  return (
    <section className="services" id="services">
      <h2>Services</h2>
      <div className="services-list">

        <div className="service-item">
          <div className="service-icon">🌍</div>
          <div>
            <h3>Multilingual Websites</h3>
            <p>
              Responsive websites in English & Spanish, fully localized so they
              feel natural to every audience. Expand your business without losing
              your voice.
            </p>
          </div>
        </div>

        <div className="service-item">
          <div className="service-icon">✍️</div>
          <div>
            <h3>Clear & Polished Copy</h3>
            <p>
              Already have content in one language? I help refine and adapt your
              text so it sounds professional, engaging, and tailored to your
              clients — no awkward phrasing, just clean communication.
            </p>
          </div>
        </div>

        <div className="service-item">
          <div className="service-icon">💻</div>
          <div>
            <h3>Frontend Development</h3>
            <p>
              Modern, responsive web design that’s fast, user-friendly, and
              easy to manage. Whether a business site, portfolio, or webshop —
              I make it functional and elegant.
            </p>
          </div>
        </div>

        <div className="service-item coming-soon">
          <div className="service-icon">🛠️</div>
          <div>
            <h3>Coming Soon</h3>
            <p>
              Demo projects & case studies will be added here as I develop and
              launch new work.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
