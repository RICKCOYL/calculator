import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './style.css';

function ButtonPanel({ clickHandler }) {
  return (
    <>
      <div className="button_panel_row">
        <Button buttonName="AC" clickHandler={clickHandler} buttonClass="button_gray button-width" />
        <Button buttonName="+/-" clickHandler={clickHandler} buttonClass="button_gray button-width" />
        <Button buttonName="%" clickHandler={clickHandler} buttonClass="button_gray button-width" />
        <Button buttonName="÷" clickHandler={clickHandler} buttonClass="button button-width" />
      </div>
      <div className="button_panel_row">
        <Button buttonName="7" clickHandler={clickHandler} buttonClass="button_gray button-width" />
        <Button buttonName="8" clickHandler={clickHandler} buttonClass="button_gray button-width" />
        <Button buttonName="9" clickHandler={clickHandler} buttonClass="button_gray button-width" />
        <Button buttonName="X" clickHandler={clickHandler} buttonClass="button button-width" />
      </div>
      <div className="button_panel_row">
        <Button buttonName="4" clickHandler={clickHandler} buttonClass="button_gray button-width" />
        <Button buttonName="5" clickHandler={clickHandler} buttonClass="button_gray button-width" />
        <Button buttonName="6" clickHandler={clickHandler} buttonClass="button_gray button-width" />
        <Button buttonName="-" clickHandler={clickHandler} buttonClass="button button-width" />
      </div>
      <div className="button_panel_row">
        <Button buttonName="1" clickHandler={clickHandler} buttonClass="button_gray button-width" />
        <Button buttonName="2" clickHandler={clickHandler} buttonClass="button_gray button-width" />
        <Button buttonName="3" clickHandler={clickHandler} buttonClass="button_gray button-width" />
        <Button buttonName="+" clickHandler={clickHandler} buttonClass="button button-width" />
      </div>
      <div className="button_panel_row">
        <Button buttonName="0" clickHandler={clickHandler} buttonClass="zero button_gray" />
        <Button buttonName="." clickHandler={clickHandler} buttonClass="button_gray equal" />
        <Button buttonName="=" clickHandler={clickHandler} buttonClass="button equal" />
      </div>
    </>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
