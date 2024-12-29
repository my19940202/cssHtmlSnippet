// 回溯算法是算法设计中的一种方法。
// 回溯算法是一种渐进式寻找并构建问题解决方式的策略。
// 回溯算法会先从一个可能的动作开始解决问题，如果不行，就回溯并选择另一个动作，直到将问题解决。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = [], path = [];
    backtracking(nums, nums.length, []);//调用回溯函数 传入nums，nums长度，used数组
    return res;
    
    function backtracking(n, k, used) {
        if(path.length === k) {//递归终止条件
            res.push(path.concat([])); // 数组深拷贝
            return;
        }
        for (let i = 0; i < k; i++ ) {
            if(used[i]) continue;//已经使用过了就跳过本轮循环
            path.push(n[i]);
            used[i] = true;
            console.log(path, used)
            backtracking(n, k, used);//递归
            path.pop();//回溯 将push进的元素pop出来 然后标记成未使用 继续其他分支
            used[i] = false;
        }
    }
};




// console.log(permute([1, 2, 3]));
// console.log(permute_manual([1, 2, 3]));

function permute_manual(nums) {
    let res = [];
    let path = []
    backtracking(nums, path, [])

    function backtracking(nums, path, used) {
        // 遍历底部，结束递归
        if (path.length === nums.length) {
            res.push(path.concat([]))
            return;
        }
        // 遍历所有元素，构造递归
        for (let i = 0; i < nums.length; i++) {
            // 如果已经访问 跳过防止重复path
            if (used[i]) continue;
            path.push(nums[i])
            used[i] = true;
            backtracking(nums, path, used)
            path.pop()
            used[i] = false;
        }
    }

    return res;
}

// 求所有子集
console.log(subsets([1, 2, 3]));
// function subsets(nums) {
//     let res = [[]];
//     let path = []
//     let map = {};
//     backtracking(nums, path, [])

//     function backtracking(nums, path, used) {
//         // 遍历底部，结束递归
//         if (path.length === nums.length) {
//             return;
//         }
        
//         // 遍历所有元素，构造递归
//         for (let i = 0; i < nums.length; i++) {
//             // 如果已经访问 跳过
//             if (used[i]) continue;

//             // 已标记的子集 跳过
//             path.push(nums[i])
//             let uniq_key = [...path].sort().join('');
//             if (map[uniq_key]) continue;

//             res.push(path.concat([]))
//             map[uniq_key] = true;
//             used[i] = true;

//             backtracking(nums, path, used)

//             path.pop()
//             used[i] = false;
//         }
//     }
//     console.log(map )
//     return res;
// }


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function subsets(nums) {
    let res = [[]];
    let path = []
    let map = {};
    backtracking(nums, path, [])

    function backtracking(nums, path, used) {
        // 遍历底部，结束递归
        if (path.length === nums.length) {
            return;
        }
        
        // 遍历所有元素，构造递归
        for (let i = 0; i < nums.length; i++) {
            // 如果已经访问 跳过防止重复path
            let former = [...path].sort().join('');
            if (used[i] || map[former]) continue;

            path.push(nums[i])
            used[i] = true;
            backtracking(nums, path, used)
            let uniq_key = [...path].sort().join('');
            if (!map[uniq_key]) {
                res.push(path.concat([]))
                map[uniq_key] = true;
            }
            path.pop()
            used[i] = false;
        }
    }
    return res;
};