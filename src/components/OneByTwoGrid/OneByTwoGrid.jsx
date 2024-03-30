import React from 'react';
import './OneByTwoGrid.css';

export default function OneByTwoGrid({ elements = [] }) {
  return (
    <div className="OneByTwoGrid__container">
      <div className="OneByTwoGrid__element element-1">{elements[0]}</div>

      <div className="OneByTwoGrid__two-elements">
        <div className="OneByTwoGrid__element element-2">{elements[1]}</div>

        <div className="OneByTwoGrid__element element-3">{elements[2]}</div>
      </div>
    </div>
  );
}
