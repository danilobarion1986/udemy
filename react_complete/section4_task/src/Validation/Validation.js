import React from 'react'

const Validation = (props) => {
  const { textLength } = props;
  const validationMessage = textLength < 5 ? 'Text too short' : 'Text long enough';

  return <span>{validationMessage}</span>
}

export default Validation;
