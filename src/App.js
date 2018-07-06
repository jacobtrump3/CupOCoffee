import React, { Component} from 'react';
import Links from './components/Links';
import DefaultEB from '../src/ErrorBoundaries/DefaultEB';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="tint">
          <DefaultEB>
            <Links /> 
          </DefaultEB>
        </div>
      </div>
    );
  }
}

export default App;
