import React, { Component } from 'react';
import styles from './App.css';
import Person from './Person/Person'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
    let people = null;
    let buttonStyle = '';

    if (this.state.showPerson) {
      people = ( // open braces to write JSX code
        <div>
          {this.state.people.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  name={person.name}
                  age={person.age}
                  click={() => this.deletePersonHandler(index)}
                  changed={(event) => this.nameChangedHandler(event, person.id)} />
              </ErrorBoundary>
            )
          })}
        </div>
      );

      buttonStyle = styles.Red;
    }

    const assignedClasses = [];
    if (this.state.people.length <= 2) {
      assignedClasses.push(styles.red)
    }
    if (this.state.people.length <= 1) {
      assignedClasses.push(styles.bold)
    }

    return (
      <div className={styles.App}>
        <h1>Hi!</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
          className={buttonStyle}
          onClick={this.togglePeopleHandler}>Toggle Person
        </button>
        {people}
      </div>
    );
  }
}

export default App;
