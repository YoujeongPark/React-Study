import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
    const navStyle = {
        color : 'white'
    };

    return (
    <nav>
        <h3>Shopping</h3>
        <ul className = "nav-links">
            <Link style = {navStyle} to = "/">
                 <li>Home</li>
            </Link>
            <Link style = {navStyle} to = "/example">
                 <li>Example</li>
            </Link>
            <Link style = {navStyle} to="/about">
                 <li>About</li>
            </Link>
            <Link style = {navStyle} to = "/shop">
                 <li>Shop</li>
            </Link>
            <Link style = {navStyle} to = "/wijmoTree">
                 <li>WijmoTree</li>
            </Link>
        </ul>
    </nav>
    );
}

export default Nav;
