// 昨天乐天面试有几道算法题没有思路
// 这段代码演示了不同场景下this的指向:
// 'use strict';

function fn() {
    // 1. 普通函数调用时,this的指向:
    // - 在浏览器中指向window全局对象
    // - 在Node.js中指向global全局对象
    // - 在严格模式下('use strict')指向undefined
    console.log(this)

    // 2. 箭头函数中的this:
    // - 箭头函数没有自己的this,会继承外层作用域的this
    // - 所以这里的this与外层fn函数的this相同
    // - 在浏览器中是window,Node.js中是global
    setTimeout(() => {
        console.log('箭头函数', this)
    }, 1000)

    // 3. 普通回调函数中的this:
    // - setTimeout的回调函数是普通函数
    // - 在非严格模式下,this指向全局对象(window/global)
    // - 这与fn函数的this无关,是因为普通函数的this由调用方式决定
    setTimeout(function () {
        console.log('普通函数', this)
    }, 2000)
}

fn() // 以普通函数方式调用fn

// var c = new fn()
// console.log('==============')


function fn2() {
    this.name = 'class instance value'
    return {
        name: 'inner_value',
        fun1: function () {
            console.log(this.name)
        },
        fun2: () => {
            console.log(this.name)
        }
    }
}
// 下面两种写法都是一样的
var a = fn2()
a.fun1()
a.fun2()

var b = new fn2()
b.fun1()
b.fun2()
