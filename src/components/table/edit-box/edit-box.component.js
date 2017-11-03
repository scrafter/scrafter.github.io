import React, { Component } from 'react';
import styles from './edit-box.scss';

export default class EditBox extends Component {

  onEnter = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      const item = {
        date: new Date().getTime(),
        text: event.target.value
      };
      this.props.addNewItem(item);
      event.target.value = '';
    }
  };

  render() {
    return (
      <div className={styles.editBox}>
        <textarea onKeyPress={this.onEnter}></textarea>
      </div>
    );
  }
}