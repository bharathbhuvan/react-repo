import React, { Component } from 'react';

export default class App extends Component{
	state = {
		data:[],
	}

	componentDidMount(){
		const url ="https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*"

		fetch(url)
			.then(result => result.json())
			.then(result =>{
					this.setState({
						data:result,
					})
				}
			)
	}

	render(){
		const { data } = this.state;
		const result = data.map((val, index) => {
			return <li key={index}>{val}</li>;
		});

		return <ul>{result}</ul>;
	}
}