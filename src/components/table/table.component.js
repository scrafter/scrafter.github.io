import React, { Component } from 'react';
import styles from './table.scss';
import ControlBar from './control-bar/control-bar.component';
import { ChatBoxContainer } from './chat-box/chat-box.container';
import { EditBoxContainer } from './edit-box/edit-box.container';
import { PreviewBoxContainer } from './preview-box/preview-box.container';

export default class Table extends Component {
  render() {
    const { preview, edit, chat } = this.props.views;

    return (
      <div className={styles.table}>
        <ControlBar/>
        <pre>{this.props.preview}</pre>

        <div className={styles.content}>
          {edit && <EditBoxContainer/>}
          {preview && <PreviewBoxContainer/>}
          {chat && <ChatBoxContainer/>}
        </div>
      </div>
    );
  }
}