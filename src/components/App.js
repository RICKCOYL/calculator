import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (buttonName) => {
    const newState = calculate(this.state, buttonName);
    this.setState(newState);
  };

  render() {
    return (
      <>
        <Display />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
