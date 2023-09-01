import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory, IndexRoute } from "react-router";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import App from "./components/App";
import SongCreate from "./components/SongCreate";
import SongList from "./components/songList";

const client = new ApolloClient({});

const Root = () => {
  return (
    // React Router is not set up very well for having some component wrap every single one of its child routes, thats why apollo is outside
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
        </Route>
        <Route path="song/new" component={SongCreate} />
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
