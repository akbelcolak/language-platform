// our main API router will be here defined
// require and use our routes and logic here
// server infrastructure will go in the main index.js

const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send({ wow: 'it works' });
});

app.get('/test', async (req, res) => {
  res.json({ message: 'pass!' })
})

module.exports = app;