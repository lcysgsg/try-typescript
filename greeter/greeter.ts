class Student {
  fullName: string;
  constructor(public firstName, public middleInitial, public lastName) {
    this.fullName = firstName + " " + middleInitial + " " + lastName
  }
}

interface Person {
  firstName: string,
  lastName: string,
  number: number
}

function greeter(person: Person) {
  return `Hello, ${person.firstName + person.lastName}`
}

var user = new Student('Jasne', 'M.', 'User')

document.body.innerHTML = greeter(user)


let decLiteral: numbner = 6;

