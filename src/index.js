import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

    // const element = <h2>Hello world</h2>

// const element = React.createElement('h2', {className: 'myClass'}, 'Hello world');
// in the console: <h2 class="myClass">Hello world</h2>
// it looks like this in virtualDom:
    // const element = {
    //   type: 'h2',
    //   props:{
    //     className: 'myClass',
    //     children: 'Hello world'
    //   }
    // }

// !!! import React only in the main index.js file

// the multiline elemen is enclosed parentheses
// An element must have only one parent

    // const element = (
    //         <div>
    //             <h1>Hello world</h1>
    //             <input type="text" />
    //             <button>Click</button>
    //             {/* <button /> if we don't need to put the element inside */}
    //         </div>
    // );
//passing the element to JSX
    // const text = 'Hello world'
    //     const element = (
    //             <div>
    //                 <h1>{text}</h1>
    //                 {/* <h1>Text: {text}</h1> */}
    //                 {/* <h1>Text: {2+2}</h1> */}
    //                 {/* <h1>Text: {new Date()}</h1> //an error */}
    //                 {/* <h1>Text: {{}}</h1>  // an error */}
    //                 {/* <h1>Text: {['sdfs', 's323', '234']}</h1> //will return a string */}
    //                 <input type="text" />
    //                 <button>Click</button>
    //             </div>
    //     );
//Attributes are always written in camelCase
    const text = 'Hello world'
        const element = (
                <div>
                    <h1 className='text'>{text}</h1>
                    <input type="text" />
                    <label htmlFor=""></label>
                    <button tabIndex={0} >Click</button>
                </div>
        );


ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  element,
  document.getElementById('root')
);