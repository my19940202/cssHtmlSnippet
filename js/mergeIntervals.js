// 这个题目遇到了两次 需要好好复习一下
// 解题思路：
// 1. 首先检查输入的区间数组是否为空，如果为空，直接返回空数组。
// 2. 对区间数组进行排序，按照每个区间的起始值进行升序排列，这样可以方便后续的合并操作。
// 3. 初始化一个合并后的区间数组，首先将第一个区间添加进去。
// 4. 遍历排序后的区间数组，从第二个区间开始，依次检查每个区间：
//    - 如果当前区间的起始值小于等于上一个合并区间的结束值，说明这两个区间有重叠，
//      则更新上一个合并区间的结束值为这两个区间结束值的较大者。
//    - 如果没有重叠，则将当前区间添加到合并数组中。
// 5. 最后返回合并后的区间数组。

function mergeIntervals(intervals) {
    if (intervals.length === 0) {
        return [];
    }
    intervals.sort((a, b) => a[0] - b[0]);
    const merged = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i];
        const lastMerged = merged[merged.length - 1];
        if (current[0] <= lastMerged[1]) {
            lastMerged[1] = Math.max(lastMerged[1], current[1]);
        } else {
            merged.push(current);
        }
    }
    return merged;
}

// 这道题目没有理解  需要手动去梳理理解一遍
