import React from 'react';
import './BlackBox.css';

export default function BlackBox({
  title = 'BlackBox',
  paragraph = 'Hello, World!',
  width = '100%',
  height = '100%',
}) {
  return (
    <div
      className="BlackBox__container"
      style={{
        width,
        height,
      }}>
      <h4 className="heading BlackBox__title">{title}</h4>
      <p className="body-text BlackBox__paragraph">{paragraph}</p>
    </div>
  );
}
