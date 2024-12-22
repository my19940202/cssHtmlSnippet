// js算法题，模2余1，模3余2，balabala，模10余9，这数最小是多少

// 主要是通过最大公约数 + 最小公倍数求解

// 可以先推送一下主要的思路
// 2%1=3 4-1=3
// 3%2=5 2*3-1=5
// 5%4=9 2*5-1=9
// 6%5=11 2*2*3-1=11

// 基本能确定最终结果是最大公约数 - 1

// 最大公约数
// function gcd(a, b) {
//     return b ? gcd(b, a % b) : a;
// }

// // 最小公倍数
// function lcm(a, b) {
//     return a * b / gcd(a, b);
// }

function main(arr) {
    function getGcd(a, b) {
        return b ? getGcd(b, a % b) : a;
    }

    // 最大公约数 (使用辗转相除法)
    // a=16 b=12
    // 16 / 12 = 1 余 4
    // 12 / 4 = 3 余 0
    function greatCommonDigit(a, b) {
        while (b !== 0) {
            let tmp = b
            b = a % b
            a = tmp
        }
        return a
    }

    // 遍历数组 使用公约数求出最小公倍数
    let ret = arr[0]
    for (let idx = 1; idx < arr.length; idx++) {
        ret = ret * arr[idx] / greatCommonDigit(ret, arr[idx])
    }

    return ret;
}

var arr = [2, 3, 5, 6, 7, 8, 9, 10];
console.log(main(arr));