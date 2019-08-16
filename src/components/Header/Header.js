import React from 'react';
import './Header.css';

function Header(props) {
    return (
        <header role='banner' className='bodyheader scrollsnap'>
            <h1>3aDay</h1>
            <h2>{props.children}</h2>
        </header>
    );    
}

export default Header;