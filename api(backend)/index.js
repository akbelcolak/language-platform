const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send({ wow: 'it works' });
});

module.exports = router;