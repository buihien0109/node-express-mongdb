// exports.user = {
//     name: 'Nguyễn Văn A',
//     email: 'abc@gmail.com',
//     age: 20,
// };

// exports.sumArr = function (arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// exports.randomNumber = function (arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
// }

let user = {
    name: 'Nguyễn Văn A',
    email: 'abc@gmail.com',
    age: 20,
};

function sumArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function randomNumber(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

module.exports = {
    user: user,
    sumArr: sumArr,
    randomNumber: randomNumber,
};

module.exports = {
    userInfo: user, // Sửa tên mà mình muốn
    sumArr: sumArr,
    randomNumber: randomNumber,
};
