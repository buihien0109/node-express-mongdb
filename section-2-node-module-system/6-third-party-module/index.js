// Inport module uuid
const uuid = require('uuid');

// Thao tác với module uuid
// Tạo uuid (verson 4)
const id = uuid.v4()
console.log(id)

// nil uuid string
console.log(uuid.NIL)

// parse uuid string thành mảng các bytes
const bytes = uuid.parse(id);
console.log(bytes)

// Kiểm tra 1 chuỗi có phải là uuid không?
console.log(uuid.validate('1234'))
console.log(uuid.validate('6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b'))


