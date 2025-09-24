import React from "react";

const Services = () => {
  return (
    <section className="services" id="services">
      <h2>Services</h2>
      <div className="services-list">

        <div className="service-item">
          <div className="service-icon">🌍</div>
          <div>
            <h3>Bilingual Websites</h3>
            <p>
              Responsive business websites in English & Spanish. Includes
              translation + localization so your brand resonates across
              audiences.
            </p>
          </div>
        </div>

        <div className="service-item">
          <div className="service-icon">📑</div>
          <div>
            <h3>Financial Translation Bundle</h3>
            <p>
              Specialized EN ↔ ES translations for reports, policies, and pension
              documents. Accurate, clear, and industry-ready.
            </p>
          </div>
        </div>

        <div className="service-item">
          <div className="service-icon">🔎</div>
          <div>
            <h3>SEO Optimization Add-On</h3>
            <p>
              Boost your site’s visibility with keyword optimization, clean
              structure, and multilingual SEO strategies.
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
