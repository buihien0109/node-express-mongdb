const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello Server')
})

const PORT = 3000
server.listen(PORT, '127.0.0.1', () => {
    console.log(`Server listening on port : ${PORT}`)
})