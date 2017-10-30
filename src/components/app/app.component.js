import React, { Component } from 'react';
import styles from './app.scss';
import Table from '../table/table.component';
import Footer from '../footer/footer.component';

export default class App extends Component {
  render() {
    return (
      <div className={styles.appContainer}>
        <Table/>
        <Footer/>
      </div>
    );
  }
}