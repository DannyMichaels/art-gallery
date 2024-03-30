import React from 'react';
import './Hero.css';
import HeroImage from '../../assets/desktop/image-hero@2x.jpg';

export default function Hero() {
  return (
    <div className="Hero__container">
      <div className="Hero__background"></div>
      <img className="Hero__image" src={HeroImage} alt="Hero" />
      <div className="Hero__content inner-column">
        <div className="Hero__text-container">
          <h1 className="heading Hero__title">
            Modern <br />
            Art Gallery
          </h1>

          <p className="body-text Hero__paragraph">
            We provide unmatched quality, comfort, and style for property owners
            across the country. Our experts combine form and function in
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.
          </p>
        </div>
      </div>
    </div>
  );
}
