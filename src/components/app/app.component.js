import React, { Component } from 'react';
import styles from './app.scss';
import Landing from '../landing/landing.component';

export default class App extends Component {
  render() {
    return (
      <div className={styles.appContainer}>
        <Landing/>
      </div>
    );
  }
}
