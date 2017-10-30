import React, { Component } from 'react';
import styles from './preview-box.scss';
import PreviewItem from './preview-item/preview-item.component';

export default class PreviewBox extends Component {
  items = new Array(5).join('0').split('');

  render() {
    return (
      <div className={styles.previewBox}>
        {this.items.map((item, key) => (
          <PreviewItem key={key} />
        ))}
      </div>
    );
  }
}