import React, { useState } from 'react';
import CalcButton from './CalcButton';
import Display from './Display';
import "../../styles/CalculatorStyles/Calculator.css"

export default function Calculator() {
  const [firstNum, setFirstNum] = useState('0');
  const [secondNum, setSecondNum] = useState('');
  const [operator, setOperator] = useState(null);

  function handleNumberClick(number) {
    if (firstNum === '0') {
      setFirstNum(number.toString());
    } else if (firstNum && !operator) {
      setFirstNum(firstNum + number.toString())
    } else if (firstNum && operator) {
      setSecondNum('');
      setSecondNum(secondNum + number.toString());
    }
  }

  function handleOperatorClick(curOperator) {
    if (operator) {
      calculate();
    }
    setOperator(curOperator);
  }

  function handleEqualsClick() {
    calculate();
  }

  function calculate() {
    if (operator && !isNaN(parseFloat(secondNum))) {
      const result = performOperation(parseFloat(firstNum), parseFloat(secondNum));
      setFirstNum(result.toString());
      setSecondNum('');
      setOperator(null);
      console.log(result)
    }
  }

  function performOperation(num1, num2) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case 'x':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          console.error("Error cannot divide by zero");
          return "Undefined";
        }
        return num1 / num2;
      default:
        return num2;
    }
  }

  function handleClearClick() {
    setFirstNum('0');
    setSecondNum('');
    setOperator(null);
  }

  function handleBackspaceClick() {
    if (firstNum !== '0') {
      setFirstNum(firstNum.slice(0, -1));
    }
  }

  function handleDecimalPointClick() {
    if (!firstNum.includes('.')) {
      setFirstNum(firstNum + '.');
    }
  }

  return (
    <div className="calculator">
      <Display firstNum={firstNum} secondNum={secondNum} operator={operator}/>
      <div className="buttons">
        <div className="deleters">
          <CalcButton onClick={handleClearClick}>C</CalcButton>
          <CalcButton onClick={handleBackspaceClick}>Del</CalcButton>
        </div>
        <div className='numpad'>
          <div className="row">
            <CalcButton onClick={() => handleNumberClick('7')}>7</CalcButton>
            <CalcButton onClick={() => handleNumberClick('8')}>8</CalcButton>
            <CalcButton onClick={() => handleNumberClick('9')}>9</CalcButton>
            <CalcButton className="operator" onClick={() => handleOperatorClick('+')}>+</CalcButton>
          </div>
          <div className="row">
            <CalcButton onClick={() => handleNumberClick('4')}>4</CalcButton>
            <CalcButton onClick={() => handleNumberClick('5')}>5</CalcButton>
            <CalcButton onClick={() => handleNumberClick('6')}>6</CalcButton>
            <CalcButton className="operator" onClick={() => handleOperatorClick('-')}>-</CalcButton>
          </div>
          <div className="row">
            <CalcButton onClick={() => handleNumberClick('1')}>1</CalcButton>
            <CalcButton onClick={() => handleNumberClick('2')}>2</CalcButton>
            <CalcButton onClick={() => handleNumberClick('3')}>3</CalcButton>
            <CalcButton className="operator" onClick={() => handleOperatorClick('x')}>x</CalcButton>
          </div>
          <div className="row">
            <CalcButton onClick={() => handleNumberClick('0')}>0</CalcButton>
            <CalcButton className="operator" onClick={handleDecimalPointClick}>.</CalcButton>
            <CalcButton className="equals" onClick={() => handleEqualsClick('=')}>=</CalcButton>
            <CalcButton className="operator" onClick={() => handleOperatorClick('/')}>/</CalcButton>
          </div>
        </div>
      </div>
    </div>
  );
}
