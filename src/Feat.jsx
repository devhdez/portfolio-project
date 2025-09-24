import React from "react";

const Feat = () => {
  return (
    <section className="features">
      <h2>What I Do ✍️</h2>
      <div className="features-container">
        <div className="feature-card">
          <h3>Web Development 💻</h3>
          <p>I design and build websites that are modern, responsive, and tailored to your business goals.</p>
        </div>

        <div className="feature-card">
          <h3>Translation & Localization 🛬</h3>
          <p>I provide English ↔ Spanish translations that go beyond words, adapting tone and style to your audience.</p>
        </div>

        <div className="feature-card">
          <h3>SEO & Digital Growth 📈</h3>
          <p>I help optimize your online presence so your business reaches more clients and niche markets.</p>
        </div>
      </div>
    </section>
  );
};

export default Feat;
