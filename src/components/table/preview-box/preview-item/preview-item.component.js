import React,{Component} from 'react';
import styles from './preview-item.scss';

export default class PreviewItem extends Component {
  render() {
    return (
      <div className={styles.previewItem}>
        Preview item
      </div>
    )
  }
}