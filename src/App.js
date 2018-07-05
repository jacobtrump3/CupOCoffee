import React, { Component} from 'react';
import Links from './components/Links';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="tint">
          <Links /> 
        </div>
      </div>
    );
  }
}

export default App;
