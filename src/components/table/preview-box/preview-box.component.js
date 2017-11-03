import React, { Component } from 'react';
import styles from './preview-box.scss';
import PreviewItem from './preview-item/preview-item.component';


export default class PreviewBox extends Component {
  render() {
    return (
        <div className={styles.previewBox}>
          {this.props.items.map((item, key) => (
            <PreviewItem key={key} formula={item}/>
          ))}
        </div>
    );
  }
}