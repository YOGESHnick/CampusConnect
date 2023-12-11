import React, { useState } from 'react';

const Register = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;

    // For the skills field, split the comma-separated string into an array
    if (name === 'skills') {
      setFormData((prevData) => ({
        ...prevData,
        skills: value.split(',').map((skill) => skill.trim()),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="register">
      {/* <img src="clg.png" alt="" /> */}
      <form onSubmit={handleSubmit}>
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
