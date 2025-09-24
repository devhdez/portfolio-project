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
        src="/assets/relaxed-guy.png"
        alt="flat-image"
        className="flat-image"
      />

          <div className='hero-buttons'>
              <button className='hero-button hero-button-primary'>
                  Contact
              </button>
              <button className='hero-button hero-button-contact'>
                  Know more
              </button>
          </div>
    </section>
  );
};

export default hero;
