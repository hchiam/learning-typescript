export {};

// types are optional:
let message = 'Bonjour le monde';
console.log(message);

let isBeginning: boolean = true;
let total: number = 0;
let name: string = 'Jean';
// name = true; // will show error (since string; not if "any" type)
// name. // will get string-related IntelliSense
let sentence: string = `Mon nom, c'est ${name}. J'suis débutant en TypeScript.`;
console.log(sentence);

let n: null = null; // treated as a sub-type, and can be assigned to other types
let u: undefined = undefined; // treated as a sub-type, and can be assigned to other types

let isNew: boolean = null;
let myName: string = undefined;

// single-typed arrays:
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// mixed-typed "array" (but with fixed number of items) = tuple:
let person1: [string, number] = ['Chrétien', 23]; // but cannot ['Chrétien', 23, 45];

// enum (with custom number assignments possible):
enum Colour {Red, Green = 9, Blue};
let c: Colour = Colour.Blue;
console.log(c);

let randomValue: any = 10;
randomValue = true;
randomValue = 'Jean';

// // PROBLEM: these will NOT error (but should):
// console.log(randomValue.name);
// randomValue();
// randomValue.toUpperCase();

// // SOLUTION: use "unknown" type instead of "any" in TS 3.0+
let smarterFlexibleVariable: unknown = 10;
// console.log(smarterFlexibleVariable.name); // will error
// smarterFlexibleVariable(); // will error
// smarterFlexibleVariable.toLocaleUpperCase(); // will error
// // but we can explicitly cast type to reassure the transpiler that we know what we're doing:
// (smarterFlexibleVariable as string).toLocaleUpperCase(); // will error on run

// this function takes an any, returns an obj with prop name as string
function hasName(obj: any): obj is { name: string } {
  return !!obj &&
    typeof obj === 'object' &&
    'name' in obj;
}

if (hasName(smarterFlexibleVariable)) {
  console.log(smarterFlexibleVariable.name);
}

let multiType: number | boolean; // <-- union/"list" of permitted types
multiType = 20; // both work without errors
multiType = true; // both work without errors
// multiType = 'some string'; // will error

function add(a: number, b: number): number {
  return a + b;
}
add(1, 2);
// add(5, '10'); // will error
// add(1); // will error because
// TypeScript defaults to parameters as required,
// unless explicitly marked as optional (and must be last parameters):
function addWithOptional(a: number, b?: number): number {
  if (b) return a + b;
  return a;
}
addWithOptional(1, 2); // both work without errors
addWithOptional(1); // both work without errors

function addWithDefault(a: number, b: number = 10): number {
  return a + b;
}
addWithDefault(1, 2); // both work without errors
addWithDefault(1); // both work without errors

// You can USE a whole OBJECT as a type!
function getFullName(person: {firstName: string, lastName: string}): string {
  return person.firstName + ' ' + person.lastName;
}
let p = {
  firstName: 'Bat',
  lastName: 'Man',
};
console.log(getFullName(p));

// OR use an interface for potentially more D.R.Y. code:
function getFullNameScalable(person: Person): string {
  return person.firstName + ' ' + person.lastName;
}
interface Person {
  firstName: string,
  middleName?: string, // optional
  lastName: string,
};
let person = {
  firstName: 'Bruce',
  lastName: 'Wayne',
};
console.log(getFullNameScalable(person));

class Employee {
  employeeName: string; // members are public by default in TypeScript
  private privateDataThatCannotBeInherited: string; // hidden but canNOT be inherited
  protected employeeBadgeId: string; // hidden but can be inherited

  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    console.log(`Guten Morgen. Ich bin ${this.employeeName}. Ich arbeite in Ihrer Firma.`);
  }
}
let employee1 = new Employee('Jean');
console.log(employee1.employeeName);
employee1.greet();

// inheritance example:
class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }
  delegateWork() {
    console.log(`Je m'appelle ${this.employeeName}. Je suis directeur. Travaillez, SVP !`);
  }
}
let manager1 = new Manager('Hugues');
manager1.delegateWork();
manager1.greet();
// manager1.employeeBadgeId; // error because hidden
// manager1.privateDataThatCannotBeInherited; // error because cannot inherit
