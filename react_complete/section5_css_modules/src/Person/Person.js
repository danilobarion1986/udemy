import React from 'react';
import './Person.css' // Normal CSS styles

// When using class-based components, its "this.props" to use it
const person = (props) => {
  const { name, age, children, click, changed } = props

  return (
    <div className='Person'>
      <p onClick={click}>I'm {name} and I'm {age} years old.</p>
      <p>{children}</p>
      <input type='text' onChange={changed} value={name} />
    </div>
  )
}

export default person;
