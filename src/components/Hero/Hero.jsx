import React from 'react';
import './Hero.css';
import HeroImageDesktop from '../../assets/desktop/image-hero@2x.jpg';
import HeroImageMobile from '../../assets/mobile/image-hero.jpg';
import { Button } from '../Button';

export default function Hero() {
  return (
    <>
      {/* desktop */}
      <div className="Hero__container desktop">
        <div className="Hero__background desktop"></div>
        <h1 className="heading Hero__title desktop">
          Modern
          <br />
          Art Gallery
        </h1>

        <img
          className="Hero__image desktop"
          src={HeroImageDesktop}
          alt="Hero"
        />

        <div className="Hero__filler desktop"></div>

        <div className="Hero__content desktop inner-column">
          <div className="Hero__text-container desktop">
            <p className="body-text Hero__paragraph desktop">
              The arts in the collection of the Modern Art Gallery all started
              from a spark of inspiration. Will these pieces inspire you? Visit
              us and find out.
            </p>
          </div>
          <div className="Hero__button-container desktop">
            <Button>Our Location</Button>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="Hero__container mobile">
        <img className="Hero__image mobile" src={HeroImageMobile} alt="Hero" />
        <div className="Hero__content mobile inner-column">
          <div className="Hero__text-container mobile">
            <h1 className="heading Hero__title mobile">
              Modern <br />
              Art Gallery
            </h1>

            <p className="body-text Hero__paragraph mobile">
              The arts in the collection of the Modern Art Gallery all started
              from a spark of inspiration. Will these pieces inspire you? Visit
              us and find out.
            </p>
          </div>

          <div className="Hero__button-container mobile">
            <Button>Our Location</Button>
          </div>
        </div>
      </div>
    </>
  );
}
