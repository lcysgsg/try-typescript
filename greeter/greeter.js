"use strict";
var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + (person.firstName + person.lastName);
}
var user = new Student('Jasne', 'M.', 'User');
document.body.innerHTML = greeter(user);
/**
 * 使用 number 定义字符串类型
 */
var decLiteral = 6;
var hexLiteral = 0xf00d;
// ES6 中的二进制表示法, 0b1010
var binaryLiteral = 10;
// ES6 中的八进制表示法, 0o744
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
/**
 * 使用 string 定义字符串类型：
 */
var myName = 'Chao Yang';
var myAge = 20;
// 模板字符串
var sentence = "Hello, my name is " + myName + ".\nI'll be " + (myAge + 1) + " years old next month.";
/**
 * JavaScript 没有空值（Void）的概念
 * 在 TypeScirpt 中，可以用 void 表示没有任何返回值的函数：
 */
function alertName() {
    alert('My name is CHAOYANG');
}
// 声明一个 void 类型的变量没有什么用
// 因为你只能将它赋值为 undefined 和 null：
var unusable = undefined;
// 在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型：
// undefined 类型的变量只能被赋值为 undefined
// null 类型的变量只能被赋值为 null
var u = undefined;
var n = null;
// 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
var num = u;
// 而 void 类型的变量不能赋值给 number 类型的变量
/**
 * 任意值类型
 * 如果是一个普通类型，在赋值过程中改变类型是不被允许的
 * 但如果是 any 类型，则允许被赋值为任意类型
 */
var myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
// 任意值的属性和方法
// 在任意值上访问任何属性都是允许的：
var anyThing = {
    myName: 'lcy'
};
var firstName = {
    myFirstName: 'Li',
    age: 20
};
console.log(anyThing.myName);
console.log(firstName.myFirstName + firstName.age);
// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型
var something1;
something1 = 'seven';
something1 = 7;
// 等于
var something2;
something2 = 'seven';
something2 = 7;
// 联合类型（Union Types）表示取值可以为多种类型中的一种。
var otherFavorite;
otherFavorite = 'seven';
otherFavorite = 7;
// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法
function getLength(something) {
    return something.toString();
}
var lcy1 = {
    name: 'cyyy',
    age: 123
};
var lcy2 = {
    name: 'cyyyy'
};
var lcy3 = {
    name: 'cyyyyy',
    age: 123,
    petName: 'cy'
};
var lcy4 = {
    id: 12345,
    name: 'cyyyyyy',
    petName: 'cy'
};
lcy4.id = 9527;
/**
 * 数组类型有多种定义的方式
 */
// 「类型 + 方括号」表示法
// 不允许出现其他的类型
var fibonacci = [1, '1', 2, 3, 5];
fibonacci.push('8');
// 数组泛型（Generic） Array<elemType>
var genericNumber = [1, 2, 3, 4, 5, 6];
var nonc = [1];
function loggingIdentity(arg) {
    console.log(arg);
    return arg;
}
loggingIdentity('1234321');
// 类数组（Array-like Object）不是数组类型
function sum(x, y) {
    console.log(x + " + " + y);
    console.log(x + y);
    var a = '' + (x + y)
    console.log(a);
    console.log(typeof a);
    return "" + (x + y);
}
sum(1, 5);
