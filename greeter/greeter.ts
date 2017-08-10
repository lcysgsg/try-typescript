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