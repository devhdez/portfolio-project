import React from "react";

const Features = () => {
  return (
    <section className="features">
      <h2>What I Do</h2>
      <div className="features-container">

        <div className="feature-card">
          <h3>🌍 Multilingual Communication</h3>
          <p>
            Helping businesses sound natural in English and Spanish so every
            client feels at home.
          </p>
        </div>

        <div className="feature-card">
          <h3>✍️ Clear Writing</h3>
          <p>
            Polishing text so your message is sharp, professional, and easy to
            understand.
          </p>
        </div>

        <div className="feature-card">
          <h3>💻 Frontend Development</h3>
          <p>
            Building modern, responsive websites that look great and work
            everywhere.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Features;
