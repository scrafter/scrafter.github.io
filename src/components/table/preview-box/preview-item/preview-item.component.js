import React, { Component } from 'react';
import styles from './preview-item.scss';
import propTypes from 'prop-types';


export default class PreviewItem extends Component {
  static propTypes = {
    formula: propTypes.object.isRequired
  };

  render() {

    return (
      <div className={styles.previewItem}>
        {this.props.formula.text}
      </div>
    );
  }
}