// import package fs
const path = require('path');
const fs = require('fs');

// Lấy đường dẫn muốn list
const directoryPath = path.join(__dirname);

fs.readdir(directoryPath, (err, files) => {
    let totalDirectory = 0;
    let totalFile = 0;

    if (err) {
        return console.log(err.message);
    }

    files.forEach((file) => {
        if (fs.lstatSync(path.resolve(directoryPath, file)).isDirectory()) {
            console.log('Directory: ' + file);
            totalDirectory++;
        } else {
            console.log('File: ' + file);
            totalFile++;
        }
    });
    console.log(`Total : ${totalDirectory} directory and ${totalFile} file`);
});
