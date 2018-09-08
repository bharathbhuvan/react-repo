import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';

export default class App extends Component {
	state = {
			characters:[
	            
        	]
    	}
    removeCharacter = (index) =>{
    	const { characters } =this.state;
    	this.setState({
    		characters: characters.filter((char,i) => {
    			return i !== index;
    		})
    	});
    }
    handleSubmit = (characters)	=>{
    	this.setState({
    		characters: [...this.state.characters,characters]	
    	});
    }
	render(){ 
		return(
			<div className="container">
        		<Table charactername = {this.state.characters} rmovechar ={this.removeCharacter}/>
        		<Form handleSubmit={this.handleSubmit}/>
    		</div>
		);
	}
}

