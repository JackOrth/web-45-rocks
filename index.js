require('dotenv').config() // this allows to "inject"
const PORT = process.env.PORT || 5000
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const server = express()

server.use(express.json()) //teaches express to parse req.body
server.use(cors())
server.use(helmet())

server.get("/", (req, res)=>{
    res.send(`
    <h1>Web 45 Is Awesome!</h1>
    `)
})

server.use('*', (req,res)=>{
    res.json({
        message: "web 45 is so awesome"
    })
})

server.listen(PORT, ()=>{ // heroku machine uses a different port
    console.log(`listening on ${PORT}`)
})
