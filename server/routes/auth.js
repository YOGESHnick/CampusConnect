const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// R E G I S T E R 
router.post("/register", async(req,res)=>{

    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt);

        const newUser = new User({
                username:req.body.username,
                // email:req.body.email,
                password:hashedPassword,
            });

        const user = await newUser.save();
        res.status(200).json(user);
    }catch(error){
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

        return res.status(200).json(user);

    } catch (error) {
        return res.status(500).json(error);
    }
});


module.exports=router;