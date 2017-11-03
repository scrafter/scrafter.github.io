import React, { Component } from 'react';
import styles from './view-toggler.scss';

export default class ViewToggler extends Component {
  render() {
    const { edit, preview, chat } = this.props.views;

    return (
      <div className={styles.viewToggler}>
        <button className={`${styles.btnToggler} ${!edit && styles.inactive}`}
                onClick={this.props.changeView.bind(this, 'edit')}>Edit
        </button>
        <button className={`${styles.btnToggler} ${!preview && styles.inactive}`}
                onClick={this.props.changeView.bind(this, 'preview')}>Preview
        </button>
        <button className={`${styles.btnToggler} ${!chat && styles.inactive}`}
                onClick={this.props.changeView.bind(this, 'chat')}>Chat
        </button>
      </div>
    );
  }
}