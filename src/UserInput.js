import React from 'react';
import './UserInput.css';

class UserInput extends React.Component {
	constructor(props){
		super(props);
		this.state = {userInput: ""};
	}

	onChangeHandler = (event) => {
		this.setState({
			userInput: event.target.value,
		});
	}

	onSubmitHandler = (event) => {
		event.preventDefault();
		let answer = this.state.userInput ? parseInt(this.state.userInput) : "";
		this.props.setUserAnswer(answer);
	}

	newGameHandler = () => {
		this.setState({
			userInput: "",
		});
		this.props.newGame();
	}

	render(){
		return (
			<div> 
				<button onClick={this.newGameHandler} value="New Game">New Game</button>
				<form onSubmit={this.onSubmitHandler}>
					<h3> Your input: </h3> <input onChange={this.onChangeHandler} value={this.state.userInput} className="userinput"/>	
					<input type="submit" className="submit"/>
				</form>
			</div>
		)
	}
}

export default UserInput