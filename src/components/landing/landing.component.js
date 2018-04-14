import React, { Component } from 'react';
import Header from '../shared/header/header.component';
import AboutMe from './about-me/about-me.component';
import Workflow from './workflow/workflow.component';
import Footer from './footer/footer.component';
import Contact from './contact/contact.component';
import styles from './landing.scss';
import CSSModules from 'react-css-modules';
import ScrollableAnchor from 'react-scrollable-anchor';
import Home from './home/home.component';
import { configureAnchors } from 'react-scrollable-anchor';

configureAnchors({ offset: -80 });

@CSSModules(styles)
export default class Landing extends Component {
  render() {
    return (
      <div styleName="landing">
        <Header/>
        <main>
          <ScrollableAnchor id={'home'}>
            <Home/>
          </ScrollableAnchor>
          <ScrollableAnchor id={'about-me'}>
            <AboutMe/>
          </ScrollableAnchor>
          {/*<Portfolio/>*/}
          <ScrollableAnchor id={'workflow'}>
            <Workflow/>
          </ScrollableAnchor>
          <ScrollableAnchor id={'contact'}>
            <Contact/>
          </ScrollableAnchor>
          <Footer/>
        </main>
      </div>
    );
  }
}