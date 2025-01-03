// eventEmitter的一些基础使用 便于深入理解
const EventEmitter = require('events');
// 创建一个EventEmitter实例
const myEmitter = new EventEmitter();
// 定义一个事件处理函数
const eventHandler = function () {
    // arguments类似一个数组
    console.log('事件被触发了', arguments, arguments[0], arguments[1]);
};

// 监听事件'myEvent'，当事件触发时，执行eventHandler函数
myEmitter.on('myEvent', eventHandler);
// 触发'myEvent'事件
myEmitter.emit('myEvent', 111, 222, 333, 444);



// 之前搞热力图弄的一个串行脚本
let loopCount = 0;
const loop = new EventEmitter();
const loopHandler = function () {
    try {
        if (loopCount < 10) {
            console.log('loop被触发了', loopCount, +new Date());
            loopCount++;
            // 构造错误
            if (loopCount === 5) {
                // loop.emit('error', new Error('我是一个错误'));
                throw new Error('错误1')
            }

            setTimeout(() => {
                loop.emit('myEvent');
            }, loopCount * 500);
        }
        else {
            console.log('loop结束');
        }
    } catch (error) {
        loop.emit('error', error);
    }


};

const errorHandler = (err) => {
    console.error('发生错误：', err);
};
loop.on('myEvent', loopHandler);
loop.on('error', errorHandler);
loop.emit('myEvent');