import { a, b } from './conf_require.mjs';
a = 12341324;
b.key = 'jojojojojoj'
console.log(a, b);


setTimeout(() => {
    let { a: aa, b: bb } = require('./conf_require')
    console.log(aa, bb)
}, 1000);   
