// 这个题目遇到了两次 需要好好复习一下
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
