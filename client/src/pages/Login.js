import React from "react";

const Login = () => {
  return (
    <div className="login">
      <div className="form">
        <img src="clg.png" className="clg" alt="clg" />
        <form>
          <img src="logo.png" className="logo" alt="logo" />
          <input type="text" placeholder="Enter Roll.No" />
          <input type="text" placeholder="Enter password" />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
