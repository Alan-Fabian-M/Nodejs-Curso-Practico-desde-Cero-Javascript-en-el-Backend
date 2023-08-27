const http = require('http')
const {createReadStream}= require('fs') 


const server = http.createServer((req, res) =>{
    const filestream = createReadStream('./data/bigfile.txt', {
        encoding: 'utf-8'
    })

    filestream.on('data', (chunk) =>{
        filestream.pipe(res)
    })

    filestream.on('error', error =>{
        console.log(error)
    })
})

server.listen(3000)
console.log(`server on port ${3000}`)