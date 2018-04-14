import React, { Component } from 'react';
import styles from './header.scss';
import CSSModules from 'react-css-modules';

@CSSModules(styles)
export default class Header extends Component {

  constructor(props) {
    super(props);
    this.handlerScroll = this.handlerScroll.bind(this);
    this.state = { brand: false };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handlerScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handlerScroll() {
    this.setState({ brand: window.scrollY > 350  && window.innerWidth >= 768 });
  }

  render() {
    return (
      <header styleName="header">
        {
          this.state.brand && <a href="#home" styleName="brand">
            <strong>Chill</strong>Soft<span>.net</span>
          </a>
        }
        <ul styleName="main-nav">
          <li><a href="#home">Home</a></li>
          <li><a href="#about-me">About me</a></li>
          <li><a href="#workflow">Workflow</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </header>
    );
  }
}