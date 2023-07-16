const net = require('net')

const server = net.createServer(function (socket) { 
    let now = new Date(); 
    socket.write(now.toISOString().replace('T', ' ').substring(0, 16));
    socket.write("\n");
    socket.destroy();
})

server.listen(process.argv[2]);