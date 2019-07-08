import React from 'react';

// When using class-based components, its "this.props" to use it
const person = (props) => {
  return (
    <div>
      <p>I'm {props.name} and I'm {props.age} years old.</p>
      {props.children &&
        <ul>
          <li>{props.children}</li>
        </ul>}
    </div>
  )
}

export default person;
