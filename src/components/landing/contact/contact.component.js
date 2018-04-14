import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './contact.scss';
import { PhoneIcon, EmailOutlineIcon } from 'mdi-react';
import * as $ from 'jquery';

const ELASTIC_EMAIL_API = 'ad01eeb8-022e-4cc0-9239-c7b991557381';
const ELASTIC_EMAIL_URL = 'https://api.elasticemail.com/v2/';

@CSSModules(styles)
export default class Contact extends Component {
  constructor() {
    super();
  }

  onSubmit() {
    const email = this.refs.email.value;
    const name = this.refs.name.value;
    const phoneNumber = this.refs.phoneNumber.value;
    const message = this.refs.message.value;
    const content = `Od: ${email}, ${name}, numer telefonu: ${phoneNumber}, tekst: ${message}`;

    const emailData = $.param({
      apikey: ELASTIC_EMAIL_API,
      sender: email,
      senderName: name,
      from: email,
      subject: 'Wiadomość ze strony ChillSoft.net',
      to: 'mankatomek@gmail.com',
      bodyText: content,
    });

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      try {
        const response = JSON.parse(xhr.responseText);
        if (xhr.readyState === 4 && xhr.status === 200 && response.success) {
          alert('Wysłano!');
        } else if (xhr.readyState === 4 && xhr.status === 200 && !response.success) {
          alert('Wystąpił błąd - spróbuj ponownie.');
        }
      }catch(e) {}
    };
    xhr.open('POST', `${ELASTIC_EMAIL_URL}email/send?${emailData}`, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();

    this.refs.form.reset();
  }

  render() {
    return (
      <div styleName="contact">
        <form action="#contact" ref="form" onSubmit={this.onSubmit.bind(this)}>
          <div styleName="form-group">
            <label htmlFor="email">E-mail</label>
            <input type="email" className="form-control" id="email" ref="email" required/>
          </div>
          <div styleName="form-group">
            <label htmlFor="phoneNumber">Phone number</label>
            <input type="text" className="form-control" id="phoneNumber" ref="phoneNumber" required/>
          </div>
          <div styleName="form-group">
            <label htmlFor="name">Your name</label>
            <input type="text" className="form-control" id="name" ref="name" required/>
          </div>
          <div styleName="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" ref="message" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
        <div styleName="location">
          <p><PhoneIcon color="#fff"/> 606 274 154</p>
          <p><EmailOutlineIcon color="#fff"/> tomek@chillsoft.net</p>
          <a href="https://www.google.com/maps/place/Pr%C4%85dzy%C5%84skiego+50,+50-434+Wroc%C5%82aw/@51.0975238,17.046618,17z/data=!3m1!4b1!4m5!3m4!1s0x470fc262c0f5b20d:0xfe48230540fbed5c!8m2!3d51.0975238!4d17.0488067" target="_blank">
            <img src="https://maps.googleapis.com/maps/api/staticmap?center=Wrocław+Prądzyńskiego+50&zoom=14&scale=1&size=400x300&maptype=roadmap&format=jpg&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:%7CWrocław+Prądzyńskiego+50" alt="Google Map of Wrocław Prądzyńskiego 50"/>
          </a>
        </div>
      </div>
    );
  }
}