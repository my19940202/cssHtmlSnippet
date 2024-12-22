// then如何串联起来, 在then里面返回一个promise就行
var makePromiseInstance = (time) => new Promise(
    (resolve, reject) => {
        setTimeout(() => resolve(time), 1000);
    }
)
// 需要在then里面return 一个promise实例才能继续在then里面捕获到
var p1 = makePromiseInstance(1)
p1.then(value => {
    console.log(value)
    return makePromiseInstance(2)
})
.then(value => {
    console.log(value)
    return makePromiseInstance(3)
})
.then(value => {
    console.log(value)
})
