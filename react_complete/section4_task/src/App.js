import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {
  state = {
    inputText: {
      value: '',
      length: 0,
    }
  };

  inputTextChangeHandler = (event) => {
    const inputTextUpdated = event.target.value;
    const stateUpdated = this.state;
    stateUpdated.inputText.value = inputTextUpdated;
    stateUpdated.inputText.length = inputTextUpdated.length;

    this.setState(stateUpdated);
  };

  charClickedHandler = (charIndex) => {

  };

  render() {
    const styleDone = { color: 'green' }
    const styleDoing = { color: 'blue' }
    const textLength = this.state.inputText.length;
    const textChars = this.state.inputText.value.split('');

    const charsList = textChars.map((char, index) => {
      return (
        <CharComponent key={char + index} letter={char} click={() => this.charClickedHandler(index)} />
      )
    });
    const done = <span style={styleDone}>Done!</span>;
    const doing = <span style={styleDoing}>Doing!</span>;

    return (
      <div className="App">
        <input type='text' onChange={(event) => this.inputTextChangeHandler(event)} />
        <p>{textLength} (<ValidationComponent textLength={textLength} />)</p>
        {charsList}

        <ol>
          <li>{done} Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>{done} Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>{done} Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>{done} Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>{done} Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>{doing} When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
