import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

// components
import Header from './components/headerComponent/header'
//import Footer from './components/footerComponent/footer'
//import Home from './components/home'
//import About from './components/about'
//import Performers  from './components/performers'
//import Photos from './components/photos'
//import Contact from './components/contact'

// includes
import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
        <Router>
        <div className="App">

            <Header />

        </div>
        </Router>
    );
  }
}

export default App;
