import React, { useState, useEffect } from "react";
import { useGetUserId } from "../hooks/useGetUserId";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import avatar from "../assets/profile.png";
import Navbar from "../components/navbar.js";

// L E F T   B A R

const LeftBar = ({ userId, user }) => {
  return (
    <div className="LeftBar">
      <img src={user?.dp || avatar} alt="img" />
      <p>{user?.name || "USER"}</p>
      <p>{user?.description || "Description"}</p>
      <p>{user?.dept || "Dept"}</p>
    </div>
  );
};

// F E E D   P O S T S  (at the centre)

const NewPost = ({ userId, user }) => {
  const navigate = useNavigate();
  const [description, setDescription] = useState("");

  const postHandler = async (event) => {
    // event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/posts", {
        userId:userId,
        desc:description,
      });
      navigate("/feed");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="NewPost">
      <img src={user?.dp || avatar} alt="img" />
      <div>
        <form onSubmit={postHandler}>
          {/* <img src={user?.dp || avatar} alt="img" /> */}
          <input type="text" placeholder="Share your thoughts" value={description} onChange={(event) => setDescription(event.target.value)} />
          <button>Post</button>
        </form>
      </div>
    </div>
  );
};

const Posts = () => {
  return (
    <div className="Posts">
      <h1>Posts PostsPosts PostsPosts PostsPosts PostsPosts</h1>
    </div>
  );
};

const QuickAccess = () => {
  return (
    <div className="QuickAccess">
      <h3>Quick Links</h3>
      <a href="#">Portal</a>
      <a href="#">Clg</a>
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
        const response = await axios.get(
          `http://localhost:8080/api/auth/user/${userId}`
        );
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
    <div className="feed">
      <Navbar />
      <div className="Feed">
        <LeftBar userId={userId} user={user} />
        <div className="center">
          <NewPost userId={userId} user={user} />
          <Posts />
        </div>
        <QuickAccess />
      </div>
    </div>
  );
};

export default Feed;
