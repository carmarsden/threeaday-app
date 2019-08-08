import React from 'react';
import './LoginForm.css';

class LoginForm extends React.Component {

    handleSubmit = e => {
        e.preventDefault();
        window.alert('You logged in!');
        this.props.history.push('/mygoodthings');
    }

    handleCancel = e => {
        this.props.history.push('/');
    }

    render() {
        return (
            <main role='main'>
                <header role='banner' className='aboutheader'>
                    <h1>3aDay</h1>
                </header>
                <section className='aboutsection'>
                <h3>Log In</h3>
                    <form className='login-form' onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="username">Username</label>
                            <input placeholder='username' type="text" name='username' id='username' required />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input placeholder='password' type="password" name='password' id='password' required />
                        </div>
                        <button type='button' onClick={this.handleCancel}>Cancel</button>
                        <button type='submit'>Log In</button>
                    </form>
                </section>
            </main>
        );
    }
}

export default LoginForm;