import React, {useEffect} from 'react';
import useStringSwitcher from './Stringswitcher';


const Heroe = () => {
    const myString = useStringSwitcher('Expand your business', "Expande tu negocio", 6000);

    return (
        <section className="heroe">
                {/* <h1 className="heroe-title">Expand your business</h1> */}
                <h1 className="heroe-title">
                    {myString}
                <span className="blinking-cursor">|</span>
                </h1>
                <p>Let me transform your business into a multilingual empire so you don't miss a single customer! <br/>
                <br></br>
                I can instantly make your business grow by exposing you to more clients and niche markets, all while keeping your website looking professional and easy to navigate.</p>
                <img src="/assets/relaxed-guy.png" alt="flat-image" className='flat-image'/> 
            <div className='heroe-buttons'>
            <button className='heroe-button heroe-button-contact'> Contact</button>
            <button className='heroe-button'>Know more</button>
            </div>
        </section>
    );
};

export default Heroe