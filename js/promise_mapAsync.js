// 天演基金: 算法题需要复习
// then如何串联起来
var makePromiseInstance = (time) => new Promise(
    (resolve, reject) => {
        setTimeout(() => resolve(time), 1000);
    }
)
// 需要在then里面return 一个promise实例才能继续在then里面捕获到
// var p1 = makePromiseInstance(1)
// p1.then(value => {
//     console.log(value)
//     return makePromiseInstance(2)
// })
// .then(value => {
//     console.log(value)
//     return makePromiseInstance(3)
// })
// .then(value => {
//     console.log(value)
// })


function mapAsyncAwait(items, callback) {
    let ret = []
    return new Promise(async (res, rej) => {
        for (const ele of items) {
            // 先用async await实现
            const value = await callback(ele);
            console.log(ele, 'ele')
            ret.push(value)
        }
        res(ret)
    });
}

function mapAsync(items, callback) {
    let ret = []
    let a = new Promise((resolve, reject) => resolve());
    let idx = 0;
    return new Promise(async (res, rej) => {
        for (const ele of items) {
            // 如果直接下面折行相当于并行，按照setTimeout 0 1 2s 立刻执行了
            // callback(ele)

            a.then(value => {
                console.log(ret, ele);
                ret.push(value)
                idx++
                if (idx === 3) {
                    // return new Promise((res, rej) => res(ret));
                    res(ret)
                }
                else {
                    return callback(ele)
                }
            });
        }
        res(ret)
    });
}

// 简单的reduce示例来帮助理解reduce的执行流程
// console.log('===== reduce示例 =====');

// // 示例1: 累加数组元素
// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((accumulator, currentValue) => {
//     console.log(`当前累加值: ${accumulator}, 当前元素: ${currentValue}`);
//     return accumulator + currentValue;
// }, 0); // 0是初始值
// console.log('累加结果:', sum);

// // 示例2: 数组扁平化
// const nestedArray = [[1, 2], [3, 4], [5, 6]];
// const flattened = nestedArray.reduce((acc, curr) => {
//     console.log(`当前累积数组: [${acc}], 当前要合并的数组: [${curr}]`);
//     return acc.concat(curr);
// }, []); // []是初始值
// console.log('扁平化结果:', flattened);

// // 示例3: 对象数组转换
// const fruits = [
//     {name: 'apple', count: 3},
//     {name: 'banana', count: 5},
//     {name: 'orange', count: 2}
// ];
// const fruitCount = fruits.reduce((acc, curr) => {
//     console.log(`当前累积对象:`, acc, `当前水果:`, curr);
//     acc[curr.name] = curr.count;
//     return acc;
// }, {}); // {}是初始值
// console.log('转换结果:', fruitCount);

// console.log('===== reduce示例结束 =====');

// 示例用法
// should print 1-2000 2-1000 3-0
// 预期达到串行执行的效果
// 达到这样的输出效果 1, 2, 3, [2000, 1000, 0]
function mapAsyncAns(items, callback) {
  // 返回一个新的Promise，用于处理整个异步映射过程
  return new Promise((resolve) => {
    // 存储所有异步操作的结果
    const results = [];
    // 计数器，记录已完成的异步操作数量
    let count = 0;
    
    // 使用reduce方法串行执行Promise
    // reduce会依次处理数组中的每个元素，将上一次的结果作为下一次的输入
    items.reduce((promise, item) => {
    console.log(promise, item)
      // 对每个item，都在前一个Promise完成后再执行
      return promise.then(() => {
        // 执行传入的回调函数，获取Promise结果
        return callback(item).then(result => {
          // 将结果存入数组
          results.push(result);
          // 完成计数加1
          count++;
          // 当所有异步操作都完成时
          if (count === items.length) {
            // 解析最终的Promise，返回所有结果
            resolve(results);
          }
        });
      });
    }, Promise.resolve()); // 初始值是一个已解析的Promise
  });
}


mapAsync(
  [1, 2, 3],
  (item) =>
    new Promise((resolve) => {
      const time = (3 - item) * 1000;
      setTimeout(() => {
        console.log(item);
        resolve(time);
      }, time);
    })
).then(console.log);

// 使用数组reduce 达到在遍历中在同一个promise上面迭代的效果
function mapAsync(items, callback) {
    let ret = []
    let idx = 0;
    return new Promise((resolve, reject) => {
        items.reduce((promise, ele) => {
            return promise.then(() => {
                return callback(ele).then(value => {
                    ret.push(value)
                    idx++
                    if (idx === items.length) {
                        resolve(ret);
                    }
                })
            })
        }, Promise.resolve()); // 初始值是一个已解析的Promise
    })
}
