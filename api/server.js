// our main API router will be here defined
// require and use our routes and logic here
// server infrastructure will go in the main index.js

const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send({ wow: 'it works' });
});

/**
* Just a simple test endpoint to demo how to test with Jest
* Ref: https://devhints.io/jest
**/
app.get('/test', async (req, res) => {
  res.json({ message: 'pass!' })
})

module.exports = app;