import React, {useEffect} from 'react';

const Heroe = () => {
    useEffect(() => {
        const header = document.querySelector('.heroe-title');
        const cursor = document.createElement('span');
        cursor.className = 'blinking-cursor';
        cursor.innerText = '|';
        header.appendChild(cursor);
      }, []);
    return (
        <section className="heroe">
                <h1 className="heroe-title">Expand your business</h1>
                <p>Let me convert your website into a multilingual one so you don't miss a single customer! <br/>
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