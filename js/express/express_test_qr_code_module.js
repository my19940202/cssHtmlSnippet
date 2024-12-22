const express = require('express');
const app = express();
var qr = require('qr-image');

app.get('/', function (req, res) {
    try {
        var img = qr.image('http://baidu.com/',{size :10});
        res.writeHead(200, {'Content-Type': 'image/png'});
        img.pipe(res);
    } catch (e) {
        res.writeHead(414, {'Content-Type': 'text/html'});
        res.end('<h1>414 Request-URI Too Large</h1>');
    }
});
app.listen(8018);