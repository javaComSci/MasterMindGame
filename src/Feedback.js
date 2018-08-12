import React from 'react';

class Feedback extends React.Component {
	constructor(props){
		super(props);
	}

	getFeedbackText(){
		let expectedNumber = this.props.expectedNumber;
		let userAnswer = this.props.userAnswer;
		let absDiff = Math.abs(expectedNumber - userAnswer);
		if (!userAnswer) {
			return "Please enter an answer!";
		}

		if (absDiff == 0){
			return "CORRECT!"
		} else if (absDiff <= 10) {
			return "Hot! So close!";
		} else if (absDiff <= 30) {
			return "Warm! Getting there!";
		} else {
			return "Cold! Keep trying!";
		}
	}

	render(){
		return (
			<div>{this.getFeedbackText()}</div>
		);
	}
}

export default Feedback;