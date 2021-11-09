import React,{StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Button} from './App';

// StrictMode is similar in functionality to 'use strict'
// impot React,{StrictMode} from 'react';
// a tool for detection potential problems
// it can track legacy code
// for example when we copy something into our code and
//if we come across an outdated application, we will see where 
//we need to change the code
//we can call this on any pages, and wrap any component in it

    // impot React,{StrictMode} from 'react';

    // function App() {
    //     return (
    //         <div className="App">
    //             <StrictMode>
    //                 <Header />
    //             </StrictMode>
    //             <Field />
    //             <Button />
    //         </div>
    //     );
    // }

//or we can change styles
  import styled from 'styled-components';
  const BigButton = styled(Button)`
    margin: 0 auto;
    width: 245px;
  `;
  ReactDOM.render(
      <StrictMode>
        <App />
        {/* <Button/> */}
        {/* <BigButton>Click here</BigButton> */}
        <BigButton as="a">Click here</BigButton>{/* this is the link now */}
      </StrictMode>,
    document.getElementById('root')
  );