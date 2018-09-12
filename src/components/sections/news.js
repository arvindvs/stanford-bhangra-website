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
                    will be at the beginning of Autumn Quarter. <span className="bold">No prior dance
                    experience is required</span>. We will have a workshop at the
                    start of each tryout session to learn the routine. We can’t wait
                    to see you there! <br /> <br />
                    <span className="bold">Check back soon for the date and location of each tryout session</span> <br /> <br />
                    {/*When: TBD <br />
                    Where: <a href="https://goo.gl/maps/RP21TRhZwMG2" target="_blank">Arrillaga Family Dining Commons</a>*/}
                </p>
            </div>

        </div>
    );
  }
}

export default News;
