const fs = require('fs')

const path = process.argv[2];
const type = '.' + process.argv[3]
;
fs.readdir(path, (err, data)=>{
    if(err) console.log(err);
    data.map(element => {
        if(element.endsWith(type)){
            console.log(element)
        }
    })
})