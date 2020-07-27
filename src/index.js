import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./graphql";

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);
