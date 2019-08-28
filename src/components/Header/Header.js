import React from 'react';
import './Header.css';
import vitamin_bottle_logo from '../../images/vitamin_bottle_logo.png';

function Header(props) {
    return (
        <header role='banner' className='bodyheader'>
            <img src={vitamin_bottle_logo} alt='3aDay Logo' className='header-logo' />
            <h1 className='header-subheader'>{props.children}</h1>
        </header>
    );    
}

export default Header;