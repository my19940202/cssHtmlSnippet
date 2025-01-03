// 写下节流和防抖
// 节流：在一定时间内，只执行一次（抢红包 每秒只能点击一次）
// 防抖：在一定时间内，重复触发，只按照最后一次，之前都不执行（输入框搜索，输入停止前都不算，只算最后一次）


function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

// 防抖是利用了闭包，timer 是闭包的变量，每次执行 fn 的时候，都会重新赋值 timer
function debounce(fn, wait = 1000) {
    let timer = null;
    return function() {
        if (timer) {
            clearTimeout(timer)
            console.log('debounce retrigger, keepwaiting')
        }
        timer = setTimeout(() => {
            fn();
            timer = null
        }, wait)
    }
}

var debounceTest = debounce(function () {
    console.log('debounce done')
}, 1000)
// debounceTest()


var interList = Array.from({length: 20}, (_, idx) => idx + 1)


// 利用setTimeout 执行一次后，timer 等待1s才会被至null，中间的其他执行会跳过
function throttle(fn, wait) {
    let timer = null;
    return function() {
        if (!timer) {
            fn();
            timer = setTimeout(() => {
                timer = null;
            }, wait);
        }
    }
}


var bb = throttle(function () {
    console.log('throttle done')
}, 2000)

async function main() {
    for (let idx of interList) {
        await sleep(100);
        console.log('idx', idx)
        debounceTest()
    }
}

main()