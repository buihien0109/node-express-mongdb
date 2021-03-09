const http = require('http');
const url = require('url');
const fs = require('fs');

const replaceTemplate = require('./modules/replaceTemplate')

// Load template
const tempOverview = fs.readFileSync(
    `${__dirname}/templates/template-overview.html`,
    'utf-8'
);
const tempCard = fs.readFileSync(
    `${__dirname}/templates/template-card.html`,
    'utf-8'
);
const tempProduct = fs.readFileSync(
    `${__dirname}/templates/template-laptop.html`,
    'utf-8'
);

// Load data
const data = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

// Create server
const server = http.createServer((req, res) => {
    const { query, pathname } = url.parse(req.url, true);
    console.log(query);

    // PRODUCT
    if (pathname === '/' || pathname === '/overview') {
        res.writeHead(200, { 'Content-type': 'text/html' });

        const cardsHtml = dataObj
            .map((el) => replaceTemplate(tempCard, el))
            .join('');
        const output = tempOverview.replace('{%CARDS%}', cardsHtml);
        res.end(output);
    }

    // LAPTOP DETAIL
    else if (pathname === '/laptop') {
        res.writeHead(200, { 'Content-type': 'text/html' });

        const product = dataObj[query.id];
        const output = replaceTemplate(tempProduct, product);
        res.end(output);
    }

    // IMAGES
    else if (/\.(jpg|jpeg|png|gif)$/i.test(pathname)) {
        fs.readFile(`${__dirname}/data/img/${pathname}`, (err, data) => {
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

// Listen
const PORT = 3000;
server.listen(PORT, '127.0.0.1', () => {
    console.log(`Server listening on port : ${PORT}`);
});
