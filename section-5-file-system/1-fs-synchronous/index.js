// Import module fs vào file
const fs = require('fs');

// Đọc file synchronous
let text = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(text);

// Viết dữ liệu vào file khác
let data = 'Hello world'
fs.writeFileSync('./txt/output.txt', data, 'utf-8');