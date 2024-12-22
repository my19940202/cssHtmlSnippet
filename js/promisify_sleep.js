
const {promisify} = require('util');
// 延迟函数
const timeoutSim = promisify(setTimeout);
function timeoutOri(delay) {
    return new Promise(resolve => {
        setTimeout(resolve, delay);
    });
}

function delay(t, cb) {
    setTimeout(function(){
        cb && cb();
    }, t);
}

const timeout = promisify((t, cb) => {
    setTimeout(function(){
        cb && cb();
    }, t);
});

const timeout2 = promisify(setTimeout);

async function main() {
    // console.log('start');
    await timeoutSim(1000);
    console.log(111111);
    await timeoutOri(1000);
    console.log(222222);
    // await timeout2(1000);
    // console.log('end');
}

main();