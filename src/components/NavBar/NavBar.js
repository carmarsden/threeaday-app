import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import TokenService from '../../services/token-service';

class NavBar extends React.Component {
    handleLogOut = e => {
        TokenService.clearAuthToken();
        this.props.updateLoginStatus(false);
    }

    renderAuthLinks = e => {
        if (TokenService.hasAuthToken()) {
            return (
                <>
                    <NavLink to='/mygoodthings'>My Good Things</NavLink>
                    <NavLink to='/logout' onClick={this.handleLogOut}>Log Out</NavLink>
                </>
            )
        } else {
            return (
                <>
                    <NavLink to='/login'>Log In</NavLink>
                    <NavLink to='/register'>Create Account</NavLink>    
                </>
            )
        }
    }

    render() {
        const authLinks = this.renderAuthLinks();

        return (
            <nav role='navigation' className='scrollsnap'>
                <NavLink exact to='/'>Home</NavLink>
                <NavLink to='/goodthings'>Good Things</NavLink>
                {authLinks}
            </nav>
        );  
    }
}

export default NavBar;