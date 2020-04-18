import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

export const client = new ApolloClient({
  uri: "https://test-messaging-app.herokuapp.com/v1/graphql",
});

const AppolloWrapper = ({ children }) => {
  return (
  <ApolloProvider client={client}>
  {children}
  </ApolloProvider>
  );
};

export default  AppolloWrapper ;