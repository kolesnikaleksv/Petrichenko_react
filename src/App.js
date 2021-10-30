import React from 'react';
import { Component } from 'react';
import './App.css';

//All components start with a capital letter 
//Component are functions that can return JSX elements
// It may be a regular function or an arrow functions
	const Header = () => {
		return <h1>Hello world!</h1>
	}

	// const Field = () => {
	// 	return <input placeholder="write here" type="text"/>
	// }

	// function Button() {
	// 	const text = 'log in'
// We can call functions inside the curly braces
		// function res() {
		// 	return 'log in';
		// }
		// return <button>{res()}</button>
		// return <button>{text}</button>
//inside the element we can put other elements
	// 	const p = <p>log in</p>
	// 	return <button>{p}</button>

	// }
// We can use conditions inside the curly braces

		function Button() {
			const text = 'log in';
			const loaded = false;
			return <button>{loaded ? text : 'Enter'}</button>
		}
// We can't use the "if/else" construction
		
	// const Field = () => {
	// 	const holder = 'Enter here';
	// 	const styledField = {
	// 		width: '300px'
	// 	};
//The long attribute is written to the column
	// 	return <input 
	// 	placeholder={holder} 
	// 	type="text" 
	// 	style={styledField} />
	// }
//Components used to be classes but now they are functions
//But classes must be ingerited from some kind of components
//There should be only one main method inside the class: render
	class Field extends React.Component{
		render() {
			const holder = 'Enter here';
			const styledField = {
				width: '300px'
			};
//And when we need to return something that we wrote: return			
			return <input 
			placeholder={holder} 
			type="text" 
			style={styledField} />
		}
	}

	function App() {
	return (
		<div className="App">
			<Header />
			<Field />
			<Button />
		</div>
	);
	}
// We can do named import
	// export {Header};
	export default App;
