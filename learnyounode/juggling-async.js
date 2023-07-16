const http = require('http');

var data = []

const printData = () => data.forEach((str) => console.log(str));


for(let i = 2; i < process.argv.length; i++){
    http.get(process.argv[i], (res)=> {
        let str = ''
        res.on('data', (chunk)=> {
            str += chunk.toString()
        })

        res.on('end', () => {
            data[i] = str;
            if(i == process.argv.length-1 && data.length == process.argv.length) {
                printData()
            }
        })
    })
}

