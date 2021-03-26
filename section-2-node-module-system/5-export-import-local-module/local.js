// Tính tổng
function sumArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Lấy ngẫu nhiên một giá trị trong mảng
function randomNumber(arr) {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

module.exports = {
    sumArr,
    randomNumber,
};
