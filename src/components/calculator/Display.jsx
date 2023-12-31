import React from 'react';
import "../../styles/CalculatorStyles/Display.css"

export default function Display({ firstNum, secondNum, operator }) {
  return (
    <div className="display">
      <div>{firstNum} {operator} {secondNum}</div>
    </div>
  );
};
