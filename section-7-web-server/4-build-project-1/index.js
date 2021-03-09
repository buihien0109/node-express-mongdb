const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    // const pathName = req.url;
    const pathName = url.parse(req.url, true).pathname;
    const id = url.parse(req.url, true).query.id;
    console.log(pathName)

    // PRODUCTS OVERVIEW
    if (pathName === '/products' || pathName === '/') {
        res.writeHead(200, { 'Content-type': 'text/html' });

        fs.readFile(`${__dirname}/overview.html`, 'utf-8', (err, data) => {
            res.end(data);
        });
    }

    // LAPTOP DETAIL
    else if (pathName === '/laptop') {
        res.writeHead(200, { 'Content-type': 'text/html' });

        fs.readFile(`${__dirname}/laptop.html`, 'utf-8', (err, data) => {
            res.end(data);
        });
    }

    // IMAGES
    else if (/\.(jpg|jpeg|png|gif)$/i.test(pathName)) {
        fs.readFile(`${__dirname}/${pathName}`, (err, data) => {
            res.writeHead(200, { 'Content-type': 'image/jpg' });
            res.end(data);
        });
    }

    // URL NOT FOUND
    else {
        res.writeHead(404, { 'Content-type': 'text/html' });
        res.end('URL was not found on the server!');
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('Listening for requests now');
});
