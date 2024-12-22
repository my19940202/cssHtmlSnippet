// 复习一下js prototype的使用办法

var obj = new Object();
var shuzu = new Array("21");
var obj1 = new fun();
function fun(){
};

console.log(obj1.prototype);//undefined
console.log(fun.prototype);//object Oblect


/***************************/
//对象继承的方法
//var nimei = {};
function Demo(){
    this.setName = function(name) {
        this.name = name;
    };
    this.show = function() {
        console.log(this.name);
    };
};
var woqu = new Demo();
woqu.setName('Leo');
woqu.show();

//有两种继承方法 1.原型继承
function Test(){};
Test.prototype = new Demo();
var test = new Test();
test.setName('Luigi');
test.show();

var t2 = new Test('Leo');
t2.setName('jojo');
t2.show();

//2.假冒继承   ----不怎么理解
function jqy(){
    Demo.call(this);
};
var zhangsan = new jqy();
zhangsan.setName('Faker');
zhangsan.show();

