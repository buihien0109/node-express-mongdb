let user = {
    name: 'Nguyễn Văn A',
    email: 'abc@gmail.com',
    age: 20,
};

console.log(user)

function sumArr(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let numbers = [1,2,3,4,5];
console.log(sumArr(numbers))

function randomNumber(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
console.log(randomNumber(numbers))

