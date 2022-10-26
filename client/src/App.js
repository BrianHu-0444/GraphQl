import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./theme.css";
import "./App.css";
import logo from "./spacex-logo-light.png";
import Posts from "./components/Posts";
import Post from "./components/Post";
import {PostAdd} from "./components/PostAdd.js";

const client = new ApolloClient({
  uri: "/graphql",
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            <img src={logo} id="logo" />
            <Switch>
              <Route exact path="/" component={Posts} />
              <Route exact path="/post/add">
                <PostAdd />
              </Route>
              <Route exact path="/post/:id" component={Post} />
            </Switch>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
