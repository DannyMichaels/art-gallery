import React from 'react';
import './ImageAndText.css';

export default function ImageAndText({
  title = 'Hello, World!',
  paragraph = '',
  image = 'https://via.placeholder.com/150',
}) {
  return (
    <div className="ImageAndText__container">
      <div className="ImageAndText__text-container">
        <h4 className="heading ImageAndText__title">{title}</h4>
        {paragraph && (
          <p className="body-text ImageAndText__paragraph">{paragraph}</p>
        )}
      </div>
      <img className="ImageAndText__image" src={image} alt={title} />
    </div>
  );
}
