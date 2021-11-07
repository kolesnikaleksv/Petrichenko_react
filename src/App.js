import React from 'react';
import { Component } from 'react';
// import { Component, Fragment } from 'react';
import './App.css';

//Events in React
// // onChange == onInput
// 	class WhoAmI extends Component {
// 		constructor(props) {
// 			super(props);
// 			this.state = {
// 				years: 28,
// 				text: 'click here',
// 				position: ''
// 			}
// 		}

// 	nextYear = () => {
// 		this.setState(state => ({
// 			years: state.years + 1 
// 		}))
// 	}

// 	CommitInputChange = (e) => {
// 		//console.log(e.target); // we see where it is works - in input
// 		//console.log(e.target.value);// we see the value of input
// 		this.setState ({
// 			position: e.target.value
// 		})
// 		console.log(this.state.position);
// 	}

//When the event is triggered. the call context is lost
//If we rewrite an arrow function, everything is break
//There are three ways to avoid this problem
//1 Through the bind construction
// we essentially pass this method to the class
//2 always use arrow functions(how it was originally)
//3 call using arrow function in event
		
// 	class WhoAmI extends Component {
// 		constructor(props) {
// 			super(props);
// 			this.state = {
// 				years: 28,
// 				text: 'click here',
// 				position: ''
// 			}
// 			// this.nextYear = this.nextYear.bind(this)//The first way
// 		}

// 	nextYear() {
// 		this.setState(state => ({
// 			years: state.years + 1 
// 		}))
// 	}

// 	CommitInputChange = (e) => {
// 		this.setState ({
// 			position: e.target.value
// 		})
// 		console.log(this.state.position);
// 	}
// 	render() {
// 		const {name, surname, link} = this.props;
// 		const {years, position} = this.state;
// 		return(
// 			<div>
// 				 <button onClick={() => this.nextYear()}>{this.state.text}</button>{/* The third way */}
// 				<h1>My name is {name}, 
// 					surname - {surname},  
// 					age - {years},  
// 					position - {position} </h1>
// 				<a href={link}>My profile</a>
// 				<form >
// 					<span>Written here</span>
// 					<input onChange={this.CommitInputChange} />
// 				</form>
// 			</div>
// 		)
// 	}
// }
// 	function App() {
// 		return (
// 			<div className="App">
// 				<WhoAmI name='John' surname='Smith' link='facebook.com' />
// 				<WhoAmI name='Alex' surname='Smoothy' link='linkedin.com' />
// 			</div>
// 		);
// 	}

// export default App;

//Using arguments in event handlers
//To pass arguments we create an arrow function and be sure to pass (e) and 
// other arguments as needed
	class WhoAmI extends Component {
		constructor(props) {
			super(props);
			this.state = {
				years: 28,
				text: 'click here',
				position: ''
			}
		}

	nextYear = () => {
		this.setState(state => ({
			years: state.years + 1 
		}))
	}

	CommitInputChange = (e, text) => {
		console.log(text);
		this.setState ({
			position: e.target.value
		})
		console.log(this.state.position);
	}
	render() {
		const {name, surname, link} = this.props;
		const {years, position} = this.state;
		return(
			// <div>
			// 	<button onClick={this.nextYear}>{this.state.text}</button>
			// 	<h1>My name is {name}, 
			// 		surname - {surname},  
			// 		age - {years},  
			// 		position - {position} </h1>
			// 	<a href={link}>My profile</a>
			// 	<form >
			// 		<span>Written here</span>
			// 		<input onChange={(e) => {this.CommitInputChange(e, 'some text')}} />
			// 	</form>
			// </div>
//So we can avoid unnecessary div
			// <Fragment>
			//  	<button onClick={this.nextYear}>{this.state.text}</button>
			//  	<h1>My name is {name}, 
			//  		surname - {surname},  
			//  		age - {years},  
			//  		position - {position} </h1>
			//  	<a href={link}>My profile</a>
			//  	<form >
			//  		<span>Written here</span>
			//  		<input onChange={(e) => {this.CommitInputChange(e, 'some text')}} />
			//  	</form>
			//  </Fragment>
//or an empty tag
			<>
				<button onClick={this.nextYear}>{this.state.text}</button>
				<h1>My name is {name}, 
					surname - {surname},  
					age - {years},  
					position - {position} </h1>
				<a href={link}>My profile</a>
				<form >
					<span>Written here</span>
					<input onChange={(e) => {this.CommitInputChange(e, 'some text')}} />
				</form>
			</>
		)
	}
	}
	function App() {
		return (
			<div className="App">
				<WhoAmI name='John' surname='Smith' link='facebook.com' />
				<WhoAmI name='Alex' surname='Smoothy' link='linkedin.com' />
			</div>
		);
	}

	export default App;