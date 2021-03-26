// Import module fs vào file
const fs = require('fs');

// Đọc file asynchronous
fs.readFile('./txt/first.txt', 'utf-8', (err, data1) => {
    // console.log(`data1 : ${data1}`)

    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
        // console.log(`data 2 : ${data2}`);

        fs.readFile(`./txt/text.txt`, 'utf-8', (err, data3) => {
            // console.log(`data 3 : ${data3}`);

            fs.writeFile('./txt/final.txt', `Para 1: ${data2} \nPara 2: ${data3}`, () => {
                console.log('Success');
            })
        })
    })
})

console.log("Start");