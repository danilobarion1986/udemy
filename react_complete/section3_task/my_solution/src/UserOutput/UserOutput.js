import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
  const { username } = props;

  return(
    <div className="UserOutput">
      <p>{username}</p>
      <p>Paragraph Two</p>
    </div>
  )
}

export default userOutput;

