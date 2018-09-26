import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import scrollToComponent from 'react-scroll-to-component';

// components
//import Header from './components/headerComponent/header';
//import Footer from './components/footerComponent/footer';
import Home from './components/sections/home';
import News from './components/sections/news';
import About from './components/sections/about';
import Performers  from './components/sections/performers';
//import Media from './components/sections/media';
import Contact from './components/sections/contact';

// includes
import './Assets/css/default.min.css';

class App extends Component {
    state = {
        isTop: true
    };

    componentDidMount() {
        //scrollToComponent(this.homeRef, { offset: 0, align: 'top', duration: 1500});

        document.addEventListener('scroll', () => {
            const isTop = window.scrollY <= 10;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
        });
    }

  render() {
    return (
        <Router>
        <div className="App">

            <header className={this.state.isTop ? 'top' : 'not-top'}>

              <div className="logoWrapper">
                  <img src="/images/logo.png" onClick={() => scrollToComponent(this.homeRef, { offset: 0, align: 'top', duration: 800})} alt="Logo" className="logo"/>
              </div>

              <nav>
                  <ul>
                      <li className="first">
                        <button onClick={() => scrollToComponent(this.homeRef, { offset: 0, align: 'top', duration: 800})}>HOME</button>
                      </li>
                      <li>
                        <button onClick={() => scrollToComponent(this.aboutRef, { offset: -50, align: 'top', duration: 800})}>ABOUT</button>
                      </li>
                      <li>
                        <button onClick={() => scrollToComponent(this.performersRef, { offset: 0, align: 'top', duration: 800})}>PERFORMERS</button>
                      </li>
                      {/*<li>
                        <button onClick={() => scrollToComponent(this.mediaRef, { offset: -45, align: 'top', duration: 800})}>MEDIA</button>
                      </li>
                      <li className="last">
                        <button onClick={() => scrollToComponent(this.contactRef, { offset: -50, align: 'top', duration: 800})}>CONTACT</button>
                      </li> */}
                      <li className="last">
                        <a href="mailto:stanfordbhangra11@gmail.com">CONTACT</a>
                      </li>
                  </ul>
              </nav>

            </header>

            <Home ref={(Home) => {this.homeRef = Home;}} />
            <News ref={(News) => {this.newsRef = News}}/>
            <About ref={(About) => {this.aboutRef = About;}} />
            <Performers ref={(Performers) => {this.performersRef = Performers;}} />
            {/*<Media ref={(Media) => {this.mediaRef = Media;}} />
            <Contact ref={(Contact) => {this.contactRef = Contact;}} /> */}

            <footer>

                <div className="icons">
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/stanfordbhangra/" target="_blank" className="facebook">Facebook</a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/stanfordbhangra/" target="_blank" className="instagram">Instagram</a>
                        </li>
                        <li className="last">
                            <a href="https://www.youtube.com/results?search_query=stanford+bhangra" target="_blank" className="youtube">YouTube</a>
                        </li>
                    </ul>
                </div>
                <p> Copyright © 2018 Stanford Bhangra </p>

            </footer>

        </div>
        </Router>
    );
  }
}

export default App;
