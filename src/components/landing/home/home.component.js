import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './home.scss';

@CSSModules(styles)
export default class Home extends Component {
  render() {
    return (
      <div styleName="home">
        <h1><strong>Chill</strong>Soft<span>.net</span></h1>
        <h2><span>Your</span> Web Developer</h2>
        <div styleName="background"></div>
      </div>
    );
  }
}