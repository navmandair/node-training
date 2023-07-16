const filterDir = require('./mymodule');

const path = process.argv[2];
const type = process.argv[3]
filterDir(path, type, (err, data)=> {
    if(err) console.log(err);
    data.map(item => console.log(item));
})