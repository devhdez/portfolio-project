import React from "react";

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <h2>What Clients Say 🤷‍♂️</h2>
      <div className="testimonials-container">

        <div className="testimonial-card">
          <p className="testimonial-text">
            “ El nivel de calidad de las traducciones siempre ha sido estupendo,
             adaptándose tanto al inglés americano como al británico,
             y a las convenciones de cada revista, muchas de ellas
            estando clasificadas en JCR y siendo muy exigentes con la calidad del idioma”
          </p>
          <h4 className="testimonial-author">— Daniel Rodríguez Rodríguez.<br></br>Profesor de la Universidad Europea de Canarias.</h4>
        </div>

        <div className="testimonial-card">
          <p className="testimonial-text">
            “He contado con el expertise de Borja en asuntos de traducción para varios proyectos de marketing que he realizado.
            Es necesario contar con una traducción experta para que los copys y mensajes de las campañas de comunicación tengan sentido en cualquier idioma."
          </p>
          <h4 className="testimonial-author">— Ian Moreno Aguado<br></br>Experto en SEO y Marketing Digital</h4>
        </div>

        <div className="testimonial-card">
          <p className="testimonial-text">
            “Created a polished bilingual website that exceeded our
            expectations. Everything works smoothly, and the copy sounds
            professional in both languages.”
          </p>
          <h4 className="testimonial-author">— Daniel Kilders<br></br>Creador de Kilders GMBH</h4>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
