const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Server') // Phương thức này được sử dụng để kết thúc tiến trình xử lý response và trả về dữ liệu cho bên cline
})

// Để tạo server, chúng ta gọi hàm createServer(). Hàm này được gọi khi có một request tới server.
// Khi một request được nhận, chúng ta sẽ trả về mã “200” cho client. 
// Tại sao lại là 200. Đây là những mã được tiêu chuẩn hóa cho HTTP, mỗi một mã sẽ tương ứng với một thông điệp. 
// Ví dụ: 200 tức là thành công, 400 tức bad request, 500 là internal server error… Bạn có thể tham khảo thêm tại đây. (https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

const PORT = 3000
server.listen(PORT, '127.0.0.1', () => {
    console.log(`Server listening on port : ${PORT}`)
})