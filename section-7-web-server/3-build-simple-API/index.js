const http = require('http');
const url = require('url');
const fs = require('fs');

const data = fs.readFileSync(`${__dirname}/data/data.json`, 'utf8');

const server = http.createServer((req, res) => {
    const { pathname } = url.parse(req.url, true);
    console.log(pathname);

    if (pathname === '/' || pathname === '/overview') {
        res.end('Home Page');
    } else if (pathname === '/laptop') {
        res.end('Laptop Page');
    } else if (pathname === '/api') {
        // fs.readFile(`${__dirname}/data/data.json`, 'utf-8', (err, data) => {
        //     res.writeHead(200, { 'Content-type' : 'application/json'})
        //     res.end(data);
        // })

        res.writeHead(200, { 'Content-type': 'application/json' });
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
