import React, { Component } from 'react';

export default class Form extends Component{
	constructor(props){
		super(props);

		this.state ={
			name: "",
			email: "",
			error: false,
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
		const { characters } = this.props;
		const arr = characters.map((val,index) => {
			return val.email;
		});
		if(name.length && email.length && !arr.includes(this.state.email)) {
			this.props.handleSubmit(this.state)
			this.setState ({
				error: false,	
			})

		} else {
			this.setState ({
				error: true,	
			})
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
					{this.state.error &&
						<p>Email is already there</p>
					}
					{!this.state.email.length && 
						<p>Email is Empty</p>
					}
					<input type="text" name="name" value={name} onChange={this.handleChange}/>
					<input type="text" name="email" value={email} onChange={this.handleChange}/>
					<input type="button" name="submit" onClick={this.formSubmit} value="Submit"/>
				</div>
			
		)
	}
}