// 解析罗马数字
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // 采用Map按照顺序遍历 输出对应的结果
    const map = new Map([
        ['IV', 4],
        ['IX', 9],
        ['XL', 40],
        ['XC', 90],
        ['CD', 400],
        ['CM', 900],
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ]);
    let sum = 0;
    // 采用正则替换的方式，最后s为空，就停止
    while (s.length > 0) {
        for (const [key, value] of map) {
            if (s.includes(key)) {
                sum += value;
                s = s.replace(key, '');
            }
        }
    }
    return sum;
};

romanToInt('IV')