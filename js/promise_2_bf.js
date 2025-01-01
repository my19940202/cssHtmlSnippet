// 模拟请求函数
function fetchUrl(url) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`请求完成: ${url}`);
            resolve(`响应: ${url}`);
        }, Math.random() * 2000); // 随机延迟模拟网络请求
    });
}

// 并发限制函数
function limitConcurrency(urls, limit) {
    let index = 0; // 当前处理的 URL 索引
    let activeCount = 0; // 当前正在进行的请求数量
    const results = []; // 存储所有请求的结果

    // 执行单个请求
    const run = async () => {
        console.log(index, activeCount, 'index, activeCount,')
        if (index >= urls.length || activeCount >= limit) return;

        const url = urls[index++];
        activeCount++;

        try {
            const result = await fetchUrl(url);
            results.push(result);
        } catch (error) {
            results.push(`错误: ${url}`);
        } finally {
            activeCount--;
            run(); // 继续处理下一个请求
        }
    };

    // 启动初始的并发请求
    // for (let i = 0; i < limit && i < urls.length; i++) {
    //     console.log(i, 'limit')
        run();
        run();
    // }

    // 返回一个 Promise，当所有请求完成时 resolve
    return new Promise((resolve) => {
        const checkComplete = () => {
            if (activeCount === 0 && index >= urls.length) {
                resolve(results);
            } else {
                setTimeout(checkComplete, 100);
            }
        };
        checkComplete();
    });
}

// 测试代码
const urls = [
    "https://example.com/1",
    "https://example.com/2",
    "https://example.com/3",
    "https://example.com/4",
    "https://example.com/5",
    "https://example.com/6",
    "https://example.com/7",
    "https://example.com/8",
    "https://example.com/9",
    "https://example.com/10",
];

limitConcurrency(urls, 2).then((results) => {
    console.log("所有请求完成:", results);
});