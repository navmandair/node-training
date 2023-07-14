const http = require('http');

let data = [];

http.get(process.argv[2], (res)=> {
    res.on('data', (chunk)=> {
        data.push(chunk.toString())
    });
    res.on('error', console.error);
    res.on('end', () => {
        console.log(data.join('').length);
        console.log(data.join(''));
    })
})