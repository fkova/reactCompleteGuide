import React, { useState } from 'react';
import './App.css';
import Persons from './components/Persons/Persons';

export default () =>{
  const [showPersons, setShowPersons] = useState(false); 
  const [persons, setPersons] = useState([
    { id: '11', name: 'Max', age: 28 },
    { id: '22', name: 'Manu', age: 29 },
    { id: '33', name: 'Stephanie', age: 26 }
  ]);
  let renderedPersons = null;

  const nameChangedHandler = ( event, id ) => {
    const personIndex = persons.findIndex(p => p.id === id);
    const personsCopy = [...persons];
    const person = { ...persons[personIndex]};
    person.name = event.target.value;
    personsCopy[personIndex] = person;
    setPersons(personsCopy);
  }

  const deletePersonHandler = (personIndex) => {
    const personsCopy = [...persons];
    personsCopy.splice(personIndex, 1);
    setPersons(personsCopy);
  }

  const togglePersonsHandler = () => setShowPersons(!showPersons);

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  if (showPersons) {
    renderedPersons = (
      <div>
        <Persons 
          persons={persons}
          clicked={deletePersonHandler}
          changed={nameChangedHandler}
        />
      </div>
    );

    style.backgroundColor = 'green';
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <button style={style} onClick={togglePersonsHandler}>Toggle Persons</button>
      {renderedPersons}
    </div>
  );
}
