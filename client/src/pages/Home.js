import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const { state } = location;

  // Access username and password from state
  const { username, password } = state || {};

  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <p>Username: {username}</p>
      <p>Password: {password}</p>
    </div>
  );
};

export default Home;
