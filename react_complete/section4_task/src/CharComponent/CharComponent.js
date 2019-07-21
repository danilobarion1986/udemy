import React from 'react'

const CharComponent = (props) => {
  const { letter, click } = props;
  const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black',
  }

  return <p onClick={click} style={style}>{letter}</p>
}

export default CharComponent;
