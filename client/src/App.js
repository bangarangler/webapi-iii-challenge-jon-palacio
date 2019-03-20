import React, { Component } from "react";
import axios from "axios";

import styles from "./App.module.scss";
import Users from "./components/Users/Users.js";

class App extends Component {
  state = {
    users: []
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
      <div className={styles.App}>
        <Users users={this.state.users} />
      </div>
    );
  }
}

export default App;
