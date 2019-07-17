import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    people: [
      { id: 123, name: "Danilo", age: 32 },
      { id: 456, name: "Ale", age: 34 },
      { id: 789, name: "Pedro", age: 3 },
    ],
    otherState: 'some other thing',
    showPerson: false,
  }

  togglePeopleHandler = (newName) => {
    this.setState({showPerson: !this.state.showPerson})
  }

  nameChangedHandler = (event) => {
    this.setState({
      people: [
        { name: "Danilo Barion Nogueira", age: 32 },
        { name: event.target.value, age: 34 },
        { name: "Pedro Palmieri Nogueira", age: 3 },
      ]
    })
  }

  deletePersonHandler = (personIndex) => {
    const people = [...this.state.people];
    people.splice(personIndex, 1);
    this.setState({people: people})
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

    let people = null;
    if (this.state.showPerson) {
      people = ( // open braces to write JSX code
        <div>
          {this.state.people.map((person, index) => {
            return <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi!</h1>
        <button
          style={style}
          onClick={this.togglePeopleHandler}>Toggle Person
        </button>
        {people}
      </div>
    );

    // The code above is compiled to this:
    // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'React App'));
  }
}

export default App;
