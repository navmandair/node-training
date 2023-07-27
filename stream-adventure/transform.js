const through = require('through2');

const write = (buffer, encoding, callback) =>{
    callback(null, buffer.toString().toUpperCase());
}

const stream = through(write);

process.stdin.pipe(stream).pipe(process.stdout);