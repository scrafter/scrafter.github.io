import React, { Component } from 'react';
import styles from './chat-box.scss';

export default class ChatBox extends Component {
  render() {
    return (
      <div className={styles.chatBox}>
        Chat box
      </div>
    );
  }
}