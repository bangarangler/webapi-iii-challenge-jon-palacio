import React from "react";
import { Link, Route } from "react-router-dom";
import UserCard from "../UserCard/UserCard.js";

const user = props => {
  return (
    <React.Fragment>
      <Link to={`/${props.user.id}`}>
        <h2>{props.user.name}</h2>
      </Link>

      <Route
        exact
        path="http://localhost:4000/api/posts/:id"
        render={props => <UserCard {...props} user={props.user} />}
      />
    </React.Fragment>
  );
};

export default user;
