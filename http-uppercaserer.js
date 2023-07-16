const http = require('http');


const server = http.createServer((req, res)=> {
    if(req.method !== 'POST') return res.end('Only POST request accepted')

    req.on('data', (chunk)=> {
        let str = chunk.toString().toUpperCase();
        res.write(str)
    })
});

server.listen(process.argv[2])