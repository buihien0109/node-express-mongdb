const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const { pathname } = url.parse(req.url, true);
    console.log(pathname);

    // PRODUCT
    if (pathname === '/' || pathname === '/overview') {
        res.writeHead(200, { 'Content-type': 'text/html' });

        fs.readFile(`${__dirname}/overview.html`, 'utf-8', (err, data) => {
            res.end(data);
        });
    } 
    
    // LAPTOP DETAIL
    else if (pathname === '/laptop') {
        res.writeHead(200, { 'Content-type': 'text/html' });

        fs.readFile(`${__dirname}/laptop.html`, 'utf-8', (err, data) => {
            res.end(data);
        });
    } 
    
    // IMAGES
    else if (/\.(jpg|jpeg|png|gif)$/i.test(pathname)) {
        fs.readFile(`${__dirname}/${pathname}`, (err, data) => {
            res.writeHead(200, { 'Content-type': 'image/jpg' });
            res.end(data);
        });
    } 
    
    // URL NOT FOUND
    else {
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
