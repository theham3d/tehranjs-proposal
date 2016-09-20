import React from 'react';
var data = require("json!../data.json");
class Company extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<li>
				<a href={this.props.company.link} className="sponsor--body">
					<img src={require(`../img/sponsor/${this.props.company.logo}`)} alt={this.props.company.name}/>
					<span>{this.props.company.name}</span>
				</a>
			</li>
		)
	}
}

export default class Sponsor extends React.Component{
	
	render(){
		var sponsors = data.sponsors;
		return(
				<ul className="sponsor--list">
					{sponsors.map((company,i)=> <Company key={i} company={company}/> )}
				</ul>
		)
	}
}