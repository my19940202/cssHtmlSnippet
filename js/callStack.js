var name = 'copyer'
var age = 18
foo()
function foo() {
    var foo_var = 'foo_context';
    hoo()
    console.log('result')
}
/**
 * Function hoo
 * Logs the current call stack trace and calls the ioo function.
 * 
 * @function hoo
 * @returns {void}
 */
function hoo() {
    var hoo_var = 'hoo_context';
    console.trace()
    ioo()
}
function ioo() {
    var ioo_var = 'ioo_context';
    console.trace()
    joo()
}
function joo() {
    var joo_var = 'joo_context';
    console.trace()
}
