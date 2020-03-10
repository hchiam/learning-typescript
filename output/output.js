function greeter(name) {
    return 'Hello, ' + name;
}
var userName = 'Jane User';
// let invalidName = [1, 2, 3];
document.body.textContent = greeter(userName);
function greetPerson(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var person = { firstName: "Jane", lastName: "User" };
document.body.textContent = greetPerson(person);
var Student = /** @class */ (function () {
    // "public firstName: string" shorthand adds this.firstName to Student
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
