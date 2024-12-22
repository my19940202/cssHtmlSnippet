function fbnc(n) {
    var r = 0;
    if (n <= 3) {
        r = n;
    }
    else {
        r = fbnc(n - 1) + fbnc(n - 2);
    }
    return r;
}
console.log(10, fbnc(10));
console.log(15, fbnc(15));
// console.log(20, fbnc(20));
// console.log(40, fbnc(40));
console.log(30, fbnc(30));
// 从1开始：1 2 3 5 8 13 21
// f(1) = 1
// f(2) = 2
// f(3) = 3
// f(4) = f(2) + f(3) = 5
// f(n) = f(n -1) + f(n -2)
// 从0开始：0 1 1 2 3 5 8 13 21