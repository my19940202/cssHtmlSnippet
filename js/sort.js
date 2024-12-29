// 冒泡排序
function bubbleSort(list) {
    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {
            // 主要原理是交换顺序
            // 靠前的 比靠后的大，就交互顺序，让结果升序排列
            if (list[i] > list[j]) {
                let tmp = list[i];
                list[i] = list[j];
                list[j] = tmp;
            }
        }
    }
    console.log(list)
    return list;
}

// bubbleSort([1,3,-1, 20, 8, 1, 11,1234, 10, 134,123,4123,427564,132, 0])

// 快速排序
// 主要是使用分治思路，采用递归的形式交互按照顺序的元素
// 还是按照升序思路
function quickSort(list) {
    if (list.length === 0) {
        return [];
    }
    let midIdx = Math.floor(list.length / 2);
    let midValue = list[midIdx]

    let left = [];
    let right = [];

    for (let idx = 0; idx < list.length; idx++) {
        // 跳过这个锚
        if (idx === midIdx) {
            continue;
        }
        const ele = list[idx];
        if (ele >= midValue) {
            right.push(ele)
        }
        else {
            left.push(ele)
        }
    }
    console.log(midValue, left, right)

    return quickSort(left).concat([midValue], quickSort(right))
}

console.log(
    quickSort([
        1,3,-1, 20, 8, 1, 11,1234, 10, 134,123,4123,427564,132, 0
    ])
)
// console.log(
//     quickSort([ 5, 3, 4, 3, 1])
// )