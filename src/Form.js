import React, { Component } from 'react';

export default class Form extends Component{
	constructor(props){
		super(props);

		this.state ={
			name: "",
			email: "",
		};
	}
	handleChange = (event) =>{
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	}
	formSubmit = () =>{
		const {name, email} = this.state;
		if(name.length && email.length) {
			this.props.handleSubmit(this.state)
		}
		this.setState({
			name: "",
			email: "",
		})
	}

	render(){
		const {name, email} = this.state;
		return(
				<div>
					<input type="text" name="name" value={name} onChange={this.handleChange}/>
					<input type="text" name="email" value={email} onChange={this.handleChange}/>
					<input type="button" name="submit" onClick={this.formSubmit} value="Submit"/>
				</div>
			
		)
	}
}