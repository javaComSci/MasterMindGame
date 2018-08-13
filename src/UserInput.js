import React from 'react';
import './UserInput.css';

class UserInput extends React.Component {
	constructor(props){
		super(props);
		this.state = {userInput: ""};
	}

	render(){
		return (
			<div>
				USER INPUT
			</div>
		)
	}
}

export default UserInput