console.log('start');

const topics = [1,1,1,1,1,2,1,1,1,1];

async function main() {
    try {
        for (let i = 0; i < topics.length; i++) {
            console.log(i, ':timeout');
            // catch后for循环不中断 catch了单条语句的异常 此处不catch循环就中断了
            await timeout(topics[i]).catch(err => {
                console.log('error from await catch', err);
            });
        }
    }
    catch (err) {
        // catch后for循环中断
        console.log('error from try catch', err);
    }
}

function timeout(delay) {
    return new Promise((resolve, reject) => {
        if (delay === 2) {
            reject(delay);
        }
        setTimeout(resolve, delay * 1000);
    });
}

main();

console.log('end');