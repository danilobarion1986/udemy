import React from 'react'

const ValidationComponent = (props) => {
  const { textLength } = props;
  const validationMessage = textLength < 5 ? 'Text too short' : 'Text long enough';

  return <span>{validationMessage}</span>
}

export default ValidationComponent;
