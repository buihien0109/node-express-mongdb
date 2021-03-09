const http = require('http');
const fs = require('fs');

const data = fs.readFileSync(`${__dirname}/data/data.json`, 'utf8');
const dataObj = JSON.parse(data)

const server = http.createServer((req, res) => {
    let path = req.url;
    console.log(path);

    if (path == '/') {
        res.end('Home Page');
    } else if (path == '/product') {
        res.end('Product Page');
    } else if (path == '/api') {
        // fs.readFile(`${__dirname}/data/data.json`, 'utf-8', (err, data) => {
        //     const productData = JSON.parse(data)
        //     res.writeHead(200, { 'Content-type' : 'application/json'})
        //     res.end(data);
        // })

        res.writeHead(200, { 'Content-type' : 'application/json'})
        res.end(data);
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html',
        });
        res.end('<h1 style="color:red">Page not found!</h1>');
    }
});

const PORT = 3000;
server.listen(PORT, '127.0.0.1', () => {
    console.log(`Server listening on port : ${PORT}`);
});
