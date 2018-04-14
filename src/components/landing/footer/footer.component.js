import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './footer.scss';

@CSSModules(styles)
export default class Footer extends Component {
  currentYear = new Date().getFullYear();
  render() {
    return (
      <footer styleName="footer">
        <div styleName="location">
          <p>
            Main location: <br/>
            Wspólna 53 <br/>
            42-713 Kochcice <br/>
            POLAND
          </p>
          <p>
            Available also on: <br/>
            Prądzyńskiego 50/8 <br/>
            50-433 Wrocław <br/>
            POLAND
          </p>
          <p>
            Established in: 02.04.2018 <br/>
            NIP: 8992843377 <br/>
            REGON: 369902930
          </p>
        </div>
        <p styleName="bottom">
          ChillSoft Tomasz Mańka | {this.currentYear}
        </p>
      </footer>
    );
  }
}