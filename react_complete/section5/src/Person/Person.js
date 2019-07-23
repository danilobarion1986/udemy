import React from 'react';
import './Person.css' // Normal CSS styles
import Radium from 'radium'

// When using class-based components, its "this.props" to use it
const person = (props) => {
  const { name, age, children, click, changed } = props
  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    },
  };

  return (
    <div className='Person' style={style}>
      <p onClick={click}>I'm {name} and I'm {age} years old.</p>
      <p>{children}</p>
      <input type='text' onChange={changed} value={name} />
    </div>
  )
}

export default Radium(person);
