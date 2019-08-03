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

  togglePeopleHandler = () => {
    this.setState({showPerson: !this.state.showPerson})
  }

  nameChangedHandler = (event, personId) => {
    const personIndex = this.state.people.findIndex(person => {
      return person.id === personId;
    });

    // Make a copy of the person...
    const personUpdated = {
      ...this.state.people[personIndex]
    };
    // ... and update its name
    personUpdated.name = event.target.value;

    // Make a copy of the people array...
    const peopleUpdated = [...this.state.people];
    // ... and update the people array on given index with the updated person
    peopleUpdated[personIndex] = personUpdated;

    // Finally update the state with the updated array, which has an updated person
    this.setState({ people: peopleUpdated });
  }

  deletePersonHandler = (personIndex) => {
    const people = [...this.state.people];
    people.splice(personIndex, 1);
    this.setState({ people: people });
  }

  render() {
    // Inline styles, scoped to the component
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
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
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );

      style.backgroundColor = 'red';
    }

    const classes = [];
    if (this.state.people.length <= 2) {
      classes.push('red')
    }
    if (this.state.people.length <= 1) {
      classes.push('bold')
    }

    return (
      <div className="App">
        <h1>Hi!</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePeopleHandler}>Toggle Person
        </button>
        {people}
      </div>
    );
  }
}

export default App;
