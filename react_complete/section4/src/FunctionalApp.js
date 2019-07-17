import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const functionalApp = props => {
  // useState retorna um array
  //  ==> 1º elemento sendo o "objeto" passado como parâmetro (pode ser qualquer tipo de dado)
  //  ==> 2º uma função que permite atualizar esse "objeto" (nomeada geralmente com "setXPTO")
  const [ personsState, setPersonsState ] = useState(
    {
      persons: [
        { name: "Danilo", age: 32 },
        { name: "Ale", age: 34 },
        { name: "Pedro", age: 3 },
      ],
    }
  );

  const [ otherState, setOtherState ] = useState('Some other things');

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "Danilo Barion Nogueira", age: 32 },
        { name: "Alessandra Stella Palmieri Nogueira", age: 34 },
        { name: "Pedro Palmieri Nogueira", age: 3 },
      ]
    })
  };

  return (
    <div className="App">
      <h1>Hi!</h1>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}

export default functionalApp;
