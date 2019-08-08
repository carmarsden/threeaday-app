import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar/NavBar';
import FooterBar from './FooterBar/FooterBar';
import AboutPage from './AboutPage/AboutPage';
import PublicEntries from './PublicEntriesPage/PublicEntries';
import RegisterForm from './RegisterForm/RegisterForm';

function App() {
  return (
    <div className="App">
        <NavBar />

        <Route
            exact path='/'
            component={AboutPage} 
        />
        <Route
            path='/goodthings'
            component={PublicEntries} 
        />
        <Route
            path='/register'
            component={RegisterForm} 
        />

        <FooterBar />
    </div>
  );
}

export default App;
