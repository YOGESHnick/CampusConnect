// import React from "react";
// import {useState} from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";



// const Login = () => {

//   const [username,setUsername]  = useState("");
//   const [password,setPassword]  = useState("");
//   const navigate = useNavigate();

//   const loginHandler = async(event) =>{
//     event.preventDefault();

//     try {
//       const response =  await axios.post("http://localhost:8080/api/auth/login ",{
//           username,
//           password,
//       });
//       console.log(response);
//       navigate("/home");
//   } catch (error) {
//       console.log(error);
//   }
//   }

//   return (
//     <div className="login">
//       <div className="form">
//         <img src="clg.png" className="clg" alt="clg" />
//         <form onSubmit={loginHandler}>
//           <img src="logo.png" className="logo" alt="logo" />
//           <input type="text" placeholder="Enter Roll.No" value={username} onChange={(event)=>setUsername(event.target.value) }/>
//           <input type="text" placeholder="Enter password" value={password} onChange={(event)=>setPassword(event.target.value) } />
//           <button>Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", {
        username,
        password,
      });
      console.log(response);
      console.log(response.data.userToken);
      const token = response.data.userToken;

      // Store the token in localStorage
      localStorage.setItem('userToken', token);

      // Redirect to the home page or perform other actions
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <div className="form">
        <img src="clg.png" className="clg" alt="clg" />
        <form onSubmit={loginHandler}>
          <img src="logo.png" className="logo" alt="logo" />
          <input type="text" placeholder="Enter Roll.No" value={username} onChange={(event) => setUsername(event.target.value)} />
          <input type="text" placeholder="Enter password" value={password} onChange={(event) => setPassword(event.target.value)} />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
