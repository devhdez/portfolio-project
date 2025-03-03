import React from 'react';

const Header = () => {
    return (
        <header className="App-header">
            <h1>Hdez.dev</h1>
            <nav>
                <ul  className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;