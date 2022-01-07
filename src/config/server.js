const port = 3003

const express = require('express')
const cors = require('cors')
const server = express()
const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://127.0.0.1/web_app')
    .then(() => {
        console.log('Connectd to DB')
    }).catch(e => console.log(e))
    
server.use(cors())
server.use(express.urlencoded({ extended: true }))
server.use(express.json())

server.use('/api', require('./routes'))

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

module.exports = server