import React, { Component } from 'react';
import styles from './chat-box.scss';

export default class ChatBox extends Component {
  onEnter = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const message = {
        text: event.target.value,
        date: new Date().getTime()
      };
      this.props.sendMessage(message);
      event.target.value = '';
    }
  };

  render() {
    return (
      <div className={styles.chatBox}>
        {this.props.messages.map((item, key) => <div key={key}>{item.text}</div>)}

        <input type="text" className={styles.chatInput}
               onKeyPress={this.onEnter}/>
      </div>
    );
  }
}