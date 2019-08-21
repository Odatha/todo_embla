import React from 'react';
import ReactDOM from 'react-dom';
//import todo from './todo';
import './index.css';
import Todo from './Todo';


//ReactDOM.render(<App />, document.getElementById('root'));

//var place=document.querySelector("#container");

ReactDOM.render(
    <div>
      <p>Hello!!</p> 
      <Todo/> 
    </div>,
    document.querySelector("#container")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

