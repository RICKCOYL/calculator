import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import '../css/index.css';

const App = () => {
  const [calculatorData, setCalculatorData] = useState({
    total: undefined,
    next: undefined,
    operation: undefined,
  });

  const handleClick = (buttonName) => {
    const newCalculatorData = calculate(calculatorData, buttonName);
    setCalculatorData(newCalculatorData);
  };

  let { total } = calculatorData;
  const { next } = calculatorData;
  total = total || '0';

  return (
    <>

      <Display result={next || total} />
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
};

export default App;
