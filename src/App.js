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
  const [idsUsers, setIdsUsers] = useState([1, 2, 3, 4]);
  const [idMainFriendUser, setIdMainFriendUser] = useState(2);



  const logIn = () => {
    setLogedIn(true);
  };

  const updateIdMainFriendUser = (id:number) => {
   setIdMainFriendUser(id)
   console.log("clicked on id : ", id)
  }
  return (
      <div className="App">
        <header className="App-header"></header>
        {!logedIn && 
        <SignUpLogin logIn={logIn} />}
        {logedIn && (
          <UserMessagingUI idMainUser={idMainUser} idMainFriendUser = {idMainFriendUser} idsUsers={idsUsers} updateIdMainFriendUser = {updateIdMainFriendUser} />
        )}
      </div>
    // </ApolloProvider>
  );
}

export default App;
