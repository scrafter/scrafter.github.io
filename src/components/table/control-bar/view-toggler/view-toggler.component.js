import React, { Component } from 'react';
import styles from './view-toggler.scss';
import CSSModules from 'react-css-modules';


class ViewToggler extends Component {
  render() {
    // const { edit, preview, chat } = this.props.views;

    return (
      <div styleName='view-toggler'>
        <button styleName='btn-toggler'
                onClick={this.props.changeView.bind(this, 'edit')}>Edit
        </button>
        <button styleName='btn-toggler'
                onClick={this.props.changeView.bind(this, 'preview')}>Preview
        </button>
        <button styleName='btn-toggler'
                onClick={this.props.changeView.bind(this, 'chat')}>Chat
        </button>
      </div>
    );
  }
}
export default CSSModules(ViewToggler, styles);