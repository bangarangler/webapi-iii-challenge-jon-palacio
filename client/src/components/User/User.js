import React from "react";
import { Link } from "react-router-dom";
//import UserCard from "../UserCard/UserCard.js";

const user = props => {
  return (
    <React.Fragment>
      <Link to={`/users/${props.id}`}>
        <h2>{props.user.name}</h2>
      </Link>

    </React.Fragment>
  );
};

export default user;
