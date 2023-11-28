const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    imageURL:{
        type:String,
    },
    },
    { timestamps:true }
);

module.exports = mongoose.model("Post",postSchema);