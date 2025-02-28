const { fork } = require('child_process');

// 创建子进程
const child = fork('child.js');


// 接收子进程的消息
child.on('message', (message) => {
    console.log('收到子进程消息:', message);
});

setInterval(function () {
    // 向子进程发送消息
    child.send('Hello from parent!');
}, 5000)