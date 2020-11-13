const path = require('path')
const express = require('express')
const request = require ('superagent')


const home = require('./routes/home')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))


 server.use('/api/v1/home', home)

 //server.get('/api/v1/quote',(req,res) => {
    // request
     //  .get('https://docs.tronalddump.io/#tag-quote-source')
     //  .then(response => res.json (response.body))

// })


module.exports = server
