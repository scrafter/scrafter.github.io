import React, { Component } from 'react';
import styles from './table.scss';
import EditBox from './edit-box/edit-box.component';
import PreviewBox from './preview-box/preview-box.component';
import ChatBox from './chat-box/chat-box.component';
import ControlBar from './control-bar/control-bar.component';

export default class Table extends Component {
  render() {
    return (
      <div className={styles.table}>
        <ControlBar/>

        <div className={styles.content}>
          <EditBox/>
          <PreviewBox/>
          <ChatBox/>
        </div>
      </div>
    );
  }
}