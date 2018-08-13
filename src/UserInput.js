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

	render(){
		return (
			<div> 
				<form onSubmit={this.onSubmitHandler}>
					<h3> Your input: </h3> <input onChange={this.onChangeHandler} value={this.state.userInput} className="userinput"/>	
					<input type="submit" className="submit"/>
				</form>
			</div>
		)
	}
}

export default UserInput