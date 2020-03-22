// define your main API router here
//  just require and use your routes and logic here
//  server infrastructure will go in the main index.js

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send({ wow: 'it works' });
});

module.exports = router;