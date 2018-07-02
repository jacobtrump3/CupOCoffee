import React, { Component } from 'react';
import Welcome  from './components/welcomePage';
import Posts from './components/userPosts';
import Links from './components/Links';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Links /> 
        </div>
         
    );
  }
}

export default App;
