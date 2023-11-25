import React from 'react';

export default function CalcButton({ children, onClick }) {
  return (
    <button className="calcButton" onClick={onClick}>
      {children}
    </button>
  );
};
