import React from "react";
import { Link, Route } from "react-router-dom";
import UserCard from "../UserCard/UserCard.js";

const user = props => {
  return (
    <React.Fragment>
      <Link to={`http://localhost:4000/api/usersposts/${props.user.id}`}>
        <h2>{props.user.name}</h2>
      </Link>

      <Route
        path={`http://localhost:4000/api/usersposts/${props.user.id}`}
        render={props => <UserCard {...props} user={props.user} />}
      />
    </React.Fragment>
  );
};

export default user;
