// 成语接龙 求出最长的成语接龙的数组

function chengyujielong(wordList) {
    console.log('wordList', wordList);
    // 先按照首字母排序
    wordList.sort((a, b) => a[0].charAt() - b[0].charAt())
    // console.log(wordList, 'wordList')

    // 遍历数组
    let count = 0;
    let arr = [
        [wordList[0]]
    ]
    for (let i = 1; i < wordList.length; i++) {
        const previus = wordList[i - 1];
        const current = wordList[i];
        let prefix = current[0]
        // 找到数组里面 能够拼接的 然后拼接上
        arr.some(ele => {
            if (ele && ele[ele.length - 1] && ele[ele.length - 1].endsWith(prefix)) {
                ele.push(current)
            }
            else {
                arr.push([current])
            }
        })
        // if (suffix === prefix) {
        //     count++
        //     arr.push(...[previus, current])
        // }
        // else {

        // }
        // const lastMerged = merged[merged.length - 1];
        // if (current[0] <= lastMerged[1]) {
        //     lastMerged[1] = Math.max(lastMerged[1], current[1]);
        // }
        // else {
        //     merged.push(current);
        // }
    }
    console.log(arr, count)
}

chengyujielong(['1XX4', '5XX6', '1XX2', '2XX3']) // 1xx2 2xx3

chengyujielong(
    ['1234', '2125', '4237', '5236', '1232']
) // 1232 2125 5236
