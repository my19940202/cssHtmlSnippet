function jojo(a, b) {
    if (b === void 0) { b = {}; }
    console.log('a:', a, ' b:', b);
}
jojo('1234123', undefined);
jojo('1234123');
jojo('1234123', null);
