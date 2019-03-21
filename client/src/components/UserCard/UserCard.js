import React from "react";
import axios from "axios";

class UserCard extends React.Component {
  state = {
    user: []
  };

  componentDidMount() {
    const { id } = this.match.params;
    console.log(this.state.match);
    const user = this.props.users.find(user => `${user.id}` === id);
    this.setState({ user: user });
    this.getUsersPost(id);
  }

  getUsersPost(id) {
    axios
      .get(`http://localhost:4000/api/usersposts/${id}`)
      .then(res => {
        console.log(res);
        this.setState({ user: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return <p>{this.state.user.text}</p>;
  }
}

export default UserCard;
