const fs = require('fs');
const http = require('http');



const server = http.createServer((req, res) => {
    console.log('Server Created', req);
    res.end('Hello Server created');
});

server.listen(1212, () => {
    console.log('Port connected at 1212!!!!');
});

