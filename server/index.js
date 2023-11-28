const express = require('express');
const mongoose = require("mongoose");
// const dotenv = require("dotenv");
require('dotenv').config();
const cors = require('cors');
const authRoute = require("./routes/auth");
const notesRoute = require("./routes/posts");
const passport = require("passport");
const cookieSession = require("cookie-session");
const session = require('express-session');
const passportStrategy = require("./passport");


const app = express();
app.use(express.json());
app.use(cors());

app.use(
	session({
	  secret: 'your-secret-key',
	  resave: false,
	  saveUninitialized: true,
	})
  );
  
app.use(passport.initialize());
app.use(passport.session());
app.use(
	cors({
		origin: "http://localhost:3000",
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	})
);

/// L O G I N   H A N D L E R 
app.use("/api/auth", authRoute);

/// P O S T  S   H A N D L E R 
app.use("/api/posts" ,notesRoute);



mongoose.connect(
    "mongodb://localhost:27017/blog",
    // { useNewUrlParser:true,useUnifiedTopology:true}
    ).then(console.log("Connected to MongoDB !")
);

app.listen(8080, ()=>{
    console.log("Server started at port 8080");
})

