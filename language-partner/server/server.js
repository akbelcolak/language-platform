// Copyright IBM Corp. 2016,2019. All Rights Reserved.
// Node module: loopback-workspace
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

const loopback = require("loopback");
const boot = require("loopback-boot");
var path = require('path');
var https = require('https');
var sslConfig = require('./ssl-config');
//...
var options = {
  key: sslConfig.privateKey,
  cert: sslConfig.certificate
};
//...




const app = (module.exports = loopback());
app.start = function() {
  // 2. Get the FQPN of the index file in client
  var staticFolder = path.dirname(
    path.resolve(__dirname, '..', app.get('indexFile'))
  );
  // 3. Set staticFolder as static in the server
  app.use(loopback.static(staticFolder));
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};
// app.start = function() {
//   // start the web server
//   return app.listen(app.get('port'), function() {
//     const baseUrl = app.get("url").replace(/\/$/, "");
//     app.emit('started', baseUrl);
//     console.log('LoopBack server listening @ %s%s', baseUrl, '/');

//   return app.listen(function() {
  
//   });
//     // app.emit("started");
//     // const baseUrl = app.get("url").replace(/\/$/, "");
//     // console.log("Web server listening at: %s", baseUrl);
//     // if (app.get("loopback-component-explorer")) {
//     //   const explorerPath = app.get("loopback-component-explorer").mountPath;
//     //   console.log("Browse your REST API at %s%s", baseUrl, explorerPath);
//     // }
//   });
// };

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
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
