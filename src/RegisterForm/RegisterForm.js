import React from 'react';
import './RegisterForm.css';

class RegisterForm extends React.Component {

    handleSubmit = e => {
        e.preventDefault();
        window.alert('You submitted the form!');
        this.props.history.push('/login');
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
                <h3>Create Your Account</h3>
                    <form className='signup-form' onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="username">Username</label>
                            <input placeholder='username' type="text" name='username' id='username' required />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input placeholder='password' type="password" name='password' id='password' required />
                        </div>
                        <div>
                            <label htmlFor="passwordconfirm">Confirm Password</label>
                            <input placeholder='password' type="password" name='passwordconfirm' id='passwordconfirm' required />
                        </div>
                        <button type='button' onClick={this.handleCancel}>Cancel</button>
                        <button type='submit'>Sign Up</button>
                    </form>
                </section>
            </main>
        );
    }
}

export default RegisterForm;