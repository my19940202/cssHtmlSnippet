// promise all 调研
// 测试promise.all，全部都会执行（其中有任务失败 其他也会继续执行）
var p1 = new Promise(resolve => {
    setTimeout(() => {
        console.log('p1 resolver')
        resolve('p1 resolve')
    }, 3000);
});
var p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject('p2 reject'), 100);
    // setTimeout(() => resolve('p2 resolve'), 100);
});
var p3 = new Promise(resolve => {
    setTimeout(() => {
        console.log('p1 resolver')
        resolve('p3 resolve')
    }, 3000);
});

// 虽然p2很快就reject了，但是p1和p3都resolve了，所以Promise.all还是返回p1和p3的resolve结果
Promise.all([p1, p2, p3]).then(res => {
    console.log(res, 'then');
}).catch(err => {
    console.log(err, 'err');
}).finally((data) => {
    console.log('finally', data);
})


// main()
