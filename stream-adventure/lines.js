const through = require('through2');

let counter = 0;

const write = (buffer, encoding, callback) =>{
    counter++
    if(counter % 2) {
        callback(null, buffer.toString().toLowerCase());
    } else {
        callback(null, buffer.toString().toUpperCase());
    }
    
}

const stream = through(write);

process.stdin.pipe(stream).pipe(process.stdout);