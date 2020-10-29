import React from 'react';
import ReactDOM from 'react-dom';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import ApolloProvider from "./ApolloProvider";


ReactDOM.render(
  ApolloProvider,
  document.getElementById('root')
);

