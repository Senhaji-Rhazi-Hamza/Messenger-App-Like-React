// @flow
import React, { useState } from "react";
import logo from "./logo.svg";
import SignUpLogin from "./components/signUpLogin";
import UserMessagingUI from "./components/messaging";
//import './App.css';

import * as serviceWorker from "./serviceWorker";


function App() {
  const [logedIn, setLogedIn] = useState(false);
  const [idMainUser, setIdMainUser] = useState(1);
  const [idsUsers, setIdsUsers] = useState([0, 1, 2, 3, 4]);

  const logIn = () => {
    setLogedIn(true);
  };
  return (
      <div className="App">
        <header className="App-header"></header>
        {!logedIn && 
        <SignUpLogin logIn={logIn} />}
        {logedIn && (
          <UserMessagingUI idMainUser={idMainUser} idsUsers={idsUsers} />
        )}
      </div>
    // </ApolloProvider>
  );
}

export default App;
