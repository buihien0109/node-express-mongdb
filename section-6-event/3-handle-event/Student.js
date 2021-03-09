const EVENT_DO_HOMEWORK = require('./eventName');
const myEmitter = require('./EventEmitter')

class Student {
    constructor(name, age) {
        this.name = name,
        this.age = age

        myEmitter.on(EVENT_DO_HOMEWORK, (data) => {
            console.log(`${this.name} đã nhận được thông báo về bài tập '${data.title}' vào lúc '${data.time}'`)
        })
    }
}

module.exports = Student