import React, { useState } from 'react';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'
import './App.css';

const app = () => {
  const [ usernameState, setUsernameState ] = useState(
    {
      username: "Danilo"
    }
  );

  const setUsernameHandler = (event) => {
    setUsernameState({
      username: event.target.value
    })
  };

  return (
    <div className="App">
      <UserInput initialName={usernameState.username} changed={setUsernameHandler} />
      <UserOutput username={usernameState.username} />
    </div>
  );
}

export default app;
