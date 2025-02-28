const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('start this middleware 1');
    next();
    console.log('end this middleware 1');
});
app.use((req, res, next) => {
    console.log('start this middleware 2');
    res.send('middleware 2');
    // next();
});
app.use(/\/404/g, (req, res, next) => {
    console.log('start this middleware for 404');
    next();
    console.log('end this middleware for 404');
});

app.get('/', function (req, res) {
    res.send('index');
});
app.get('/404', function (req, res) {
    // setTimeout(() => {
    //     var a = new Error('this is error');
    //     console.log('a');
    //     throw a;
    // }, 1000 * 1);
    // setTimeout(() => {
    //     console.log('this is error');
    // }, 1000 * 2);
    // setTimeout(() => {
    //     res.send('404');
    // }, 1000 * 10);
    res.setHeader("Referer", "XXXX");
    res.send('404 page');
});

app.listen(8818);

process.on('uncaughtException', err => {
    console.error('Got uncaughtException Error!', err);
});
