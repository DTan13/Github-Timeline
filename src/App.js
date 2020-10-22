import React from 'react';
import logo from './logo.svg';
import SocialMedia from './components/socialMedia';

import './App.css';
import './styles/social.scss'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Coming Soon!
        </h2>
        <SocialMedia />
      </header>
    </div>
  );
}

export default App;
