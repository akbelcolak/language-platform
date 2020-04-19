// Copyright IBM Corp. 2016,2019. All Rights Reserved.
// Node module: loopback-workspace
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

"use strict";

const loopback = require("loopback");
const boot = require("loopback-boot");
const app = (module.exports = loopback());
const path =require('path')
// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.

boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module) app.start();
});

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit("started");
    const baseUrl = app.get("url").replace(/\/$/, "");
    console.log("Web server listening at: %s", baseUrl);
    if (app.get("loopback-component-explorer")) {
      const explorerPath = app.get("loopback-component-explorer").mountPath;
      console.log("Browse your REST API at %s%s", baseUrl, explorerPath);
    }
  });
};

console.log("keys", Object.keys(app.models));

app.models.user.afterRemote("create", (ctx, user, next) => {
  console.log("get new User :", user);
  app.models.Profile.create(
    {
      email: user.email,
      password: user.password,
      userId: user.id
    },
    (err, result) => {
      if (!err && result) {
        console.log("Created New Profile!", result);
      } else {
        console.log("There is an error", err);
      }
      next();
    }
  );
});

app.models.Role.find({ where: { name: "admin" } }, (err, role) => {
  if (!err && role) {
    console.log("No error , role is ", role);
    if (role.length === 0) {
      app.models.Role.create({ name: "admin" }, (err2, result) => {
        if (!err2 && result) {
          app.models.user.findOne((userError, user) => {
            if (!userError && user) {
              result.principals.create(
                {
                  principalsType: app.models.RoleMapping.USER,
                  principalsId: user.id
                },
                (err3, principal) => {
                  console.log("err", err3, "principal", principal);
                }
              );
            }
          });
        }
      });
    }
  }
});

app.models.Role.find({ where: { name: "editor" } }, (err, roles) => {
  if (!err && roles) {
    if (roles.length === 0) {
      app.models.Role.create(
        {
          name: "editor"
        },
        (creationErr, result) => {
          console.log("err", creationErr, "result", result);
        }
      );
    }
  }
});

// app.use(loopback.static(path.join(__dirname, "../client")));
// app.use(loopback.static(path.resolve(__dirname, '../client/')));
// app.use(favicon(__dirname + "../client/favicon.ico"));
// the __dirname is the current directory from where the script is running
app.use(loopback.static(__dirname));
app.use(loopback.static(path.join(__dirname, "../client")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "../client/"+"index.html"));
});