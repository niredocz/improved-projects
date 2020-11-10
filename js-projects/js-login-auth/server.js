const express = require('express');
const app = express();

const users = [
    {
        id: 0,
        name: "John"
    },
    {
        id: 1,
        name: "Paul"
    }
]
app.get('/users', (req, res) => {
    res.json(users)
})

app.post('/users', (req, res) => {
    res.json(usersx)
})

app.listen(3000)