## REPL là gì?

- REPL là viết tắt của Read Eval Print Loop, về cơ bản REPL là môi trường máy tính như Windows Console hoặc Unix/Linux Shell, tại đây người dùng có thể nhập các lệnh và hệ thống sẽ trả về kết quả đầu ra tương ứng.

## Cách Mở REPL
- Sử dụng command line của máy tính
- Hoặc mở command line của vs code

## Thao tác với REPL
- Khai báo biến
```javascript
const a = 10
const b = 9
```

- Biểu thức
```javascript
a + b
a - b
```

- Vòng lặp
```javascript
[1,2,3,4].forEach(num => console.log(num))
```

- Mutilple line - Function
```javascript
const add = (a,b) => {
    return a + b
}
```

- _ : Lấy kết quả cuối cùng
```javascript
let c = _
```
- .save [filename] : lưu file
```javascript
.save save.js
```
- .load [filename] : load file
```javascript
.save app.js
```
- .exit hoặc ctrl + c : Thoát khỏi REPL
- ...