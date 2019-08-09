import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <nav role='navigation'>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink to='/goodthings'>Good Things</NavLink>
            <NavLink to='/mygoodthings'>My Good Things</NavLink>
            <NavLink to='/login'>Log In</NavLink>
            <NavLink to='/register'>Create Account</NavLink>
        </nav>
    );    
}

export default NavBar;