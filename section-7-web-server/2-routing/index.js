const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    let path = req.url
    console.log(path)

    if(path == '/') {
        res.end('Home Page')
    } else if(path == '/about') {
        res.end('About Page')
    } else {
        res.writeHead(404, {
            'Content-type' : 'text/html'
        })
        res.end('<h1 style="color:red">Page not found!</h1>')
    }
})

const PORT = 3000
server.listen(PORT, '127.0.0.1', () => {
    console.log(`Server listening on port : ${PORT}`)
})