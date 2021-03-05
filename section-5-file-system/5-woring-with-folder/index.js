// https://nodejs.dev/learn/working-with-folders-in-nodejs

const fs = require('fs');
const path = require('path');

// Kiểm tra một thư mục có tồn tại hay không??
let isExist = fs.existsSync('txt');
console.log(isExist);

// Tạo folder mới
let folderName = 'text';
try {
    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
    }
} catch (err) {
    console.error(err);
}

// Read the content of a directory
const folderPath = 'txt';
fs.readdirSync(folderPath).map((fileName) => {
    console.log(path.join(folderPath, fileName));
    // return path.join(folderPath, fileName);
});

// Rename


// Remove

