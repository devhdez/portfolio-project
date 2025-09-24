import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <div className="about-container">
        <img
          src="/assets/me.jpg"
          alt="Profile"
          className="about-image"
        />
        <div className="about-text">
          <p>
            I’m Borja,<strong>Frontend Developer & Communication Specialist</strong> I am from Spain but I've been living in the UK for more than 6 years. 
            My mission is to help people break the language barrier and businesses expand into new markets by building
            websites that are <strong>modern, multilingual, and accessible.</strong>
          </p>
          <p>
            With a degree in Translation & Interpreting and over two years of
            self-taught software engineering, I combine technical skill with
            cultural understanding to deliver digital solutions that truly
            connect.
          </p>
          <a href="/about" className="about-button">
            Send me an email now!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
