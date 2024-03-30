import React from 'react';
import './Footer.css';
import IconFacebook from '../../assets/icon-facebook.svg';
import IconInstagram from '../../assets/icon-instagram.svg';
import IconTwitter from '../../assets/icon-twitter.svg';

const socials = [
  {
    name: 'Facebook',
    icon: IconFacebook,
    link: 'https://www.facebook.com/DanielVocals',
  },
  {
    name: 'Instagram',
    icon: IconInstagram,
    link: 'https://www.instagram.com/danielmichaelmusic',
  },
  {
    name: 'Twitter',
    icon: IconTwitter,
    link: 'https://www.twitter.com',
  },
];

export default function Footer() {
  return (
    <footer className="Footer__container">
      <div className="Footer__content inner-column">
        <div>
          <h1 className="heading Footer__title">
            Modern
            <br />
            Art Gallery
          </h1>
        </div>

        <div className="Footer__paragraph__container">
          <p className="body-text Footer__paragraph">
            The Modern Art Gallery is free to all visitors and open seven days a
            week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
          </p>
        </div>

        <div className="Footer__links">
          {socials.map((social, key) => (
            <a
              href={social.link}
              key={key}
              rel="noreferrer noopener"
              target="_blank">
              <img src={social.icon} alt={social.name} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
