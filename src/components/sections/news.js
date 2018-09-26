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
                    will be at the beginning of Autumn Quarter. <span className="boldRed">No prior dance
                    experience is required</span>. We will have a workshop at the
                    start of each tryout session to learn the routine. We can’t wait
                    to see you there! <br /> <br />
                </p>
                <p className = "news_location">
                    <div className="location">
                        <span className="boldRed">Saturday Session</span><br />
                        <span className="bold">When</span>: 12-2pm on Saturday, September 29<br />
                        <span className="bold">Where</span>: <a href="https://goo.gl/maps/3RXLFwjN8sP2" target="_blank">Arrillaga Dining Multipurpose Room</a>
                    </div>
                    <p className="locationOr">
                    OR
                    </p>
                    <div className="location">
                        <span className="boldRed">Sunday Session</span><br />
                        <span className="bold">When</span>: 12:15-2:15pm on Sunday, September 30<br />
                        <span className="bold">Where</span>: <a href="https://goo.gl/maps/3RXLFwjN8sP2" target="_blank">Arrillaga Dining Multipurpose Room</a>
                    </div>
                </p>
            </div>
            <div>

            </div>

        </div>
    );
  }
}

export default News;
