import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import '../css/index.css';
import Navbar from './Navbar';
import Contact from './Contact';
import About from './About';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: undefined,
      next: undefined,
      operation: undefined,

    };
  }

  handleClick = ({ buttonName }) => {
    const result = calculate(this.state, buttonName);

    this.setState(result);
  };

  render() {
    const { total, next, operation } = this.state;

    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Display total={total} next={next} operation={operation} />
            <ButtonPanel clickHandler={this.handleClick} />
          </Route>
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    );
  }
}

export default App;
