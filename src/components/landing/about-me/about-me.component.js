import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './about-me.scss';
import { LinkedinIcon, PaperclipIcon } from 'mdi-react';
import angular1 from '../../../public/img/skills/angular1.svg';
import angular2 from '../../../public/img/skills/angular4.png';
import react from '../../../public/img/skills/react.png';
import redux from '../../../public/img/skills/redux.png';
import nodejs from '../../../public/img/skills/nodejs.png';
import rwd from '../../../public/img/skills/rwd.png';
import git from '../../../public/img/skills/git.png';
import photoshop from '../../../public/img/skills/photoshop.png';
import CV from '../../../public/CV.pdf';


@CSSModules(styles)
export default class AboutMe extends Component {
  render() {
    return (
      <div styleName="about-me">
        <h1 styleName="section-title-dark">About me</h1>
        <div styleName="avatar"></div>
        <h1>inż. Tomasz Mańka</h1>
        <h3>Frontend Web Developer</h3>

        <div styleName="experience-wrapper">
          <div styleName="experience">
            <p styleName="date">2014 - 2018</p>
            <p>
              Engineer's degree from "Control Electronics and Information Engineering"
              at Silesian University of Technology
            </p>
          </div>
          <div styleName="experience">
            <p styleName="date">From 2016</p>
            <p>
              Working for <a href="https://tsh.io/">The Software House</a> as Frontend Web Developer
            </p>
          </div>
        </div>

        <div styleName="skills">
          <h2>My skills</h2>
          <div styleName="item">
            <img src={angular1} alt="Angular1"/>
            <p>Angular 1</p>
          </div>
          <div styleName="item">
            <img src={angular2} alt="Angular2+"/>
            <p>Angular 2+</p>
          </div>
          <div styleName="item">
            <img src={react} alt="React"/>
            <p>React</p>
          </div>
          <div styleName="item">
            <img src={redux} alt="Angular1"/>
            <p>Redux</p>
          </div>
          <div styleName="item">
            <img src={nodejs} alt="Angular1"/>
            <p>Node.js</p>
          </div>
          <div styleName="item">
            <img src={rwd} alt="RWD"/>
          </div>
          <div styleName="item">
            <img src={git} alt="Git"/>
            <p>Git</p>
          </div>
          <div styleName="item">
            <img src={photoshop} styleName="photoshop" alt="Photoshop"/>
            <p>Photoshop</p>
          </div>
        </div>

        <div styleName="download">
          <div>
            <a href="https://www.linkedin.com/in/tomasz-ma%C5%84ka-61946412a/" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon color="#3e3e3e" size={48}/>
              <p>LinkedIn<br/>Profile</p>
            </a>
          </div>
          <div>
            <a href={CV} download>
              <PaperclipIcon color="#3e3e3e" size={48}/>
              <p>CV<br/>Download</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}