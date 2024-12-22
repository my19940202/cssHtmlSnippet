var http = require('http');
var zlib = require('zlib');
 
http.createServer(function (req, res) {
    var zlibStream;
    var encoding = req.headers['content-encoding'];
    
    // switch(encoding) {
    //     case 'gzip':
    //         zlibStream = zlib.createGunzip();
    //         break;
    //     case 'deflate':
    //         zlibStream = zlib.createInflate();
    //         break;
    //     case 'deflate-raw':
    //         zlibStream = zlib.createInflateRaw();
    //         break;
    // }
 
    res.writeHead(200, {'Content-Type': 'application/json'});
    // res.writeHead(200, {'Content-Type': 'application/json'});
    // req.pipe(zlibStream).pipe(res);
    req.pipe(res);
}).listen(8361, '127.0.0.1');