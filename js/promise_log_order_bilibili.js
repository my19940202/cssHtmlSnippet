// 1 3 5 7 4 6 2
// 2 进入宏任务
// 4 6进入微任务
console.log(1)

setTimeout(() => {
    console.log(2)
}, 0)
function a() {
    return new Promise(resolve => {
        resolve();
        console.log(3);
    })
}

(async function () {
    await a();
    console.log(4)
}())

new Promise(resolve => {
    console.log(5)
    resolve()
}).then(() => {
    console.log(6)
})

console.log('7')
