import React from 'react';
import styles from './Person.css' // Normal CSS styles

// When using class-based components, its "this.props" to use it
const person = (props) => {
  const { name, age, children, click, changed } = props
  const rnd = Math.random();

  if (rnd < 0.05) {
    throw new Error( 'Something went wrong!' );
  }

  return (
    <div className={styles.Person}>
      <p onClick={click}>I'm {name} and I'm {age} years old.</p>
      <p>{children}</p>
      <input type='text' onChange={changed} value={name} />
    </div>
  )
}

export default person;
