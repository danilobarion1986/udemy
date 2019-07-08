import React from 'react';
import logo from './logo.svg';
import './App.css';
import myName, { myAge, multiplyByTwo } from './basic/arrow_functions'
import Danilo from './basic/classes'

function App() {
  const danilo = new Danilo()

  const oldArray = [1, 3, 2, 5, 4]
  const newArray = [...oldArray, 9, 7, 0, 6, 8]

  const oldObject = { id: 1, name: 'old' }
  const newObject = { ...oldObject, name: 'new' }

  const addMany = (...numbers) => {
    return numbers.reduce((accumulator, currentValue) => {
      accumulator = accumulator + currentValue
      return accumulator
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Learn React {myName('Danilo')}!</p>
          <p>Learn React (with class) {danilo.name} {danilo.printSurname()}!</p>
        </a>

      </header>
      <p>Your age is {myAge} and 21 * 2 = {multiplyByTwo(21)}</p>
      <p>Your age (with class) is {danilo.age} and your gender is {danilo.gender}</p>
      <p>Sorted newArray is {newArray.sort()}</p>
      <p>newObject name is {newObject.name}</p>
      <p>addMany: {addMany(...newArray)}</p>
    </div>
  );
}

export default App;
