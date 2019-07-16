const express = require('express');

const router = require('./data/Router')
const server = express();
server.use(express.json());

server.use('/api/accounts', router)

server.get('/', (req, res) =>{
    res.send(`<h1>My first DB</h1>`)
})

module.exports = server;