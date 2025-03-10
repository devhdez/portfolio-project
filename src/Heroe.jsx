import React from 'react';

const Heroe = () => {
    return (
        <section className="heroe">
            <div className="heroe-content">
                <h2 className="heroe-title">Let's expand your business:<br></br> Translate your website or create a brand new one.</h2>
                <img src="/assets/relaxed-guy.png" alt="flat-image" className='flat-image'/>
                <p className="heroe-subtitle">I can instantly make your business grow by exposing you to more clients and niche markets.<br />  

                </p>
            </div>
            <div className='heroe-buttons'>
            <button className='heroe-button heroe-button-contact'> Contact</button>
            <button className='heroe-button'>Know more</button>
            </div>
        </section>
    );
};

export default Heroe