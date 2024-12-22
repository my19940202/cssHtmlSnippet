// 手写一个flattern函数

function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

async function main() {
    var a = [1,2,3]
    var b = [1, [2, 3]]
    var c = [1, [2, [3, [4, [5]]]]]
    console.log(a, flatten(a))
    console.log(b, flatten(b))
    console.log(c, flatten(c))

}

main()

// 如何实现一个 flatten
// 主要原理还是递归 + 循环
function flatten(item) {
    let ret = []
    for (const ele of item) {
        if (!(ele instanceof Array)) {
            ret.push(ele)
        }
        else {
            ret = ret.concat(flatten(ele))
        }
    }
    
    return ret;
}
