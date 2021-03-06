import React, { Component } from 'react';
import YouTube from 'react-youtube';

class News extends Component {
    render() {
        return (
            <div className="news">
                <div className="news_bullet">
                    <h1 className="news_title">
                        Join us for 2019-2020 Tryouts! (UPDATED)
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
                            <a href="https://goo.gl/maps/M2RyR1qbWLSJocQU8" target="_blank"><span className="boldRed">Saturday Session</span></a><br />
                            {/*<span className="boldRed">Saturday Session</span><br />*/}
                            <span className="bold">When</span>: Saturday, September 28, 12:30-2:30 PM<br />
                            <span className="bold">Where</span>: <a href="https://goo.gl/maps/M2RyR1qbWLSJocQU8" target="_blank">AOERC Room 111</a>
                            {/*<span className="bold">Where</span>: Location TBD*/}
                        </div>
                        <p className="locationOr">
                        OR
                        </p>
                        <div className="location">
                            <a href="https://goo.gl/maps/M2RyR1qbWLSJocQU8" target="_blank"><span className="boldRed">Sunday Session</span></a><br />
                            {/*<span className="boldRed">Sunday Session</span><br />*/}
                            <span className="bold">When</span>: Sunday, September 29, 2:00-4:00 PM<br />
                            <span className="bold">Where</span>: <a href="https://goo.gl/maps/M2RyR1qbWLSJocQU8" target="_blank">AOERC Room 111</a>
                            {/*<span className="bold">Where</span>: Location TBD*/}
                        </div>
                    </p>
                </div>
                <div className="news_bullet">
                    <div className="video">
                        <YouTube
                            videoId="i5W-U_bsWX8"

                        />
                    </div>
                </div>
                <div>
                </div>
            </div>
        );
    }
}

export default News;
