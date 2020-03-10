function greeter(name: string) {
  return 'Hello, ' + name;
}

let userName = 'Jane User';
// let invalidName = [1, 2, 3];

document.body.textContent = greeter(userName);

interface Person {
  firstName: string;
  lastName: string;
}

function greetPerson(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let person = { firstName: "Jane", lastName: "User" };

document.body.textContent = greetPerson(person);

class Student {
  fullName: string;
  // "public firstName: string" shorthand adds this.firstName to Student
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
      this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}
