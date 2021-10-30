import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// elements are unchanged
// to change an element it needs to completle redraw
    // const text = 'Hello world'
    //     const element = (
    //             <div>
    //                 <h1 className='text'>{text}</h1>
    //                 <input type="text" />
    //                 <label htmlFor=""></label>
    //                 <button tabIndex={0} >Click</button>
    //             </div>
    //     );


ReactDOM.render(
    <App />
  //element
  ,
  document.getElementById('root')
);