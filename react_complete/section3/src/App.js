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

  render() {
    return (
      <div className="App">
        <h1>Hi!</h1>
        <button onClick={() => this.switchNameHandler('Danilo Barion!!!!')}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Stellinha!')} />

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
