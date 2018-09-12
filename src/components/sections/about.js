import React, { Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        this.About = React.createRef();
    }

  render() {
    return (
        <div className="about" ref={this.About}>

            <div className="about-container">
                <h1 className="about-left">
                    INTOXICATED<br/>WITH<br/>JOY
                </h1>
            </div>

            <div className="about-container">
                <p className="about-right">
                    Our team was founded in 1996 and ever since, we've
                    worked hard to spread the <span className="highlight">love and joy of bhangra </span>. <br /> <br />
                    Bhangra is a traditional dance form originating in Punjab,
                    India that today, with it's <span className="highlight">bass-infused beats and high-energy
                    movements</span>, has spread worldwide. In North America, there
                    exists a competitive bhangra scene that draws the interest
                    of countless colleges around the country, in addition to
                    private dance academies and groups.
                </p>
            </div>

        </div>
    );
  }
}

export default About;
