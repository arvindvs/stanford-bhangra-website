import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';

// includes
import '../../Assets/css/default.min.css';

// components
//import Header from './components/headerComponent/header';
//import Footer from './components/footerComponent/footer';
import Home from '../../components/sections/home';
import News from '../../components/sections/news';
import About from '../../components/sections/about';
import Performers  from '../../components/sections/performers';
//import Media from '../../components/sections/media';
import Contact from '../../components/sections/contact';
import FixedNavbar from '../../components/common/FixedNavbar';
import Footer from '../../components/common/Footer';


class LandingPage extends React.Component {

  constructor(){
    super();

    this.state = { section: 'home' };

    this.updateSection = this.updateSection.bind(this);
  }

  updateSection(newSection){
    console.log(newSection);
    this.setState({ section: newSection });
  }

  componentDidUpdate() {
    //Scroll functionality goes here
    scrollToComponent(this[this.state.section],  { offset: 0, align: 'top', duration: 800});
  }

  render() {
    return(
      <div>
        <FixedNavbar  updateSection={this.updateSection}/>

        <Home ref={(Home) => {this.home = Home }}/>
        <News ref={(News) => {this.news = News }}/>
        <About ref={(About) => {this.about = About }} />
        <Performers ref={(Performers) => {this.performers = Performers }} />
        {/*<Media ref={(Media) => {this.mediaRef = Media;}} />
        <Contact ref={(Contact) => {this.contactRef = Contact;}} /> */}

        <Footer />
      </div>
    );
  }
}

export default LandingPage;