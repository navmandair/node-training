const http = require('http');

const server = http.createServer((req, res) => {
    let url = new URL(req.url, `http://${req.headers.host}`);
    let response = {};
    if(url.pathname == '/api/parsetime'){
        let data = new Date(url.searchParams.get('iso'));
        response = {"hour": data.getHours(), "minute": data.getMinutes(), "second": data.getSeconds()}
    } else if(url.pathname == '/api/unixtime'){
        let data = new Date(url.searchParams.get('iso'));
        response = {"unixtime": data.getTime()}
    } else {
        response = 'Not Supported'
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(response));
    res.end();
})


server.listen(process.argv[2]);