const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('HomePage')
    } else
    if(req.url === '/about'){
        res.end('ABout')
    } else
    res.end(`<a href="/">back</a>`)
})

server.listen(1111);