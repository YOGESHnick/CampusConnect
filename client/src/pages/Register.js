import React, { useState,useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import avatar from '../assets/profile.png'

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    dp: '',
    dept: '',
    description: '',
    link: '',
    experience: {
      role: '',
      company: '',
      desc: '',
    },
    graduation_year: '',
    friends: [],
    recommendations: [],
    skills: [],
    username: '',
    password: '',
  });
  const [img, setImg] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;

      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedFormData = { ...formData };
    updatedFormData.dp = img;
    console.log(updatedFormData);
    // console.log(formData);
    try {
      const response = await axios.post("http://localhost:8080/api/auth/register", updatedFormData);
      console.log(response);
      navigate("/feed");
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setImg(base64);
    // console.log(img);
  };
  useEffect(() => {
    // console.log(img);
  }, [img]); 
  

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      <p>Join the community</p>

      <label htmlFor="file-upload" className='custom-file-upload'>
          <img src={img||avatar} alt="" />
        </label>
      <input 
          type="file"
          lable="Image"
          name="myFile"
          id='file-upload'
          accept='.jpeg, .png, .jpg'
          onChange={(e) => handleFileUpload(e)}
         />
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <br />

        {/* <label>
          Profile Picture URL:
          <input type="text" name="dp" value={formData.dp} onChange={handleChange} required />
        </label>
        <br /> */}

        <label>
          Department:
          <input type="text" name="dept" value={formData.dept} onChange={handleChange} required />
        </label>
        <br />

        {/* <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Link(Portfolio):
          <input type="text" name="link" value={formData.link} onChange={handleChange} required />
        </label>
        <br /> */}

        {/* <label>
          Experience Role:
          <input
            type="text"
            name="experience.role"
            value={formData.experience.role}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Experience Company:
          <input
            type="text"
            name="experience.company"
            value={formData.experience.company}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Experience Description:
          <textarea
            name="experience.desc"
            value={formData.experience.desc}
            onChange={handleChange}
            required
          />
        </label>
        <br /> */}

        <label>
          Graduation Year:
          <input
            className="reg"
            type="text"
            name="graduation_year"
            value={formData.graduation_year}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        {/* <label>
          Friends (comma-separated usernames):
          <input
            type="text"
            name="friends"
            value={formData.friends.join(', ')}
            onChange={handleChange}
          />
        </label>
        <br /> */}

        {/* <label>
          Recommendations (comma-separated usernames):
          <input
            type="text"
            name="recommendations"
            value={formData.recommendations.join(', ')}
            onChange={handleChange}
          />
        </label>
        <br /> */}

        {/* <label>
          Skills (comma-separated):
          <input
            type="text"
            name="skills"
            value={formData.skills.join(', ')}
            onChange={handleChange}
            required
          />
        </label>
        <br /> */}

        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <br />

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength="8"
          />
        </label>
        <br />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

function convertToBase64(file){
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result)
    };
    fileReader.onerror = (error) => {
      reject(error)
    }
  })
}