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
                    Come join our dance family! Tryouts for Stanford Bhangra
                    will be on September 27th and 28th. <span className="bold">No prior dance
                    experience is required</span>. We will have a workshop at the
                    beginning of tryouts to learn the routine. We can’t wait
                    to see you there! <br /> <br />
                    When: September 27th & 28th <br />
                    Where: <a href="https://goo.gl/maps/RP21TRhZwMG2" target="_blank">Arrillaga Family Dining Commons</a>
                </p>
            </div>

        </div>
    );
  }
}

export default News;
