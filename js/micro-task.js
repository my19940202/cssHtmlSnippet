async;
function async1() {
    console.log('1');
    await;
    async2();
    console.log('2');
}
async;
function async2() {
    console.log('3');
}
console.log('4'); //同步立即执行
setTimeout(function () {
    console.log('5');
}, 0); //宏任务
async1();
// new Promise(function(resolve){
//     console.log('6')
//     resolve();
// }).then(function(){
//     console.log('7')
// })
// console.log('8')
