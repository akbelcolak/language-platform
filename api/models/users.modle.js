
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50
    },
    email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
      unique: true
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 1024
    },
    birthdate: {
      type: Date,
      require: true,
      trim: true
    }
  },
  { timestamps: true }
);


const User = mongoose.model("User", userSchema);


exports.User = User;

