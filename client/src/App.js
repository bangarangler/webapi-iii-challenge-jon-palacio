import React, { Component } from "react";
import axios from "axios";
import { Route } from 'react-router-dom'

import styles from "./App.module.scss";
import Users from "./components/Users/Users.js";
import UserCard from './components/UserCard/UserCard.js'

class App extends Component {
  state = {
    users: [],
    posts: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/users")
      .then(res => {
        console.log(res);
        this.setState({ users: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <React.Fragment>
      <div className={styles.App}>
        <Users users={this.state.users} />
      </div>
      <Route
        exact
        path="/users/:id"
        render={props => <UserCard {...props} users={this.state.users} />}
      />
        </React.Fragment>
    );
  }
}

export default App;
