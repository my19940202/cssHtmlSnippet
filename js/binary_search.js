/**
 * @param {number[]} nums 升序数组
 * @param {number} target 要找到的数字
 * @return {number} 返回目标值的索引，如果不存在则返回 -1
 */
// 二分查找算法，查找次数为 log2(nums.length)
var search = function(nums, target) {
    let count = 0; // 记录查找次数
    let max = Math.round(Math.log2(nums.length)); // 最大查找次数
    let idx = Math.floor(nums.length / 2); // 初始中间索引
    while (count <= max) {
        console.log('idx', idx);
        // 当前值偏小，继续右移
        if (nums[idx] < target) {
            idx = Math.floor(idx + idx / 2);
        }
        // 当前值偏大，继续左移
        else if (nums[idx] > target) {
            idx = Math.floor(idx - idx / 2);
        }
        // 找到目标值，返回索引
        else {
            return idx;
        }
        count++;
    }
    // 未找到目标值，返回 -1
    return -1;
};

console.log(
    'result', search([-1,0,3,5,9,12], 9) // 输出结果为 4
);

console.log(
    'result', search( [-1,0,3,5,9,12], 2) // 输出结果为 -1
);