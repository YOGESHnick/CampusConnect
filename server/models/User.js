const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dp: {
      type: String,
      default: "",
    },
    dept: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "",
    },
    experience: {
      role: {
        type: String,
        default: "",
      },
      company: {
        type: String,
        default: "",
      },
      desc: {
        type: String,
        default: "",
      },
    },
    graduation_year: {
      type: String,
      default: "",
    },
    friends: {
      type: Array,
      default: [],
    },
    recommendations: {
      type: Array,
      default: [],
    },
    skills: {
      type: Array,
      default: [],
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      min: 8,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
