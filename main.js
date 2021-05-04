// console.log('1')
// setTimeout(() => console.log('2'), 500) 
// console.log('3')

var http = require('http')
http.createServer((req,res) => {
    console.log('request url', req.url);
    if (req.url === "/") {
        res.end('home')
    } else {
        res.writeHead(404);
        res.end(http.STATUS_CODES[404])
    }
    res.end('hello world')
}).listen(3000)