import React, { Component } from 'react';
import Header from '../shared/header/header.component';
import AboutMe from './about-me/about-me.component';
import Portfolio from './portfolio/portfolio.component';
import Workflow from './workflow/workflow.component';
import Footer from './footer/footer.component';
import Contact from './contact/contact.component';

export default class Landing extends Component {
  render() {
    return (
      <main>
        <Header/>
        <AboutMe/>
        {/*<Portfolio/>*/}
        <Workflow/>
        <Contact/>
        <Footer/>
      </main>
    );
  }
}