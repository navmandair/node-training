const { Readable, Writable } = require('stream');

const writable = new Writable();
writable._write = (chunk, encoding, next) => {
    console.log("writing: " + chunk.toString())
    next()
}

const readable = Readable.from(process.stdin);
readable.pipe(writable);