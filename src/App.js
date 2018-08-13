import React, { Component } from 'react';
import UserInput from './UserInput';
import Feedback from './Feedback';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.expectedNumber = this.generateRandomNumber();
    this.state = {
      userAnswer: 0,
    };
  }

  generateRandomNumber(){
    return Math.floor((Math.random() * 100) + 1);
  }

  setUserAnswer = (userAnswer) => {
    this.setState({
      userAnswer: userAnswer,
    });
  }

  render() {
    return (
      <div className="App">
        <h2> Guess the number between 1 and 100! </h2>
        <UserInput setUserAnswer={this.setUserAnswer} />
        <Feedback expectedNumber={this.expectedNumber} userAnswer={this.state.userAnswer}/>
      </div>
    );
  }
}

export default App;
