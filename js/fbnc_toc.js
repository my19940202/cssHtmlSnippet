// 手写一个尾递归形式的斐波那契函数
// f(1) = 1
// f(2) = 1
// f(3) = f(2) + f(1) = 2
// f(4) = f(3) + f(2) = 3
function fbnq(n) {
    if (n <= 2) {
        return 1
    }
    return fbnq(n - 1) +fbnq(n - 2)
}

// 添加了cache
let map = {}
function fbnq_cache(n) {
    if (map[n]) {
        return map[n]; 
    }
    if (n <= 2) {
        return 1
    }
    map[n] = fbnq_cache(n - 1) +fbnq_cache(n - 2)
    return map[n]
}

// 支持来尾递归
// 这是一个尾递归优化的斐波那契数列实现
// 参数说明:
// n: 要计算第几个斐波那契数
// prev1: 保存当前数字,默认为1 
// prev2: 保存前一个数字,默认为1
// 
// 实现原理:
// 1. 通过参数prev1和prev2保存当前需要的两个数字,避免重复计算
// 2. 每次递归调用时:
//    - prev1 + prev2 计算得到下一个数字
//    - prev1 变成前一个数字
//    - n-1 继续往前计算
// 3. 当n<=2时返回prev1作为结束条件
// 4. 由于是尾递归形式(最后一步操作是函数调用),
//    编译器可以优化掉调用栈,避免栈溢出
function fibonacci(n, prev1 = 1, prev2 = 1) {
    console.log(
        n, prev1, prev2
    )
    if (n <= 2) return prev1;
    return fibonacci(n - 1, prev1 + prev2, prev1);
}

// console.time()
// console.log(fbnq(40))
// console.timeEnd()

// console.time()
// console.log(fbnq_cache(40))
// console.timeEnd()

console.time()
console.log(fibonacci(40))
console.timeEnd()