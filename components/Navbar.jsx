import React from 'react';
import './Navbar.css';
import Link from 'next/link';

const Navbar = () => {
    return(
            <nav className="navbar bg-black-100">
                <div className="navbar-left">
                    <a href="/" className="logo">
                        GEDesigns
                    </a>
                </div>

                <div className="navbar-center">
                    <ul className="nav-links">
                        <li>
                            <Link href="/about">
                                About Me
                            </Link>
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