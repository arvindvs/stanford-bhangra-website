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
                    Our team was founded in ____ and ever since, we've
                    worked hard to spread the love and joy of bhangra. <br /> <br />
                    Bhangra is a traditional dance form originating in Punjab,
                    India that today, with it's bass-infused beats and high-energy
                    movements, has spread worldwide. In North America, there
                    exists a competitive bhangra scene that draws the interests
                    of countless colleges around the country, in addition to
                    private dance academies and groups.
                </p>
            </div>

        </div>
    );
  }
}

export default About;
