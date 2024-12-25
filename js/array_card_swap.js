// 数组的按照特定顺序，从原牌组 换到 新牌组
// 12-24 B站 商业技术部前端一面考察提到的前端面试题
function getResult(origin = []) {
    let result = []
    let idx = 0;
    while (origin.length > 0) {
        // 第一章
        if (idx % 2 === 0) {
            result.unshift(origin.shift())
        }
        // 第二章
        else {
            let tmp = origin.shift()
            origin.push(tmp)
        }
        idx++
    }

    return result;
}

// 正序
// console.log(getResult(['K','2','5'])) // ['2','5','K']
// console.log(getResult([2,4,5,6,7,8,9])) // [8,4,6,9,7,5,2]

// 倒序
function getResultReverse(origin = []) {
    let result = [origin.shift()]
    let idx = 0;
    while (origin.length > 0) {
        // 第一章
        if (idx % 2 === 0) {
            result.unshift(origin.shift())
        }
        // 第二章
        else {
            let tmp = result.pop()
            result.unshift(tmp)
        }
        // console.log(result, origin)
        idx++
    }

    return result;
}
console.log(getResultReverse(['2', '5', 'K'])) // ['K','2','5']
console.log(getResultReverse([8, 4, 6, 9, 7, 5, 2])) // [2,4,5,6,7,8,9]
// round0: K 2 5 移出来
// round1: 2 5, K 交换
// round2: 5 2, K 移出来
// round3: 2, 5 K 移出来
// round4: '', 2 5 K

// 2 5 K
// round1: 5 K, 2
// round2: K, 5 2
// round3: K, 2 5 移出来
// round4: '', K 2 5


// round1: 4,5,6,7,8,9 2
// round2: 5,6,7,8,9,4 2
// round3: 6,7,8,9,4 5,2
// round4: 7,8,9,4,6 5,2  移出来
// round4: 8,9,4,6 7,5,2  交换
// round4: 9,4,6,8 7,5,2  移出来
// round4: 4,6,8 9,7,5,2  交换
// round4: 6,8,4 9,7,5,2  移出来
// round4: 8,4 6,9,7,5,2  交换
// round4: 4,8 6,9,7,5,2  移出来
// round4: 8 4, 6,9,7,5,2 移出来
// round4: 8,4,6,9,7,5,2