import React, { Component } from 'react';

class ErrorBoundaryTest extends Component {
 
    state = { greeting: "TEST"};
    componentDidMount() {
      throw new Error("An error has occured in Error Boundary Test component!");
    }
    render() {
      return <h2>{this.state.greeting}</h2>;
    }
  }

export default ErrorBoundaryTest;