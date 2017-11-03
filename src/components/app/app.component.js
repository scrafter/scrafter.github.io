import React, { Component } from 'react';
import styles from './app.scss';
import Footer from '../footer/footer.component';
import { TableContainer } from '../table/table.container';

export default class App extends Component {
  render() {
    return (
      <div className={styles.appContainer}>
        <TableContainer/>
        <Footer/>
      </div>
    );
  }
}