import React, { Component } from 'react';

class FixedNavbar extends React.Component {
  constructor(props){
    super(props);

    this.state = { isTop: true };
  }

  componentDidMount() {
    //scrollToComponent(this.homeRef, { offset: 0, align: 'top', duration: 1500});

    document.addEventListener('scroll', () => {
        const isTop = window.scrollY <= 10;
        if (isTop !== this.state.isTop) {
            this.setState({ isTop })
        }
    });
    }

  render() {
    return(
      <header className={this.state.isTop ? 'top' : 'not-top'}>

        <div className="logoWrapper">
            <img src="/images/logo.png"  alt="Logo" className="logo"/>
        </div>

        <nav>
            <ul>
                <li className="first">
                  <button onClick={() => this.props.updateSection('home')}>HOME</button>
                </li>
                <li>
                  <button onClick={() => this.props.updateSection('about')}>ABOUT</button>
                </li>
                <li>
                  <button onClick={() => this.props.updateSection('performers')}>PERFORMERS</button>
                </li>
                {/*<li>
                  <button onClick={() => scrollToComponent(this.mediaRef, { offset: -45, align: 'top', duration: 800})}>MEDIA</button>
                </li>
                <li className="last">
                  <button onClick={() => scrollToComponent(this.contactRef, { offset: -50, align: 'top', duration: 800})}>CONTACT</button>
                </li> */}
                <li className="last">
                  <a href="mailto:arvindvs@stanford.edu">CONTACT</a>
                </li>
            </ul>
        </nav>

     </header>
    );
  }
}

export default FixedNavbar;