import React from 'react'

const Char = (props) => {
  const { letter, click } = props;
  const style = {
    display: 'inline-block',
    padding: '16px',
    margin: '16px',
    border: '1px solid black',
    textAlign: 'center'
  }

  return <div onClick={click} style={style}>{letter}</div>
}

export default Char;
