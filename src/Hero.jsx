import React from 'react';
import useStringSwitcher from './Stringswitcher';

const hero = () => {
  const myString = useStringSwitcher(
    'Expand your business',
    'Expande tu negocio',
    6000,  // switch interval
    150    // typing speed
  );

  return (
    <section className="hero">
     <h1 className="hero-title typing">
        {myString}
    </h1>

      <p>
        Whether you need to expand into new markets or simply sharpen your message, I help businesses communicate with clarity and impact.<br />
        <br />
        From multilingual websites to polished copy, I create digital experiences that look professional, read naturally, and connect with the right audience.
      </p>

      <img
        src={`${import.meta.env.BASE_URL}relaxed-guy.png`}
        alt="flat-image"
        className="flat-image"
      />

          <div className='hero-buttons'>
              <button className='hero-button hero-button-know'
              onClick={() => {document.getElementById('about').scrollIntoView({ behavior: 'smooth' });}}>
                  Know more
              </button>
              <button className='hero-button hero-button-primary'
              onClick={() => {document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });}}>
              
                  Contact
              </button>
              
          </div>
    </section>
  );
};

export default hero;
