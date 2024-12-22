// 提升对于递归的认知
// 1. 递归的终止条件
// 2. 递归的执行过程

function recursiveReverse(str) {
    let ret = [];
    if (str.length === 2) {
        ret.push(str[1] + str[0]);
        console.log(ret)
        return ret;
    }
    else {
        recursiveReverse(str.slice(1, str.length));
    }
}
// function main(str) {
//     let ret = []
//     for (let idx = 0; idx < array.length; idx++) {
//         ret.push(
//             recursiveReverse(str)
//         )
//     }
// }

// 怎么把 每次执行结果 给存储起来
// console.log(
//     recursiveReverse('1234')
// )
// 从1开始：abc
// abc - a + bc, a + cb
// bca - b + ca, b + ab
// cba - c + ba, c + ab
// abcd

// 1递归问题如何转化为递归问题 f(n) = f(n-1) + f(n - 2)
// 2确定终止条件
// 3构建递归调用


// 1
// 先遍历确定一个位置，然后剩余字符串递归调用 穷尽所有排列组合情况
// 这里的要点是终止点是两个元素，但是最终结果 要和要和第一个元素拼接
// 2
// 最后都能转化到两个元素互换位置
// 3
// 这个是重点呀，怎么走到这一步


function getPermutations(str) {
    // 基础情况：如果字符串长度为 1，直接返回数组
    if (str.length <= 1) {
        return [str];
    }

    const permutations = []; // 存储所有排列结果

    // 遍历字符串中的每个字符
    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i]; // 当前字符

        // 剩余字符：去掉当前字符后的子字符串
        const remainingChars = str.slice(0, i) + str.slice(i + 1);

        // 对剩余字符递归生成排列
        const remainingPermutations = getPermutations(remainingChars);


        // 将当前字符与剩余排列组合
        for (const permutation of remainingPermutations) {
            permutations.push(currentChar + permutation);
        }
        console.log(permutations);

    }

    return permutations;
}

// 示例使用
const input = "abce";
const result = getPermutations(input);
// console.log("All permutations:", result);
// console.log("Total permutations:", result.length);


