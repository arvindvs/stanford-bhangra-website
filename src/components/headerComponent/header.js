import React, { Component } from 'react';
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
                    HOME
                  </li>
                  <li>
                    ABOUT
                  </li>
                  <li>
                    PERFORMERS
                  </li>
                  <li>
                    PHOTOS
                  </li>
                  <li className="last">
                    CONTACT
                  </li>
              </ul>
          </nav>


        </header>
    );
  }
}

export default Header;
