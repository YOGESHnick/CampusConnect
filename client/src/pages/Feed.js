import React from "react";
import { useLocation } from "react-router-dom";
import {useGetUserId} from '../hooks/useGetUserId';
import axios from "axios";

const Feed = () => {

  const userId=useGetUserId();
    console.log(userId);

  const location = useLocation();
  const { state } = location;

  // Access username and password from state
  const { username, password } = state || {};

  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <p>Username: {username}</p>
      <p>Password: {password}</p>

      <p>This is ur _id : {userId}</p>
    </div>
  );
};

export default Feed;
