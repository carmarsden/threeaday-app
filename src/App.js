import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar/NavBar';
import FooterBar from './FooterBar/FooterBar';
import AboutPage from './AboutPage/AboutPage';

function App() {
  return (
    <div className="App">
        <NavBar />

        <Route
            exact path='/'
            component={AboutPage} 
        />

        <FooterBar />
    </div>
  );
}

export default App;
