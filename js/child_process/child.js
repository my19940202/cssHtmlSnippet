// 接收父进程的消息
process.on('message', (message) => {
    console.log('收到父进程消息:', message, new Date());

    // 回复父进程
    process.send('Hello from child!');
});