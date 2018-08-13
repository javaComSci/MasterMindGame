import React from 'react';
import './Feedback.css';

class Feedback extends React.Component {
	constructor(props){
		super(props);
	}

	getFeedbackText(){
		let expectedNumber = this.props.expectedNumber;
		let userAnswer = this.props.userAnswer;
		let absDiff = Math.abs(expectedNumber - userAnswer);
		if (!userAnswer) {
			return <div className="noAnswer">Please enter an answer!</div>;
		}

		if (absDiff == 0){
			return <div className="correct">CORRECT!</div>;
		} else if (absDiff <= 10) {
			return <div className="hot">Hot! So close!</div>;
		} else if (absDiff <= 30) {
			return <div className="warm">Warm! Getting there!</div>;
		} else {
			return <div className="cold">Cold! Keep trying!</div>;
		}
	}

	render(){
		return (
			<div>{this.getFeedbackText()}</div>
		);
	}
}

export default Feedback;