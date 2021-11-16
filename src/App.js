import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
// import { Component, Fragment } from 'react';
import InsertPropsChildren from './InsertPropsChildren';
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
	// class WhoAmI extends Component {
	// 	constructor(props) {
	// 		super(props);
	// 		this.state = {
	// 			years: 28,
	// 			text: 'click here',
	// 			position: ''
	// 		}
	// 	}

	// nextYear = () => {
	// 	this.setState(state => ({
	// 		years: state.years + 1
	// 	}))
	// }

	// CommitInputChange = (e, text) => {
	// 	console.log(text);
	// 	this.setState ({
	// 		position: e.target.value
	// 	})
	// 	console.log(this.state.position);
	// }
	// render() {
	// 	const {name, surname, link} = this.props;
	// 	const {years, position} = this.state;
	// 	return(
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
//For react Fragment we can assign a unique key like this:
//React.Fragment key="sdf"
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
	// 		<>
	// 			<button onClick={this.nextYear}>{this.state.text}</button>
	// 			<h1>My name is {name}, 
	// 				surname - {surname},  
	// 				age - {years},  
	// 				position - {position} </h1>
	// 			<a href={link}>My profile</a>
	// 			<form >
	// 				<span>Written here</span>
	// 				<input onChange={(e) => {this.CommitInputChange(e, 'some text')}} />
	// 			</form>
	// 		</>
	// 	)
	// }
	// }
	// function App() {
	// 	return (
	// 		<div className="App">
	// 			<WhoAmI name='John' surname='Smith' link='facebook.com' />
	// 			<WhoAmI name='Alex' surname='Smoothy' link='linkedin.com' />
	// 		</div>
	// 	);
	// }

	// export default App;


//Styles in React. Styled Component
//https://styled-components.com/
//To use this technology we need to run the command:
//npm install --save styled-components
// and import: import styled from 'styled-components';

	const EmpItem = styled.div`
		padding: 20px;
		margin-bottom: 15px;
		border-radius: 5px;
		box-shadow: 5px 5px 10px rgba(0, 0, 0,  0.2);
		a {
			display: block;
			margin: 10px 0 10px 0;
			// color: black;
			color: ${props => props.active ? 'orange' : 'black'}
		}
		input {
			display: block;
			margin-top: 10px;
		}
	`;
	const Header = styled.h2`
		font-size: 22px;
	`;
//We can use this component in other files
	export const Button = styled.button`
	 	display: block;
		padding: 5px 15px;
		background-color: gold;
		border: 1px solid rgba(0, 0, 0, .2);
		box-shadow: 5px 5px 10px rgba(0, 0, 0,  0.2);
	`;

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
					<EmpItem active>
						<Button onClick={this.nextYear}>{this.state.text}</Button>
						<Header>My name is {name}, 
							surname - {surname},  
							age - {years},  
							position - {position} </Header>
						<a href={link}>My profile</a>
						<form >
							<span>Written here</span>
							<input onChange={(e) => {this.CommitInputChange(e, 'some text')}} />
						</form>
					</EmpItem>
				)
			}
		}
	const Wrapper = styled.div`
		width: 600px;
		margin: 80px auto 0 auto;
	`;
//inserting elements through props.children
//documentation: https://ru.reactjs.org/docs/react-api.html#reactchildren
//Let's create a component DynamicGreating
	const DynamicGreating = (props) => {
		return (
			<div className={'mb-3 p-3 border border-' + props.color}>
{/* We have to insert something here */}
				{/* {props.children} */}
{/* We can call the map method, but we have to import the react */}
				{
					React.Children.map(props.children, child => {
// We cannot modify the elements, so we can clone these elements and them modify them
						return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'});

					})
				}
			</div>
		)
	}
		function App() {
		return (
			<Wrapper className="App">
				<DynamicGreating color={'primary'} >
					<h2>This week was hard</h2>
					<h2>Hello world !</h2>
				</DynamicGreating>
{/* In this way we pass our child to the right and left column */}
				<InsertPropsChildren
					right = {
						<DynamicGreating color={'primary'} >
							<h2>This week was hard</h2>
							<h2>Hello world !</h2>
						</DynamicGreating>
					}
					left = {
						<DynamicGreating color={'primary'} >
							<h2>Right column</h2>
							<h2>Hello world !</h2>
						</DynamicGreating>
					}
// By combining both of these methods we get a powerfull tool
				/>

				<WhoAmI name='John' surname='Smith' link='facebook.com' />
				<WhoAmI name='Alex' surname='Smoothy' link='linkedin.com' />				
			</Wrapper>
		);
	}

	export default App;