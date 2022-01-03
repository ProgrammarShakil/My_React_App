import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const todoTitle = "Call Family"
const todoDesc = "Ipsum no sea sadipscing consetetur vero. Nonumy justo diam sed lorem sit, sed sit clita sit takimata sed sanctus invidunt."
const fullDate = new Date();
const date = fullDate.getDate() + "/" + fullDate.getMonth() + "/"+ fullDate.getFullYear();

ReactDOM.render(
  <div>
    <div  className="card-style">
        <h3>{todoTitle}</h3>
        <p>{todoDesc}</p>
        <p>{date}</p>
    </div>
  </div>,
  document.getElementById('root')
);

