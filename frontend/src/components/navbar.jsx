import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';


function Navbar() {
    return (
        <nav className="navbar">
            <div className='movie-browser'>
                <Link to="/">Home</Link>
            </div>
            <div className='navbar-links'>
                <Link to="/">Home</Link>
                <Link to="/favorites">Favorites</Link>
            </div>
        </nav>
    );
}

export default Navbar;
