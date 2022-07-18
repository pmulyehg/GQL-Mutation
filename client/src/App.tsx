import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, useMutation } from '@apollo/client'
import './App.css';
import CreateUser from './Components/CreateUser';
import ListAllUsers from './Components/ListUsers';
import UpdatePassword from './Components/UpdatePassword';

function App() {

  const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <>
      <ApolloProvider client={client}>
        <CreateUser />
        <ListAllUsers />
        <UpdatePassword />
      </ApolloProvider>
    </>
  );
}

export default App;
