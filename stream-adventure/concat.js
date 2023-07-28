const concat = require('concat-stream')
const {Readable} = require('node:stream')
const readStream = Readable.from(process.stdin);
const concatStream = concat(processConcatedStream)

readStream.pipe(concatStream);

function processConcatedStream(wholeBuffer){
    process.stdout.write(wholeBuffer.reverse().toString());
}
