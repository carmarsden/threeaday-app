import React from 'react';
import './Header.css';
import vitamin_bottle_logo from '../../images/vitamin_bottle_logo.png';

function Header(props) {
    return (
        <header role='banner' className='bodyheader scrollsnap'>
            <img src={vitamin_bottle_logo} alt='Vitamin Bottle Logo' className='header-logo' />
            <h2 className='header-subheader'>{props.children}</h2>
        </header>
    );    
}

export default Header;