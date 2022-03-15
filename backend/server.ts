var express = require('express')
var cors = require('cors')
var app = express();
var http = require('http')
const socket = require('socket.io');

app.use(cors({
    "origin": "*",
    "methods": "*",
    // "allowed": "*",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}))
const httpServer = http.createServer(app)
const io = new socket.Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["*"]
    }
})
httpServer.listen(5000)


// console.log(io)

io.on('connection', (socket) => {
    console.log('new connection detected', socket.id);


    socket.on('message', (message) => {
        console.log("message from ", message.user.nome)
        io.emit('message', message)
    })


    socket.on('error', (err) => {
        io.emit('erro', err)
    })
    socket.on('disconnect', (socket) => {
        console.log('disconectado', socket.id)
        io.emit('message', socket)
    })
})


console.log('listening on port', 5000)