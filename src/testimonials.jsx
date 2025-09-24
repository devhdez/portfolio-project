import React from "react";

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <h2>What Clients Say</h2>
      <div className="testimonials-container">

        <div className="testimonial-card">
          <p className="testimonial-text">
            “Professional, reliable, and fast. The translation was accurate and
            felt completely natural — it read as if it were originally written
            in Spanish.”
          </p>
          <h4 className="testimonial-author">— Client A</h4>
        </div>

        <div className="testimonial-card">
          <p className="testimonial-text">
            “Great communication throughout the project. He not only translated
            but also improved the clarity of our content. Highly recommended.”
          </p>
          <h4 className="testimonial-author">— Client B</h4>
        </div>

        <div className="testimonial-card">
          <p className="testimonial-text">
            “Created a polished bilingual website that exceeded our
            expectations. Everything works smoothly, and the copy sounds
            professional in both languages.”
          </p>
          <h4 className="testimonial-author">— Client C</h4>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
