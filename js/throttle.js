// 手写一下节流和防抖
function throttle(fn, wait) {
    var timer = null;
    return function () {
        if (!timer) {
            fn()
            setTimeout(() => {
                timer = null;
            }, wait);
        }
    }
}

// 主要还是使用timer 和 闭包
// 一段时间内 多次触发以最后一次为准
function debunce(fn, wait) {
    var timer = null;
    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn()
            timer = null;
        }, wait);
    }
}

var xx = debunce(() => console.log(111), 3000)
var yy = throttle(() => console.log(111), 2000)

// xx()
// xx()
// xx()
// xx()

// setTimeout(() => {
//     xx()
//     xx()
//     xx()
// }, 1000);

setInterval(() => {
    console.log('setInterval')
    yy()
}, 1000);