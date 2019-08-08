import React from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import FooterBar from './FooterBar/FooterBar';

function App() {
  return (
    <div className="App">
        <NavBar />
        <header className="App-header">
            <p>
                This will be my 3aDay app.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
        <FooterBar />
    </div>
  );
}

export default App;
