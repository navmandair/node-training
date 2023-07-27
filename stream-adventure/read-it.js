 const { Readable } = require('stream');

const readable =  Readable.from(process.argv[2]);
readable.pipe(process.stdout)