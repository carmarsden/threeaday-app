import React from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css';
import ApiAuthService from '../../services/api-auth-service';
import TokenService from '../../services/token-service';

class LoginForm extends React.Component {

    state = { 
        error: null,
        test: 'string',
    };

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ error: null });
        const { user_name, password } = e.target;

        ApiAuthService.postLogin({
            user_name: user_name.value,
            password: password.value,
        })
            .then(res => {
                user_name.value = '';
                password.value = '';
                TokenService.saveAuthToken(res.authToken);
                this.props.history.push('/mygoodthings');
                this.props.updateLoginStatus(true);
            })
            .catch(res => {
                if (res.error) {
                    this.setState({ error: res.error })
                } else {
                    this.setState({ error: 'Something went wrong! Please try again later.' })
                }
            })        
    }

    handleCancel = e => {
        this.props.history.push('/');
    }

    render() {
        const error = this.state.error;

        return (
            <main role='main'>
                <header role='banner' className='aboutheader'>
                    <h1>3aDay</h1>
                </header>
                <section className='aboutsection'>
                    <h3>Log In</h3>
                    <div role='alert'>
                        <span className='formerror'>{error}</span>
                    </div>
                    <form className='login-form' onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="user_name">Username</label>
                            <input placeholder='username' type="text" name='user_name' id='user_name' required />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input placeholder='password' type="password" name='password' id='password' required />
                        </div>
                        <button type='button' onClick={this.handleCancel}>Cancel</button>
                        <button type='submit'>Log In</button>
                    </form>
                    <div>New User? <Link to='/register'>Create Account</Link></div>
                </section>
            </main>
        );
    }
}

export default LoginForm;