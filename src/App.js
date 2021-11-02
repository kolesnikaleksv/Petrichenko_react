import React from 'react';
import { Component } from 'react';
import './App.css';

// Components state
// state in the classes

	// function WhoAmI({name, surname, link}) {
	// 	return(
	// 		<div>
	// 			<h1>My name is {name()}, surname - {surname}</h1>
	// 			<a href={link}>My profile</a>
	// 		</div>
	// 	)
	// }
//let's rewrite our function into a class
//We will also see how to 'props' works inside class component
	// class WhoAmI extends Component {
//when a class component is called, it create its instance:<WhoAmI/>
//To pass a props to class instances, we need to create a constructor
		// constructor(props) {
// So we can use 'props', we prescribe keyword 'super' and pass 'props'
			// super(props);
//Now this.props appear in every instance
		// }
//We do not need an empty constructor and can be deleted
//but if there are additional props in it, it can be returned
		// constructor(props) {
		// 	super(props);
//we can't to change read-only 'props',
// but we can create state and changed it
	// 		this.state = {
	// 			years: 28
	// 		}
	// 	}
	// 	render() {
	// 		const {name, surname, link} = this.props;
	// 		return(
	// 			<div>
	// 				<h1>My name is {name}, surname - {surname} age={this.state.years}</h1>
	// 				<a href={link}>My profile</a>
	// 			</div>
	// 		)
	// 	}
	// }

//create a button with the event
//create a method to change the state	
	// class WhoAmI extends Component {
	// 	constructor(props) {
	// 		super(props);
	// 		this.state = {
	// 			years: 28
	// 		}
	// 	}
// create a method nextYear
//It should be an arrow function
		// nextYear = () => {
		// 	console.log('+++');
		// } 
//How to change the 'state' state correctly
//'state' cannot be changed directly like this:
	// nextYear = () => {
	// 	console.log('+++');
	// 	this.state.years++//You can't do that !!!!!
	// } 
// 	nextYear = () => {
// 		console.log('+++');
// 		this.setState({
// //This way we also change the state directly
// 			years: ++this.state.years// you can't do that !!!
// 		})
// 	}
//Now the right way
	// nextYear = () => {
	// 	console.log('+++');
	// 	this.setState({
	// 		years: this.state.years + 1
	// 	})
	// }
//To make this code asynchronous we need to pass there a callback function
	// 	nextYear = () => {
	// 		console.log('+++');
	// 		this.setState(state => ({
	// 			years: state.years + 1 // we need to remove 'this.'
	// 		}))
	// 	}
	// 	render() {
	// 		const {name, surname, link} = this.props;
	// 		return(
	// 			<div>
	// 				<button onClick={this.nextYear}>click here</button>
	// 				<h1>My name is {name}, surname - {surname} age={this.state.years}</h1>
	// 				<a href={link}>My profile</a>
	// 			</div>
	// 		)
	// 	}
	// }

//If we have several properties, the setState function will only
//change what it was told, the rest of the states will remain intact
	class WhoAmI extends Component {
		constructor(props) {
			super(props);
			this.state = {
				years: 28,
				text: 'click here'
			}
		}

	nextYear = () => {
		// console.log('+++');
		this.setState(state => ({
			years: state.years + 1 
		}))
	}
	render() {
		const {name, surname, link} = this.props;
		return(
			<div>
				<button onClick={this.nextYear}>{this.state.text}</button>
				<h1>My name is {name}, surname - {surname} age={this.state.years}</h1>
				<a href={link}>My profile</a>
			</div>
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

// The task from teacher on the codepan is complete
class App extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		counter: this.props.counter
	  }
	}
	
	incr = () => {
	  if(this.state.counter < 50) {
		 this.setState( {
		 counter: this.state.counter + 1
	  });
	  } 
	}
	decr = () => {
	  if(this.state.counter > -50) {
		this.setState({
		  counter: this.state.counter - 1
		});
	  }
	}
	getRandom = () => {
	   let randomNum = Math.floor(Math.random() * (50 - -50)) + -50;
	  this.setState({
		counter: randomNum
	  })
	}
	getReset = () => {
	  this.setState({
		counter: this.props.counter
	  })
	}
	// Используйте только стрелочную форму методов
	// Почему? Подробный ответ будет в следующем уроке
	
	render() {
	  const {counter} = this.state;
	  return (
		<div class="app">
		  <div class="counter">{counter}</div>
		  <div class="controls">
			<button onClick={this.incr}>INC</button>
			<button onClick={this.decr} >DEC</button>
			<button onClick={this.getRandom} >RND</button>
			<button onClick={this.getReset} >RESET</button>
		  </div>
		</div>
	  )
	}
  }
  
  ReactDOM.render(<App counter={10}/>, document.getElementById('app'));
  
  // 1) Начальное значение счетчика должно передаваться через props
  // 2) INC и DEC увеличивают и уменьшают счетчик соответственно на 1. Без ограничений, но можете добавить границу в -50/50. По достижению границы ничего не происходит
  // 3) RND изменяет счетчик в случайное значение от -50 до 50. Конструкцию можете прогуглить за 20 секунд :) Не зависит от предыдущего состояния
  // 4) RESET сбрасывает счетчик в 0 или в начальное значение из пропсов. Выберите один из вариантов
