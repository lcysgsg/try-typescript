class Student {
  fullName: string;
  constructor(public firstName, public middleInitial, public lastName) {
    this.fullName = firstName + " " + middleInitial + " " + lastName
  }
}

interface Person {
  firstName: string,
  lastName: string
}

function greeter(person: Person) {
  return `Hello, ${person.firstName + person.lastName}`
}

var user = new Student('Jasne', 'M.', 'User')

document.body.innerHTML = greeter(user)

 
/**
 * 使用 number 定义字符串类型
 */
let decLiteral: number = 6
let hexLiteral: number = 0xf00d
// ES6 中的二进制表示法, 0b1010
let binaryLiteral: number = 0b1010
// ES6 中的八进制表示法, 0o744
let octalLiteral: number = 0o744
let notANumber: number = NaN
let infinityNumber: number = Infinity

/**
 * 使用 string 定义字符串类型：
 */
let myName: string = 'Chao Yang';
let myAge: number = 20;
// 模板字符串
let sentence: string = `Hello, my name is ${myName}.
I'll be ${myAge + 1} years old next month.`;

/**
 * JavaScript 没有空值（Void）的概念
 * 在 TypeScirpt 中，可以用 void 表示没有任何返回值的函数：
 */
function alertName(): void {
  alert('My name is CHAOYANG');
}
// 声明一个 void 类型的变量没有什么用
// 因为你只能将它赋值为 undefined 和 null：
let unusable: void = undefined;
// 在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型：
// undefined 类型的变量只能被赋值为 undefined
// null 类型的变量只能被赋值为 null
let u: undefined = undefined;
let n: null = null;
// 与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
let num: number = u;
// 而 void 类型的变量不能赋值给 number 类型的变量

/**
 * 任意值类型
 * 如果是一个普通类型，在赋值过程中改变类型是不被允许的
 * 但如果是 any 类型，则允许被赋值为任意类型
 */
let myFavoriteNumber: any = 'seven';
myFavoriteNumber = 7;

// 任意值的属性和方法
// 在任意值上访问任何属性都是允许的：
let anyThing: any = {
  myName: 'lcy'
}
let firstName: object = {
  myFirstName: 'Li',
  age: 20
}
console.log(anyThing.myName);
console.log(firstName.myFirstName+ firstName.age);

// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型
let something1;
something1 = 'seven';
something1 = 7;
// 等于
let something2: any;
something2 = 'seven';
something2 = 7;

// 联合类型（Union Types）表示取值可以为多种类型中的一种。
let otherFavorite: string | number;
otherFavorite = 'seven';
otherFavorite = 7;

// 当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法
function getLength(something: string | number): string {
  return something.toString();
}

// 赋值的时候，变量的形状必须和接口的形状保持一致
interface Person1 {
  name: string,
  age: number
}

let lcy1: Person1 = {
  name: 'cyyy',
  age: 123
}

// 可选属性的含义是该属性可以不存在
interface optionsType {
  name: string,
  age?: number
}
let lcy2: optionsType = {
  name: 'cyyyy'
}

// 一旦定义了任意属性名，那么确定属性和可选属性都必须是它的子属性
// 可选属性也必须迁就任意属性名的属性
interface customerType {
  name: string,
  age?: number,
  [propName: string]: string
}
let lcy3: customerType = {
  name: 'cyyyyy',
  age: 123,
  petName: 'cy'
}

// 希望对象中的一些字段只能在创建的时候被赋值，那么可以用 readonly 定义只读属性
interface readonlyType {
  readonly id: number;
  name: string;
  age?: number;
  [propName: string]: any;
}

let lcy4: readonlyType = {
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
let fibonacci: number[] = [1, '1', 2, 3, 5];
 
fibonacci.push('8')

// 数组泛型（Generic） Array<elemType>
let genericNumber: Array<number> = [1,2,3,4,5,6]

// 接口也可以用来描述数组
interface NumberArray {
  [index: number]: string;
}
let nonc: NumberArray = [1]

// 泛型约束
// 函数内部使用泛型变量的时候，由于事先不知道它是哪种类型，所以不能随意的操作它的属性或方法
interface Lengthwise {
  length: number
}
function loggingIdentity<T extends Lengthwise>(arg: T) {
  console.log(arg)
  return arg
}
loggingIdentity<string>('1234321')

// 类数组（Array-like Object）不是数组类型

function sum(x: number, y: number): string{
  console.log(`${x} + ${y}`)
  console.log(x + y)
  console.log(`${x + y}`)
  return `${x + y}`
}
sum(1,5)

let mySum: (x: number, y: number) => string = function (x: number, y: number): number {
  var q = '' + x + y
  return q
}

// 接口中函数的定义
interface SearchFunc{
  (source: string, subString: string): boolean
}
let mySearch: SearchFunc
mySearch = function (source: string, subString: string){
  return source.search(subString) !== -1
}

// ES6 中，可以使用 ...rest 的方式获取函数中的剩余参数（rest 参数）
function push(array: any[], ...items: any[]) {
  items.forEach(function(item) {
    array.push(item);
  });
}

let a = [];
push(a, 1, 2, 3);

// 重载允许一个函数接受不同数量或类型的参数时，作出不同的处理
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else if (typeof x === 'string') {
    return x.split('').reverse().join('');
  }
}

// 类型断言（Type Assertion）可以用来绕过编译器的类型推断，手动指定一个值的类型（即程序员对编译器断言）
/**
 *  <类型>值

    // 或

    值 as 类型

    // 在TSX语法 (React的JSX语法的TS版）中必须用后一种
 */
function getLength2(something: string | number): number {
  if ((<string>something).length) {
    return (<string>something).length;
  } else {
    return something.toString().length;
  }
}


// 声明语句
declare var jQuery: (string) => any;

jQuery('#foo');
// 通常我们会把类型声明放到一个单独的文件中，这就是声明文件：
// jQuery.d.ts

declare var jQuery: (string) => any;
// 然后在使用到的文件的开头，用「三斜线指令」表示引用了声明文件：
/// <reference path="./jQuery.d.ts" />

jQuery('#foo');

// 社区已经有多种方式引入声明文件，不过 TypeScript 2.0 推荐使用 @types 来管理。

// @types 的使用方式很简单，直接用 npm 安装对应的声明模块即可，以 jQuery 举例：
// npm install @types/jquery --save-dev
// http://microsoft.github.io/TypeSearch/

export {
  
}