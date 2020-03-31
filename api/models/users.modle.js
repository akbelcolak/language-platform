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
    location: {
      type: String,
      required: true,
    },
    nativeLanguage: {
      type: String,
      required: true,
    
    },
    languageToLearn: {
      type: String,
      required: true,
     
    },
    phoneNumber: {
      type: Number,
      required: true,
      minlength: 2,
      maxlength: 10,
   
    },
    Gender: {
      type: String,
      required: true,
    
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
  
    }
  },
  { timestamps: true, }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
