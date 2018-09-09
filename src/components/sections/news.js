import React, { Component } from 'react';

class News extends Component {
  render() {
    return (
        <div className="news">

            <div className="news_bullet">
                <h1 className="news_title">
                    Join us for Tryouts!
                </h1>
                <p className = "news_body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. <br /> <br />
                    When: September 27th & 28th <br />
                    Where: <a href="https://goo.gl/maps/RP21TRhZwMG2" target="_blank">Arrillaga Family Dining Commons</a>
                </p>
            </div>

        </div>
    );
  }
}

export default News;
