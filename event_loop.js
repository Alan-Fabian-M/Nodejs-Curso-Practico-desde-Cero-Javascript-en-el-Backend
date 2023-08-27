const http = require('http')

const server = http.createServer((req, res)=>{
    if (req.url === '/') {
        res.write('Welcome to the server')
        return res.end
    }

    if (req.url === '/about') {
        return res.end("About page")
    }

    res.end('not Found')
})

server.listen(3000)
console.log('server on port 3000')