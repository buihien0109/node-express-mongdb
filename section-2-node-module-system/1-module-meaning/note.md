## Khúc dạo đầu
- Khi bạn viết ứng dụng web sử dụng Node.js, bạn hoàn toàn có thể bỏ tất cả code vào một file index.js mà không gặp lỗi lầm gì cả.

- Kể cả ứng dụng của bạn lớn và phức tạp tới đâu thì bỏ tất cả code vào một file cũng không ảnh hưởng tới tốc độ của ứng dụng.

- Tuy nhiên, về mặt tổ chức code, hay nói cách khác là tính clean code thì thật là thảm họa. Mã nguồn ứng dụng của bạn sẽ như một bãi rác, khó debug và tính maintain cực kém.

- Bạn thử tưởng tượng, nếu bạn là người phải maintain một dự án mà người tiền nhiệm viết code kiểu như vậy. Chắc là mình chỉ muốn “giết người” thôi 😀

- Vì vậy, phàm là con người thì chúng ta cần phải viết code có tâm. Code cần phải clean, mã nguồn dễ đọc dễ hiểu. Và lúc này khái niệm Module ra đời và thể hiện vai trò quan trọng của nó.

## Nodejs Module là gì?
- Module là những đoạn mã được đóng gói lại và được giữ Private. Điều đó có nghĩa là các hàm hay biến trong module mới có thể truy cập và thao tác với nhau. Nếu bạn muốn sử dụng module từ bên ngoài thì cần phải exports các biến/hàm ra bằng cách sử dụng exports hoặc module.exports.

- Chính nhờ tính đóng gói như thế này mà đảm bảo tính toàn vẹn của Module. Sẽ chỉ có những hàm, biến được exports thì bên ngoài mới truy cập được.

- Các module hoàn toàn tách biệt độc lập nhau, mỗi module sẽ thực hiện nhiệm vụ của riêng nó mà không ảnh hưởng tới module khác. Khi nào cần sử dụng module nào thì gọi chúng ra và kết hợp các module lại với nhau tùy logic xử lý của bạn.

## Các loại module trong nodejs
Trong Node.js có ba loại module.

- Core module (built-in module) : 
    - Đây là loại module được tích hợp sẵn trong Node.js
- Local module : 
    - Đây là loại module người dùng tự định nghĩa
- Third party modules (external module)
    - Do bên thứ 3 phát triển và có thể cài đặt thêm bất cứ lúc nào
    - Với external module, bạn có thể dễ dàng cài đặt thông qua NPM.