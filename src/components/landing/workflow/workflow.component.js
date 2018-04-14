import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './workflow.scss';
import { ArrowDownIcon } from 'mdi-react';

@CSSModules(styles)
export default class Workflow extends Component {
  render() {
    return (
      <div styleName="workflow">
        <h1 styleName="section-title-light">Workflow</h1>
        <p styleName="step">
          1. You send us application request.
        </p>
        <ArrowDownIcon color="#fff" size={48} />
        <p styleName="step">
          2. We price it and add our suggestions - for free!
        </p>
        <ArrowDownIcon color="#fff" size={48} />
        <p styleName="step">
          3. After your positive decision we start work regularly presenting you progress.
        </p>
        <ArrowDownIcon color="#fff" size={48} />
        <p styleName="step">
          4. After your acceptance we deploy prepared application.
        </p>
      </div>
    );
  }
}