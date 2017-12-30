import "./index.css";

import React from "react";
import { render } from "react-dom";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { link } from "./graphql/link";
import App from "./App";
import ErrorPage from "./ErrorPage";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

render(
  <ApolloProvider client={client}>
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/error">ErrorPage</Link></li>
        </ul>

        <hr/>

        <Route exact path="/" component={App}/>
        <Route path="/error" component={ErrorPage}/>
      </div>
    </Router>

  </ApolloProvider>,
  document.getElementById("root")
);
