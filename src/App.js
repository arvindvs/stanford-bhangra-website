import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

// includes
import './Assets/css/default.min.css';

import LandingPage from './components/pages/LandingPage'

function App (){
  return (
      <Router>
        <div className="App">
          <LandingPage />
        </div>
      </Router>
  );
}

export default App;
