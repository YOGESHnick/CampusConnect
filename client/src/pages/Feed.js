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
  const [img, setImg] = useState("");

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setImg(base64);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postData = {
        userId: userId,
        desc: description,
        image: img,
      };

      const response = await axios.post(
        "http://localhost:8080/api/posts",
        postData
      );

      // Clear the form after successful submission
      setDescription("");
      setImg("");

      console.log(response);
      navigate("/feed");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="NewPost">
      <img src={user?.dp || avatar} alt="img" />
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Share your thoughts"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <input
            type="file"
            accept=".jpeg, .png, .jpg"
            onChange={(e) => handleFileUpload(e)}
          />
          <a href="/article">
            <button>Article</button>
          </a>
          <button type="submit">Post</button>
        </form>
      </div>
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
  const [posts, setPosts] = useState();
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

    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/posts/allPosts"
        );
        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
    fetchPosts();
  }, [userId]);

  useEffect(() => {
    console.log("Updated user:", user);
    console.log("Posts:", posts);
  }, [user, posts]);

  const Posts = ({ posts }) => {
    return (
      <div className="Posts">
        {posts?.map((post) => (
          <div className="Post" key={post._id}>
            <img className="postImage" src={post.image} alt="" />
            <p>{post.desc}</p>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="feed">
      <Navbar />
      <div className="Feed">
        <LeftBar userId={userId} user={user} />
        <div className="center">
          <NewPost userId={userId} user={user} />
          <hr />
          <Posts posts={posts} />
        </div>
        <QuickAccess />
      </div>
    </div>
  );
};

export default Feed;

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
