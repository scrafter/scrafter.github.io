import React, { Component } from 'react';
import styles from './control-bar.scss';
import { ViewTogglerContainer } from './view-toggler/view-toggler.container';

export default class ControlBar extends Component {
  render() {
    return (
      <div className={styles.controlBar}>
        <ViewTogglerContainer/>
      </div>
    );
  }
}