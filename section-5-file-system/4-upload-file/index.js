const http = require('http');
const formidable = require('formidable');
const fs = require('fs');

//Sử dujgn module fs để đọc nội dung file viewUploadForm
const viewUpload = fs.readFileSync('./views/upload.html');

//Khởi tạo server
const server = http.createServer(function (req, res) {
    //Bắt yêu cầu resquest gửi đến url /upload có method là POST
    if (req.url == '/upload' && req.method == 'POST') {
        const form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            const oldpath = files.files.path;
            const newpath = __dirname + '/uploads/' + files.files.name;
            fs.rename(oldpath, newpath, function (err) {
                if (err) return res.end(err.message);
                res.end('Upload file success!');
            });
        });
    } else {
        //Hiển thị ra form upload file
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(viewUpload);
    }
});

server.listen(3000, () => {
    console.log('Server Ready');
});
