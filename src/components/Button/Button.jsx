import React from 'react';
import './Button.css';
import ArrowRightIcon from '../../assets/icon-arrow-right.svg';

export default function Button({
  children,
  onClick = (e) => console.log('Clicked!', e.target),
  ...rest
}) {
  return (
    <div className="Button__container" onClick={onClick} {...rest}>
      <div className="Button__children">{children}</div>

      <div className="Button__arrow">
        <img src={ArrowRightIcon} alt="Arrow Right Icon" />
      </div>
    </div>
  );
}
