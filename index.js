var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

//Page initially displayed to client
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

//
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected')
  });
  socket.on('chat message', (msg) => {
    console.log('message: ' +msg);
    io.emit('chat message', msg);
  });
});

//Port server is running on -- Change to 80 on production
http.listen(3000, () => {
  console.log('listening on *:3000');
});
