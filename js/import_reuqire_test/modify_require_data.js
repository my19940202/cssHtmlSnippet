let { a, b } = require('./conf_require')
a = 12341324;
b.key = 'jojojojojoj'
console.log(a, b);


setTimeout(() => {
    let { a: aa, b: bb } = require('./conf_require')
    // 引用类型
    console.log(aa, bb)
}, 1000);