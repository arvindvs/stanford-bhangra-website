import React, { Component } from 'react';
import myJson from '../../members.json';

class Performers extends Component {
    constructor() {
        super();
        this.state = {
            member: []
        }
    }

    componentDidMount() {
        let member = myJson.member.map((member, key) => {
            return (
                <div className="dancer-container">
                    <img src={member.photo} alt={member.alt} className="photo" />
                    <h1 className="dancer-name">
                        {member.name}
                    </h1>
                    <p className="dancer-position">
                        {member.position}
                    </p>
                    <p className="dancer-year">
                        Class of {member.year}
                    </p>
                </div>
            )
        })
        this.setState({member: member});
    }

  render() {
    return (
        <div className="performers">

            <div className="title-wrapper">
                <h1 className="performers-title">
                    Performers
                </h1>
            </div>

            <div className="performers-container">
                {this.state.member}
            </div>

        </div>
    );
  }
}

export default Performers;
