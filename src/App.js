import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import FooterBar from './components/FooterBar/FooterBar';
import AboutPage from './components/AboutPage/AboutPage';
import RegisterForm from './components/RegisterForm/RegisterForm';
import LoginForm from './components/LoginForm/LoginForm';
import PublicEntries from './components/PublicEntriesPage/PublicEntries';
import PrivateEntriesPage from './components/PrivateEntriesPage/PrivateEntriesPage';
import NewEntriesPage from './components/NewEntriesPage/NewEntriesPage';
import PrivateRoute from './components/Utils/PrivateRoute';

class App extends React.Component {
    state = {
        loggedIn: false
    }

    updateLoginStatus = (status) => {
        this.setState({
            loggedIn: status
        })
    }

    render() {
        return (
            <div className="app">
                <NavBar updateLoginStatus={this.updateLoginStatus} />
        
                <Route
                    exact path='/'
                    component={AboutPage} 
                />
                <Route
                    path='/register'
                    render={(props) => <RegisterForm {...props} updateLoginStatus={this.updateLoginStatus} />}
                />
                <Route
                    path='/login'
                    render={(props) => <LoginForm {...props} updateLoginStatus={this.updateLoginStatus} />} 
                />
                <Route
                    path='/goodthings'
                    component={PublicEntries} 
                />
                <PrivateRoute
                    path='/mygoodthings'
                    component={PrivateEntriesPage} 
                />
                <Route
                    path='/addentries'
                    component={NewEntriesPage} 
                />
        
                <FooterBar />
            </div>
        );
    }
}

export default App;
