const express = require('express')

const app = express()

app.get('/api/users', (req, res) => {
    const users = [
        {id: 1, email: 'blabla@gmail.com', username: 'bla', location: 'brussel', skill: 'biologist'},
        {id: 2, email: 'helloo@hotmail.com', username: 'heloo', location: 'antwerp', skill: 'librarian'},
        {id: 3, email: 'thatisme@yahoo.com', username: 'me', location: 'hasselt', skill: 'IT'}
    ]
    res.json(users)
})

const port = 5000

app.listen(port, () => console.log(`Server started on port ${port}`))