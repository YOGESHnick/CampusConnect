// import React, { useState,useEffect } from "react";
// // import { useLocation } from "react-router-dom";
// import {useGetUserId} from '../hooks/useGetUserId';
// import axios from "axios";

// const Feed = () => {

//   const [user,setUser] = useState();
//   const userId=useGetUserId();
//     // console.log(userId);

//     useEffect( ()=>{
//       const fetchUser =  async ()=>{
//           try {
//               const response = await axios.get(`http://localhost:8080/api/auth/user/${userId}`);
//               setUser(response.data);
//               console.log(user);
//           } catch (error) {
//               console.log(error);
//           }
//       };
//       fetchUser();
//   },[]);

//   // const location = useLocation();
//   // const { state } = location;

//   // Access username and password from state
//   // const { username, password } = state || {};

//   return (
//     <div>
//       <h2>Welcome to the Home Page</h2>
//       {/* <p>Username: {username}</p>
//       <p>Password: {password}</p> */}
//       <img src="" alt="img" />  
//       {/* use USEEFFECT, use the user._id to get image and get all user details */}

//       <p>This is ur _id : {userId}</p>
//     </div>
//   );
// };

// export default Feed;


import React, { useState, useEffect } from "react";
import { useGetUserId } from '../hooks/useGetUserId';
import axios from "axios";
import avatar from '../assets/profile.png'

const Feed = () => {
  const [user, setUser] = useState();
  const userId = useGetUserId();
  console.log(userId);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/auth/user/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, [userId]); 

  useEffect(() => {
    console.log("Updated user:", user);
  }, [user]); 

  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <p>Username: {user?.name || 'USER'}</p>
      <img src={user?.dp || avatar} alt="img" />
      <p>This is ur _id: {userId}</p>
    </div>
  );
};

export default Feed;
