const uuid = require('uuid');
const fs = require('fs-extra');

// uuid
// console.log(uuid.v4())
// console.log(uuid.NIL)
// const bytes = uuid.parse('6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b');
// console.log(bytes)

// fs-extra
fs.copy('./txt/start.txt', './txt/final.txt', err => {
    if(err) {
        return console.log(err)
    }
    console.log('Copy success')
})

