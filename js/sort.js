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

// console.log(
//     quickSort([
//         1,3,-1, 20, 8, 1, 11,1234, 10, 134,123,4123,427564,132, 0
//     ])
// )
// console.log(
//     quickSort([ 5, 3, 4, 3, 1])
// )

// 插入排序
function insertSort(list) {
    const sortedList = [list[0]];
    for (let idx = 1; idx < list.length; idx++) {
        const curr = list[idx];
        let inseted = false;
        let index = 0;

        // 向前插入，从数组头部往后遍历 没有问题
        while (!inseted && index < sortedList.length) {
            if (curr < sortedList[index]) {
                sortedList.splice(index, 0, curr)
                inseted = true;
            }
            index++
        }

        // 向后插入，从数组尾部往前遍历 没有问题
        let tailIdx = sortedList.length - 1;
        let tailInseted = false;
        while (!tailInseted && tailIdx > 0) {
            if (curr > sortedList[tailIdx]) {
                sortedList.splice(tailIdx + 1, 0, curr)
                tailInseted = true;
            }
            tailIdx--
        }
    }
    return sortedList;
}

function insertSortOpt(arr) {
    // 从第二个元素开始遍历（因为第一个元素默认是已排序的）
    for (let i = 1; i < arr.length; i++) {
        // 当前需要插入的元素
        let current = arr[i];
        // 从当前元素的前一个元素开始比较
        let j = i - 1;

        // 将比当前元素大的元素向右移动
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j]; // 向右移动元素
            console.log(j, arr)
            j--; // 继续向左比较
        }

        // 将当前元素插入到正确的位置
        arr[j + 1] = current;

        // 打印每一步的操作，帮助理解
        console.log(`第 ${i} 轮插入后: `, arr);
    }
    return arr;
}
console.log(
    insertSortOpt([
        12, 11, 13, 5, 6
    ])
)