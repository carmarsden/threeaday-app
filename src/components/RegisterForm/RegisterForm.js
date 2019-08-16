import React from 'react';
import './RegisterForm.css';
import ApiAuthService from '../../services/api-auth-service';
import TokenService from '../../services/token-service';

class RegisterForm extends React.Component {
    state = {
        user_name: '',
        password: '',
        passwordConfirm: '',
        user_nameValid: false,
        passwordValid: false,
        passwordConfirmValid: false,
        formValid: false,
        validationMessages: {
            user_name: '',
            password: '',
            passwordConfirm: '',
        },
        error: null,
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({ error: null });
        const { user_name, password } = e.target;

        ApiAuthService.postUser({
            user_name: user_name.value,
            password: password.value,
        })
            .then(user => {
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

    updateFieldState(value, stateField) {
        this.setState({ [stateField]: value }, () => {this.validateInputs(value, stateField)})
    }

    validateInputs(value, stateField) {
        const newErrors = {...this.state.validationMessages};
        let hasError = false;
        const currentVal = value.trim();
        const VALID_PW_REGEX = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!_@#$%^&])[\S]+/;

        // validate for user_name
        if (stateField === 'user_name') {
            if (currentVal.length === 0) {
                newErrors.user_name = 'Username is required';
                hasError = true;
            } else {
                newErrors.user_name = '';
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
            formValid: this.state.user_nameValid && this.state.passwordValid && this.state.passwordConfirmValid
        })
    }

    render() {
        const error = this.state.error;
        
        return (
            <main role='main'>
                <header role='banner' className='bodyheader scrollsnap'>
                    <h1>3aDay</h1>
                </header>
                <section className='bodysection scrollsnap'>
                    <h3>Create Your Account</h3>
                    <div role='alert'>
                        <span className='formerror'>{error}</span>
                    </div>
                    <form className='signup-form' onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="user_name">Username</label>
                            <input 
                                placeholder='username'
                                type='text'
                                name='user_name'
                                id='user_name'
                                onChange={e => this.updateFieldState(e.target.value, 'user_name')}
                                required 
                            />
                            <span className='validationmessage'>{this.state.validationMessages.user_name}</span>
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