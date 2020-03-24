import React from 'react';
import './App.css';
import Person from './Person/Person';

export default () => (
  <div className="App">
    <h1>HW</h1>
    <p>this is really working wtf</p>
    <Person />
  </div>
);

// return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'HW'));
