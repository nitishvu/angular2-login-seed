module.exports = function (io) {
  //var messages = [];
 
  io.on('connection', function (socket) {
    // Connected individual here
    //socket.emit('messages', messages.slice(messages.length-5, messages.length));
    
    socket.on('send-message', function (newMessage) {
      socket.emit('new-message', newMessage);
      socket.broadcast.emit('new-message', newMessage);
    });
    
  });
}