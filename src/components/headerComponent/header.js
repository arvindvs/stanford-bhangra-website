import React, { Component } from 'react';
import Headroom from 'react-headroom';
import {
    Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <header>

          <div className="logoWrapper">
              <Link to="/"> <img src="/images/logo.png" alt="Logo" className="logo"/> </Link>
          </div>

          <nav>
              <ul>
                  <li className="first">
                    <a href="">HOME</a>
                  </li>
                  <li>
                    <a href="">ABOUT</a>
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
    );
  }
}

export default Header;
