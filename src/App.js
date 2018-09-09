import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

// components
import Header from './components/headerComponent/header';
//import Footer from './components/footerComponent/footer';
import Home from './components/sections/home';
import News from './components/sections/news';
import About from './components/sections/about';
import Performers  from './components/sections/performers';
//import Media from './components/sections/media';
//import Contact from './components/sections/contact';

// includes
import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
        <Router>
        <div className="App">

            <Header />
            <Home />
            <News />
            <About />
            <Performers />

        </div>
        </Router>
    );
  }
}

export default App;
