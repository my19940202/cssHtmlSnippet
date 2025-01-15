// 示例1: 对象方法中的this
const obj = {
    name: 'object name',
    sayName() {
        console.log(this.name)
    },
    child: {
        name: 'child name',
        sayName() {
            console.log(this.name)
        }
    }
}
obj.sayName() // 输出: "object name" - this指向调用方法的对象obj
obj.child.sayName() // 输出: "child name" - this指向child对象

// 示例2: call/apply/bind改变this指向
const person1 = { name: 'person1' }
const person2 = { name: 'person2' }

function greet() {
    console.log(`Hello, ${this.name}!`)
}

greet.call(person1) // 输出: "Hello, person1!" - this被绑定到person1
greet.apply(person2) // 输出: "Hello, person2!" - this被绑定到person2
const greetPerson1 = greet.bind(person1) // bind返回新函数,this永久绑定到person1
greetPerson1() // 输出: "Hello, person1!"

// 示例3: 构造函数中的this
function Car(brand) {
    this.brand = brand
    // 1. 这种方式会为每个实例创建一个新的函数对象,占用更多内存
    // 2. 每个实例的getBrand方法都是独立的,不共享同一个函数
    this.getBrand = function() {
        console.log(this.brand)
    }
    // 对比 Car.prototype.getBrand:
    // 1. 原型方法会被所有实例共享,更节省内存
    // 2. 所有实例调用的都是原型链上的同一个方法
    // 3. 功能上两种方式没有区别,this都指向调用该方法的实例

    // 注意这里的箭头函数
    this.getBrandArrow = () => {
        console.log(this.brand)
    }
}

const car = new Car('Toyota')
const getBrand = car.getBrand
const getBrandArrow = car.getBrandArrow

car.getBrand() // 输出: "Toyota" - 作为方法调用,this指向car实例
getBrand() // 输出: undefined - 普通函数调用,this指向全局对象(非严格模式)或undefined(严格模式)
car.getBrandArrow() // 输出: "Toyota" - 箭头函数的this继承自构造函数的this
getBrandArrow() // 输出: "Toyota" - 箭头函数的this已经在定义时确定,不会改变

// 示例4: DOM事件处理中的this
/*
// 在浏览器环境中:
button.addEventListener('click', function() {
    console.log(this) // this指向触发事件的DOM元素(button)
})

button.addEventListener('click', () => {
    console.log(this) // this继承自外层作用域
})
*/