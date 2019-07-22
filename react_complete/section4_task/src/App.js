import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {
  initialText = 'Initial text';
  initialTextLength = this.initialText.length;

  state = {
    inputText: {
      value: this.initialText,
      length: this.initialTextLength,
    }
  };

  inputChangedHandler = (event) => {
    const inputTextUpdated = event.target.value;
    const stateUpdated = this.state;
    stateUpdated.inputText.value = inputTextUpdated;
    stateUpdated.inputText.length = inputTextUpdated.length;

    this.setState(stateUpdated);
  };

  charClickedHandler = (charIndex) => {
    const text = this.state.inputText.value.split('');
    text.splice(charIndex, 1);
    const updatedText = text.join('');
    const stateUpdated = this.state;
    stateUpdated.inputText.value = updatedText;
    stateUpdated.inputText.length = updatedText.length;

    this.setState(stateUpdated);
  };

  render() {
    const styleDone = { color: 'green' }
    const styleDoing = { color: 'blue' }
    const textLength = this.state.inputText.length;
    const textChars = this.state.inputText.value.split('');

    const charList = textChars.map((char, index) => {
      return (
        <Char
          key={char + index}
          letter={char}
          click={() => this.charClickedHandler(index)} />
      )
    });
    const done = <span style={styleDone}>Done!</span>;
    const doing = <span style={styleDoing}>Doing!</span>;

    return (
      <div className="App">
        <input
          type='text'
          onChange={(event) => this.inputChangedHandler(event)}
          value={this.state.inputText.value} />
        <p>{this.state.inputText.value}</p>
        <p>{textLength} (<Validation textLength={textLength} />)</p>
        {charList}

        <ol>
          <li>{done} Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>{done} Create a new component (=> Validation) which receives the text length as a prop</li>
          <li>{done} Inside the Validation, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>{done} Create another component (=> Char) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>{done} Render a list of Chars where each Char receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>{doing} When you click a Char, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      </div>
    );
  }
}

export default App;
