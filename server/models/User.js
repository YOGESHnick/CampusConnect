const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name:String,
    dp:String,
    dept:String,
    description:String,
    link:String,
    experience:{
        role:String,
        company:String,
        desc:String,
    },
    graduation_year:String,
    friends:{
        type:Array,
        default:[],
    },
    recommendations:{
        type:Array,
        default:[],
    },
    skills:{
        type:Array,
        default:[],
    },
    username:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        min:8,
    },
  },
    { timestamps:true }
);

module.exports = mongoose.model("User",UserSchema);