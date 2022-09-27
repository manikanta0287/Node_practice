const http = require('http');

http.createServer(function(req, res){
    res.write('Server Created Successfully');

    res.end();
    console.log('Server Created Successfully');
}).listen(1234);
console.log('Port is running on 1234!!!!!');