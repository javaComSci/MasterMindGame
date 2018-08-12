import React, { Component } from 'react';
import UserInput from './UserInput';
import Feedback from './Feedback';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInput />
        <Feedback />
      </div>
    );
  }
}

export default App;
