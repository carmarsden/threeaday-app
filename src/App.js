import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar/NavBar';
import FooterBar from './FooterBar/FooterBar';
import AboutPage from './AboutPage/AboutPage';
import RegisterForm from './RegisterForm/RegisterForm';
import LoginForm from './LoginForm/LoginForm';
import PublicEntries from './PublicEntriesPage/PublicEntries';
import PrivateEntriesPage from './PrivateEntriesPage/PrivateEntriesPage';
import NewEntriesPage from './NewEntriesPage/NewEntriesPage';
import PrivateRoute from './Utils/PrivateRoute';

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
            <div className="App">
                <NavBar updateLoginStatus={this.updateLoginStatus} />
        
                <Route
                    exact path='/'
                    component={AboutPage} 
                />
                <Route
                    path='/register'
                    component={RegisterForm} 
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
