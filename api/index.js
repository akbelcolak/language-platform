const express = require('express');
const apiRoutes = express.Router();

apiRoutes.get('/', (req, res) => {
  res.send('language platform API');
});
apiRoutes.get('/users', (req, res) => {
  const users = [
    { id: 1, email: 'blabla@gmail.com', username: 'bla', location: 'brussel', skill: 'biologist' },
    { id: 2, email: 'helloo@hotmail.com', username: 'heloo', location: 'antwerp', skill: 'librarian' },
    { id: 3, email: 'thatisme@yahoo.com', username: 'me', location: 'hasselt', skill: 'IT' }
  ]
  res.json(users)
})

module.exports = apiRoutes;
