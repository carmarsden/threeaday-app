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

function App() {
  return (
    <div className="App">
        <NavBar />

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
            component={LoginForm} 
        />
        <Route
            path='/goodthings'
            component={PublicEntries} 
        />
        <Route
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

export default App;
