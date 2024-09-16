import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/" className="logo">
                    GEDesigns
                </a>
            </div>

            <div className="navbar-center">
                <ul className="nav-links">
                    <li>
                        <a href="/about">
                            About Me
                        </a>
                    </li>
                    <li>
                        <a href="/projects">
                            Projects
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;