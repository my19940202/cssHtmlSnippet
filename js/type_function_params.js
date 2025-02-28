/**
 * 这是一个演示JavaScript函数参数默认值的示例函数
 * @param {any} a - 必填参数
 * @param {object} [b={}] - 可选参数，默认值为空对象
 * 
 * 函数说明：
 * 1. 使用 void 0 来检查参数 b 是否为 undefined
 * 2. 如果 b 是 undefined，则将其设置为默认值空对象 {}
 * 3. 打印输出 a 和 b 的值
 * 
 * 注意：
 * - void 0 是获取 undefined 的可靠方式，因为在ES5之前undefined不是一个保留字，可以被重写
 *   例如：undefined = 123; 这样的代码在ES5之前是合法的
 * - void是一个运算符，它会对表达式求值但总是返回undefined
 * - void 0 是最简洁的写法，因为0是最简单的表达式
 * - 这种写法可以确保获取到真正的undefined值，即使全局的undefined被修改
 * - 在ES5及之后版本中，undefined被定义为不可写、不可配置的属性，这种用法变得不再必要
 * - 这个模式在ES6之前用于实现默认参数值
 * - 在ES6中可以直接使用 function jojo(a, b = {}) 语法
 */
function jojo(a, b) {
    if (b === void 0) { b = {}; }
    console.log('a:', a, ' b:', b);
}
jojo('1234123', undefined);
jojo('1234123');
jojo('1234123', null);
