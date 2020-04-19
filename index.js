// this is the main entry point for our full app
// it serves frontend & provides access to our API
const express = require("express");
const favicon = require("express-favicon");
const cors = require("cors");
const path = require("path");
let mongoose = require("mongoose");
let dbConfig = require("./db");
const port = process.env.PORT || 61224;
const bodyParser = require("body-parser");
const api = require("./language-partner/server/server");
const app = express();
app.use(cors());
app.use(bodyParser.json());

// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// );

// Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log("Database sucessfully connected with mongoose!");
    },
    (error) => {
      console.log("Could not connect to database : " + error);
    }
  );

app.use(async(req, res, next) => {
 await console.log("path", req.method + ": " + req.path);
  next();
});

app.use(favicon(__dirname + "/client/build/favicon.ico"));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "/language-partner/client")));

app.get("/", async(req, res) => {
 await res.sendFile(path.join(__dirname + "/language-partner/client/"+"index.html"));
});

app.use("/", api);

app.listen(port, () =>
  console.log(
    `WEB PAGE listening at http://localhost:${port} \n API EXPLORER listening at http://localhost:${port}/__explorer`
  )
);
