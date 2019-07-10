import React from 'react';

// When using class-based components, its "this.props" to use it
const person = (props) => {
  const { name, age, children } = props

  return (
    <div>
      <p onClick={props.click}>I'm {name} and I'm {age} years old.</p>
      {children &&
        <ul>
          <li>{children}</li>
        </ul>}
    </div>
  )
}

export default person;
