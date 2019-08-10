import React from 'react';
import './RegisterForm.css';

class RegisterForm extends React.Component {
    state = {
        username: '',
        password: '',
        passwordConfirm: '',
        usernameValid: false,
        passwordValid: false,
        passwordConfirmValid: false,
        formValid: false,
        validationMessages: {
            username: '',
            password: '',
            passwordConfirm: '',
        },
        error: null,
    }

    handleSubmit = e => {
        e.preventDefault();
        window.alert('You submitted the form!');
        this.props.history.push('/login');
    }

    handleCancel = e => {
        this.props.history.push('/');
    }

    updateFieldState(value, stateField) {
        this.setState({ [stateField]: value }, () => {this.validateInputs(value, stateField)})
    }

    validateInputs(value, stateField) {
        const newErrors = {...this.state.validationMessages};
        let hasError = false;
        const currentVal = value.trim();
        const VALID_PW_REGEX = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!_@#$%^&])[\S]+/;

        // validate for username
        if (stateField === 'username') {
            if (currentVal.length === 0) {
                newErrors.username = 'Username is required';
                hasError = true;
            } else {
                newErrors.username = '';
                hasError = false;
            }
        }

        // validate for password
        if (stateField === 'password') {
            if (currentVal.length < 8) {
                newErrors.password = 'Password must be at least 8 characters';
                hasError = true;
            } else if (currentVal.length > 72) {
                newErrors.password = 'Password must be no more than 72 characters';
                hasError = true;
            } else if (currentVal.startsWith(' ') || currentVal.endsWith(' ')) {
                newErrors.password = 'Password cannot start or end with empty spaces';
                hasError = true;
            } else if (!VALID_PW_REGEX.test(currentVal)) {
                newErrors.password = 'Password must contain at least one each of: upper case, lower case, number, and special character';
                hasError = true;
            } else {
                newErrors.password = '';
                hasError = false;
            }
        }

        // validate for passwordConfirm
        if (stateField === 'passwordConfirm') {
            if (currentVal !== this.state.password) {
                newErrors.passwordConfirm = 'Must match password';
                hasError = true;
            } else {
                newErrors.passwordConfirm = '';
                hasError = false;
            }
        }

        const validKey = stateField + 'Valid';
        
        this.setState({
            validationMessages: newErrors,
            [validKey]: !hasError,
        }, this.validateForm);
    }

    validateForm() {
        this.setState({
            formValid: this.state.usernameValid && this.state.passwordValid && this.state.passwordConfirmValid
        })
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
                            <input 
                                placeholder='username'
                                type='text'
                                name='username'
                                id='username'
                                onChange={e => this.updateFieldState(e.target.value, 'username')}
                                required 
                            />
                            <span className='validationmessage'>{this.state.validationMessages.username}</span>
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input 
                                placeholder='password'
                                type='password'
                                name='password'
                                id='password'
                                onChange={e => this.updateFieldState(e.target.value, 'password')}
                                required 
                            />
                            <span className='validationmessage'>{this.state.validationMessages.password}</span>
                        </div>
                        <div>
                            <label htmlFor="passwordconfirm">Confirm Password</label>
                            <input 
                                placeholder='confirm password'
                                type='password'
                                name='passwordconfirm'
                                id='passwordconfirm' 
                                onChange={e => this.updateFieldState(e.target.value, 'passwordConfirm')}
                                required 
                            />
                            <span className='validationmessage'>{this.state.validationMessages.passwordConfirm}</span>
                        </div>
                        <button type='button' onClick={this.handleCancel}>Cancel</button>
                        <button type='submit' disabled={!this.state.formValid}>Sign Up</button>
                    </form>
                </section>
            </main>
        );
    }
}

export default RegisterForm;