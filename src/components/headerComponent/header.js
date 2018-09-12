import React, { Component } from 'react';
import Headroom from 'react-headroom';
import {
    Link
} from 'react-router-dom';
import scrollToComponent from 'react-scroll-to-component';

import Home from '../sections/home';
import News from '../sections/news';
import About from '../sections/about';
import Performers from '../sections/performers';
import Media from '../sections/media';

class Header extends Component {
    state = {
        isTop: true
    };

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY <= 10;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
        });
    }

  render() {
    return (
        <div>
            <header className={this.state.isTop ? 'top' : 'not-top'}>

              <div className="logoWrapper">
                  <Link to=""> <img src="/images/logo.png" alt="Logo" className="logo"/> </Link>
              </div>

              <nav>
                  <ul>
                      <li className="first">
                        <a href="">HOME</a>
                      </li>
                      <li>
                        <a href="" onClick={() => scrollToComponent(this.About, { offset: 0, align: 'top', duration: 1500})}>ABOUT</a>
                      </li>
                      <li>
                        <a href="">PERFORMERS</a>
                      </li>
                      <li>
                        <a href="">MEDIA</a>
                      </li>
                      <li className="last">
                        <a href="">CONTACT</a>
                      </li>
                  </ul>
              </nav>

            </header>
            <Home />
            <News />
            <About />
            <Performers />
            <Media />
        </div>
    );
  }
}

export default Header;
