import React from 'react';
import ReactDOM from 'react-dom';

const ToDoTitle = "To Do App";
const ToDoDesc = "lorem ipsum dolor sit amet lorem ipsum dolor sit amet";
const date = new Date();
const Today = date.getDate();
const month = date.getMonth();
const CurrentFullYear = date.getFullYear();

ReactDOM.render(
  <div>
    <h1 style={{color:'red'}}>{ToDoTitle}</h1>
    <h2>{ToDoDesc}</h2>
    <h2>{Today + "/" + month + "/" + CurrentFullYear}</h2>
  </div>,
  document.getElementById('root')
);

