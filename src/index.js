import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import AppoloWrapper from "./appollo";
//import ApolloClient from "apollo-boost";
//import {ApolloProvider } from "@apollo/react-hooks";

//export const client = new ApolloClient({
//  uri: "https://test-messaging-app.herokuapp.com/v1/graphql",
//});

// // or you can use `import gql from 'graphql-tag';` instead

// client
//   .query({
//     query: gql`
//     query {
//    users {
//     id_user
//     name
//     url_profile
//   }
// }
//     `,
//   })
//   .then((result) => console.log(result.data.users));

ReactDOM.render(
  // <ApolloProvider client={client}>
  <AppoloWrapper>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppoloWrapper>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
