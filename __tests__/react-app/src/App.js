import React from 'react';
import welcome from './undraw_welcome_3gvl.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Welcome to {process.env.REACT_APP_NAME} ({process.env.REACT_APP_BUILD_ENV})</h1>
      <img src={welcome} alt="welcome" />
      </header>
    </div>
  );
}

export default App;
