const express = require('express')
const http = require('http')
const { Server } = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: '*'
    },
   

})


io.on('connection', (socket) => {
    socket.on('chat', (payload) => {
        io.emit('chat', payload)

    })
})

server.listen(3000, () => console.log('server is connected'))