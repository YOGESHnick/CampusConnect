const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Reference to the User model
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    links: String,
    likes: Number,
    },
 { timestamps: true });

module.exports = mongoose.model("Post", postSchema);
