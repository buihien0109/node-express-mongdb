### Tạo 1 thư mục : npm-demo
### cd vào npm-demo
### npm init : Tạo file package.json với step by step

Sau khi chạy câu lệnh này, Npm sẽ hỏi chúng ta một vài câu hỏi về project của bạn.

- Đầu tiên là về package name: Đây là tên dự án của bạn
- Version: Đây là phiên bản dự án của bạn, mặc định sẽ là 1.0.0
- Description: Mô tả về dự án của bạn.
- Entry point: Entry point sẽ quy định root của Node, file này sẽ chứa các câu lệnh về server, mặc định sẽ là index.js. Chú ý là khi bạn chạy server, Node sẽ đọc dữ liệu từ file này để khởi tạo. Tên này có thể thay đổi được, nhưng hãy chắc rằng file đó tồn tại ở root của dự án.
- Test command: Đây là dòng lệnh mà sẽ chạy khi bạn gọi npm test Mặc định để trống
- Git repository: Như tên gọi, nó là git repository ứng với dự án của bạn. Mặc định để trống.
- Keywords: Các từ khóa tương ứng với dự án của bạn. Mặc định để trống
- Author: Tên tác giả của dự án. Mặc định để trống
- License: Giấy phép. Mặc định là ISC.
Khi kết thúc sẽ hỏi 1 câu là Is this OK: bạn có chắc không, yes hoặc no.

Sau khi kết thúc, project của các bạn sẽ có thêm 1 file có tên là package.json. Khi bạn vào trong đó ban đầu sẽ file hiển thị những thông tin tương tự như dưới đây.

Các thông tin trong file này ban đầu chính là những thông tin bạn nhập trước đó trong phần npm init. Trong tương lai bạn có thể add rất nhiều thứ vào file này nữa. Và giờ bạn có thể sử dụng npm để cài đặt các package mà mình muốn include vào trong dự án của mình rồi.

- npm init --yes || npm init -y : Tạo file package.json với default value