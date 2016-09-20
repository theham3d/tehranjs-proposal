import React from 'react';
var data = require("json!../data.json");
export default class Person extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<li>
				<a href={this.props.person.link} className="person">
					<img src={require(`../img/team/${this.props.person.avatar}`)} alt={this.props.person.name}/>
					<h4>{this.props.person.name}</h4>
					<span>{this.props.person.position}</span>
				</a>
			</li>
		)
	}
}
export default class Team extends React.Component{
	
	render(){
		var teams = data.teams;
		return(
				<ul className="teams--list">
					{teams.map((person,i)=> <Person key={i} person={person}/> )}
				</ul>
		)
	}
}