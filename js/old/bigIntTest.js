var bigInt = require("big-integer");
console.log('bigInt');
var largeNumber = bigInt("576742484978173067");

console.log(
    largeNumber.shiftRight(10),
    largeNumber.shiftRight(5)
);
// 576742484978173067
// 563225082986497
// 18023202655567908
