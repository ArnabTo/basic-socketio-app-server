const app = require('express')();
const { createServer } = require('http')
const { Server } = require('socket.io')


const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
  }
})

io.on('connection', (socket)=>{
  console.log('This is socket io', socket)

  socket.on('chat', (payload)=>{
    console.log('paylaod:', payload);
    io.emit('chat', payload)
  })
})

httpServer.listen(3000, ()=>{
  console.log('server is running on', 3000)
})


