import React, { useState, useEffect } from "react";
import { useGetUserId } from '../hooks/useGetUserId';
import axios from "axios";
import avatar from '../assets/profile.png'

// L E F T   B A R 
const LeftBar = ({userId,user}) => {
  return (
    <div className="LeftBar">
      {/* <h4>Hi {userId} </h4> */}
      <img src={user?.dp || avatar} alt="img" />
      <p>{user?.name || 'USER'}</p>
      {/* <p>This is ur _id: {userId}</p> */}
    </div>
  );
};

// F E E D   P O S T S  (at the centre)

const Posts = () => {
  return (
    <div>
      <h1>Posts</h1>
    </div>
  );
};

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
    <div className="Feed">
      {/* <p>Username: {user?.name || 'USER'}</p>
      <img src={user?.dp || avatar} alt="img" />
      <p>This is ur _id: {userId}</p> */}
      <LeftBar userId={userId} user={user} />
      <Posts />
    </div>
  );
};

export default Feed;