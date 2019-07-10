import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "Danilo", age: 32 },
      { name: "Ale", age: 34 },
      { name: "Pedro", age: 3 },
    ]
  }

  switchNameHandler = (newName) => {
    // DON'T DO THIS: this.state.persons[0].name = 'Max';
    this.setState({
      persons: [
        { name: newName, age: 32 },
        { name: "Alessandra Stella Palmieri Nogueira", age: 34 },
        { name: "Pedro Palmieri Nogueira", age: 3 },
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Danilo Barion Nogueira", age: 32 },
        { name: event.target.value, age: 34 },
        { name: "Pedro Palmieri Nogueira", age: 3 },
      ]
    })
  }

  render() {
    // Inline styles, scoped to the component
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi!</h1>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Danilo Barion!!!!')}>Switch name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Stellinha!')}
          changed={this.nameChangedHandler} />

        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );

    // The code above is compiled to this:
    // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'React App'));
  }
}

export default App;
