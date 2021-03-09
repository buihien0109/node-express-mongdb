const EVENT_DO_HOMEWORK = require('./eventName');
const Student = require('./Student');
const myEmitter = require('./EventEmitter');

const student = new Student('Nguyễn Văn A', 24);

myEmitter.emit(EVENT_DO_HOMEWORK, {
    title: 'Bài tập Nodejs',
    time: new Date().toLocaleDateString(),
});
