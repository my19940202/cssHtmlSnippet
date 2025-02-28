// ES6 import导入的变量是只读的,不能直接修改
// 以下代码会报错: TypeError: Assignment to constant variable
import { a, b } from './conf_require.mjs';

// a = 12341324; // 这样直接修改会报错
// 如果需要修改导入的变量,有以下几种方法:

// 1. 创建新的变量来存储修改后的值
let localA = a;
localA = 12341324;

// 2. 如果是对象,可以修改其属性(因为对象是引用类型)
// b.key = 'new value'; // 这样是可以的

// 3. 使用import * as 语法
// import * as myModule from './conf_require.mjs';
// myModule.a = 12341324; // 这样也会报错,因为模块对象也是只读的

b.key1 = 'jojojojojoj'
console.log(a, b);

// setTimeout(() => {
//     let { a: aa, b: bb } = require('./conf_require')
//     console.log(aa, bb)
// }, 1000);   
