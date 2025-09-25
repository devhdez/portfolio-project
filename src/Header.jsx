import React from 'react';
import './index.css'; 

const Header = () => {
    return (
        <header className="App-header">
            <img src="/portfolio-project/assets/HDEZ-cropped.svg" alt="Logo" className="logo" />
            <div className="nav-container">
                <nav className="nav">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <button className="change-lng-button">Change Language!</button>
        </header>
    );
};

export default Header;