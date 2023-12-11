const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// R E G I S T E R 
router.post("/register", async (req, res) => {
  // try {
  //   const salt = await bcrypt.genSalt(10);
  //   const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //   const newUser = new User({
  //     name:
  //     dp:
  //     dept:
  //     description:
  //     link:
  //     experience.role:
  //     experience.company:
  //     experience.desc:
  //     graduation_year:

  //     username: req.body.username,
  //     // email:req.body.email,
  //     password: hashedPassword,
  //   });

  //   const user = await newUser.save();
  //   // res.status(200).json(user);
  //   res.status(201).json({ message: "User registered successfully" });
  // } 
  try {

    const { name, dp, dept, description, link, experience, graduation_year, friends, recommendations, skills, username, password } = req.body;

    // Check if the username is already taken
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user 
    const newUser = new User({
      name,
      dp,
      dept,
      description,
      link,
      experience,
      graduation_year,
      friends,
      recommendations,
      skills,
      username,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  }catch (error) {
    res.status(500).json(error);
  }
});

// L O G I N 
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return res.status(404).send("User not found!");
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);

    if (!validPassword) {
      return res.status(400).json("Wrong password!");
    }

    const userToken = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });
    // localStorage.setItem('userToken',userToken); 
    return res.status(200).json({ user, userToken });

  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

module.exports = router;
