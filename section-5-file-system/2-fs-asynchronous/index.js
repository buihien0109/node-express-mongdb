// Import module fs vào file
const fs = require('fs');

// Đọc file asynchronous
fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(`data 2 : ${data2}`);
        fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
            fs.writeFile('./txt/final.txt', `Para 1: ${data2} \nPara 2: ${data3}`, () => {
                console.log('==== Thành công ====');
            })
        })
    })
})

console.log("==== Start ====");