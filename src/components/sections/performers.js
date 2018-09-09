import React, { Component } from 'react';

class Performers extends Component {
  render() {
    return (
        <div className="performers">

            <div className="title-wrapper">
                <h1 className="performers-title">
                    Performers
                </h1>
            </div>

            <div className="performers-container">

                <div className="dancer-container">
                    <img src="/images/members/amit_kohli.PNG" alt="amit_kohli" className="photo" />
                    <h1 className="dancer-name">
                        Amit Kohli
                    </h1>
                    <p className="dancer-position">
                        Captain
                    </p>
                    <p className="dancer-year">
                        Class of 2020
                    </p>
                </div>

                <div className="dancer-container">
                    <img src="/images/members/arvind_subramanian.png" alt="arvind_subramanian" className="photo" />
                    <h1 className="dancer-name">
                        Arvind Subramanian
                    </h1>
                    <p className="dancer-position">
                        Dancer
                    </p>
                    <p className="dancer-year">
                        Class of 2021
                    </p>
                </div>

                <div className="dancer-container">
                    <img src="/images/members/arjun_dhawan.png" alt="arjun_dhawan" className="photo" />
                    <h1 className="dancer-name">
                        Arjun Dhawan
                    </h1>
                    <p className="dancer-position">
                        Dancer
                    </p>
                    <p className="dancer-year">
                        Class of 2021
                    </p>
                </div>

                <div className="dancer-container">
                    <img src="/images/members/surabhi_mundada.png" alt="surabhi_mundada" className="photo" />
                    <h1 className="dancer-name">
                        Surabhi Mundada
                    </h1>
                    <p className="dancer-position">
                        Dancer
                    </p>
                    <p className="dancer-year">
                        Class of 2021
                    </p>
                </div>

                <div className="dancer-container">
                    <img src="/images/members/aditya_iswara.png" alt="aditya_iswara" className="photo" />
                    <h1 className="dancer-name">
                        Aditya Iswara
                    </h1>
                    <p className="dancer-position">
                        Dancer
                    </p>
                    <p className="dancer-year">
                        Class of 2021
                    </p>
                </div>

                <div className="dancer-container">
                    <img src="/images/members/nivedha_soundappan.png" alt="nivedha_soundappan" className="photo" />
                    <h1 className="dancer-name">
                        Nivedha Soundappan
                    </h1>
                    <p className="dancer-position">
                        Dancer
                    </p>
                    <p className="dancer-year">
                        Class of 2021
                    </p>
                </div>

            </div>

        </div>
    );
  }
}

export default Performers;
