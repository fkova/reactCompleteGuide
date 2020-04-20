import React from 'react';
import './Person.css';

export default (props) => 
<div className="Person">
  <p onClick={props.click}>I'm {props.name}</p>
  <input type="text" onChange={props.changed} value={props.name} />
</div> 