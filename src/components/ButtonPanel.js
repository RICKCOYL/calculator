import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ButtonPanel({ clickHandler }) {
  return (
    <div id="btn-panel">
      <div className="d-flex">
        <Button buttonName="AC" clickHandler={clickHandler} />
        <Button buttonName="+/-" clickHandler={clickHandler} />
        <Button buttonName="%" clickHandler={clickHandler} />
        <Button buttonName="÷" clickHandler={clickHandler} />
      </div>
      <div className="d-flex">
        <Button buttonName="7" clickHandler={clickHandler} />
        <Button buttonName="8" clickHandler={clickHandler} />
        <Button buttonName="9" clickHandler={clickHandler} />
        <Button buttonName="x" clickHandler={clickHandler} />
      </div>
      <div className="d-flex">
        <Button buttonName="4" clickHandler={clickHandler} />
        <Button buttonName="5" clickHandler={clickHandler} />
        <Button buttonName="6" clickHandler={clickHandler} />
        <Button buttonName="-" clickHandler={clickHandler} />
      </div>
      <div className="d-flex">
        <Button buttonName="1" clickHandler={clickHandler} />
        <Button buttonName="2" clickHandler={clickHandler} />
        <Button buttonName="3" clickHandler={clickHandler} />
        <Button buttonName="+" clickHandler={clickHandler} />
      </div>
      <div className="d-flex">
        <Button buttonName="0" clickHandler={clickHandler} />
        <Button buttonName="." clickHandler={clickHandler} />
        <Button buttonName="=" clickHandler={clickHandler} />
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
