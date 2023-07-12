const http = require('http');


http.get(process.argv[2]).on('data', console.log).on('error', console.error);