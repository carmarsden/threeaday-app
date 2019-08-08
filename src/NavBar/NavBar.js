import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/goodthings'>Good Things</Link>
            <Link to='/login'>Log In</Link>
            <Link to='/register'>Create Account</Link>
        </nav>
    );    
}

export default NavBar;