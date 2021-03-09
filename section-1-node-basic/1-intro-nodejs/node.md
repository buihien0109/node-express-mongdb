# Giới thiệu về Nodejs

## 1. Nodejs là gì
- Node.js là một nền tảng phát triển độc lập được xây dựng trên Javascript Runtime của Chrome. Giúp chúng ta có thể xây dựng được các ứng dụng một cách nhanh chóng và dễ dàng mở rộng.
- NodeJS có thể chạy trên nhiều nền tảng hệ điều hành khác nhau từ Window cho tới Linux, Mac OS. Nó cung cấp cho chúng ta các thư viện Javascript phong phú giúp đơn giản hóa việc lập trình và giảm thời gian ở mức thấp nhất.

## 2. Lý do nên học Nodejs là gì?
- **NodeJS được viết bằng JavaScript với cộng đồng người dùng lớn mạnh**. 
    - Nếu bạn cần hỗ trợ gì về NodeJS, sẽ nhanh chóng có người hỗ trợ bạn.
- **Tốc độ xử lý nhanh**.
    - Nhờ cơ chế xử lý bất đồng độ (non-blocking), NodeJS có thể xử lý hàng ngàn request cùng lúc mà không gặp bất cứ khó khăn nào.
- **Dễ dàng mở rộng**.
    - Nếu bạn có nhu cầu phát triển website thì tính năng dễ dàng mở rộng của NodeJS là một lợi thế cực kỳ quan trọng.

## 3. Các đặc tính quan trọng của Nodejs
- **Không đồng bộ và hướng sự kiện**
    - Tất cả các API của thư viện Node.js đều không đồng bộ (none-blocking). Về cơ bản, điều đó có nghĩa là máy chủ dựa trên Node.js không bao giờ chờ API trả về dữ liệu.

- **Rất nhanh**
    - Được xây dựng trên Công cụ JavaScript V8 của Google Chrome, thư viện Node.js rất nhanh trong việc thực thi mã.

- **Đơn luồng nhưng có khả năng mở rộng cao**
    - Node.js sử dụng một mô hình đơn luồng với các vòng lặp sự kiện. 
    - Cơ chế sự kiện giúp máy chủ phản hồi một cách nhanh chóng và có khả năng mở rộng cao so với các máy chủ truyền thống
    - Với cùng một chương trình Nodejs có thể cung cấp dịch vụ cho một số lượng yêu cầu lớn hơn nhiều so với các máy chủ truyền thống như Máy chủ HTTP Apache.

- **No Buffering**
    - Các ứng dụng Node.js không bao giờ buffer bất kỳ dữ liệu nào. Các ứng dụng này chỉ đơn giản là đầu ra dữ liệu.

- **License**
    - Node.js được phát hành theo giấy phép MIT.

## 4. Một số framework của Nodejs
- Socket.io
    - Socket.io là một framework của Node.js cho phép xây dựng các ứng dụng web chạy thời gian thực(realtime)
    - Là thư viện Javascript, nó cho phép giao tiếp theo hai hướng giữa client và server

- Express
    - Express.js là một trong những framework quan trọng nhất của Node.js. - Đây là một framework tối giản để xây dựng một loạt các ứng dụng web và di động cũng như các giao diện lập trình ứng dụng (API)

- Sails.js
    - Sails.js là một trong những framework realtime phổ biến nhất để xây dựng các ứng dụng Node.js. 
    - Sails.js sử dụng mô hình MVC làm kiến trúc. 
    - Sails.js được xây dựng trên Node.js và sử dụng Express.js để xử lý request HTTP

- Meteor
    - Meteor là một framework mã nguồn mở xây dựng các trang web và các ứng dụng di động. 
    - Framework này hỗ trợ được các hệ điều hành OS X, Windows và Linux. 
    - Nó cho phép viết cả phần client và server của một ứng dụng trong JavaScript

## 5. Các công ty sử dụng Nodejs
- Netflix
- Trello
- PayPal
- Uber
- Medium
- NASA

Và còn nhiều cái tên nổi tiếng khác nữa. 

Theo như Paypal thì sử dụng Nodejs làm giảm thời gian đáp ứng lên tới 35%