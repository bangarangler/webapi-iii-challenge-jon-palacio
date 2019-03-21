import React from "react";
import User from "../User/User.js";

const users = props => {
  return props.users.map(user => {
    return <User key={user.id} user={user} id={user.id} />;
  });
};

export default users;
