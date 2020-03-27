const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50
    },
    lastName: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50
    },
    address: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50
    },
    nativeLanguage: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50
    },
    languageToLearn: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50
    },
    phoneNumber: {
      type: Number,
      required: true,
      minlength: 2,
      maxlength: 10
    },
    gender: {
      type: String,
      required: false,
      minlength: 2,
      maxlength: 50
    },
    email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
      unique: true,
      index: true
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
    },
    skill: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 50
    }
  },
  { timestamps: true, }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
