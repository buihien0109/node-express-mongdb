const fs = require('fs');
const http = require('http');

// Đọc file
fs.readFile('./text.txt', 'utf-8', (err, data) => {
    console.log(data);
});

// Ghi file
let string = 'Hello world';

fs.writeFile('./output.txt', string, 'utf-8', (err) => {
    console.log('Ghi file thành công');
});

// Tạo server đơn giản
const server = http.createServer((req, res) => {
    fs.readFile('./text.txt', 'utf-8', (err, data) => {
        res.writeHead(200, {
            'Content-type': 'text/plain',
        });
        res.end(data);
    });
});

server.listen(3000);
