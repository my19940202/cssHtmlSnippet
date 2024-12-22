// 闭包的三种写法


// 累加器
function test() {
    var a = 0;
    return function () {
        return a++
    }
}
var bibao_test = test()
console.log(bibao_test())
console.log(bibao_test())
console.log(bibao_test())

// 循环时间事件里面绑定事件

// 防抖
function debounce(timeout, func) {
    var timer = null;
    return function () {
        if (!timer) {
            timer = setTimeout(() => func(), 1000);
        }
        else {
            console.log('wait')
        }
    }
}
var debounceTest = debounce(1000, function () {
    console.log('donedone')
})
debounceTest()
debounceTest()
debounceTest()
debounceTest()
debounceTest()
debounceTest()

// 柯里化
function cury(x) {
    return function (y) {
        return x + y
    }
}
console.log(
    cury(1)(2),
    cury(3)(2),
    cury(4)(5),
)