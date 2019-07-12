import React from 'react';

const userInput = (props) => {
  const { initialName, changed } = props;

  const style = {
    backgroundColor: "white",
    color: "blue",
    boxShadow: "0 2px 3px",
    padding: "16px",
    width: "80%",
    margin: "16px auto"
  };

  return(
    <input style={style} type="text" onChange={changed} value={initialName} />
  )
}

export default userInput;

