"use strict";

const _ = require("lodash");
const express = require("express");
const router = express.Router();

module.exports = function (User) {
  // app.models.user.find((err, result) => {

  router.post("/api/users", async (req, res) => {
    let user = await models.User.findOne({ email: req.body.email }, (err) => {
      if (err) {
        console.log("there is an error", err);
      }
    });

    user = new User(_.pick(req.body, ["email", "password"]));

    await user.save();

    const token = user.generateAuthToken();
    res
      .header("x-auth-token", token)
      .header("access-control-expose-headers", "x-auth-token")
      .send(_.pick(user, ["id", "name", "email"]));
  });
};
