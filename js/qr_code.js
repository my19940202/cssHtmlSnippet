var urlLib = require('url');
var dns = require('dns');
var request = require("request"); //这里使用request模块进行http访问 https://github.com/request/request
const args = process.argv.splice(2);
const urlString = args && args[0];

var QRCode = require('qrcode')

QRCode.toDataURL('http://baidu.com', function (err, url) {
    console.log(url);
})
