import React, { Component } from 'react';
import styles from './footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        Created by Tomasz Mańka
      </footer>
    );
  }
}