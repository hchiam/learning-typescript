# Learning TypeScript

Just one of the things I'm learning. <https://github.com/hchiam/learning>

Static type checking. CLI tool to transpile to JavaScript that can run on older browsers too. Also can use constructor parameter `public` keyword as a shorthand to automatically add properties to a class. I think I really like the `interface` and `enum` part of TypeScript (e.g. as a consult-able in-code reference to help you/others remember what inputs to include or optionally have).

**Why bother with types:** For me, type checking is not only for preventing errors, but also to remind you of what data or functions you need to implement. It's like automatically-generated documentation.

## Try it live in your browser

Official Website's Playground: <https://www.typescriptlang.org/play/index.html>

## Try it locally with CLI

```bash
npm install -g typescript
```

and then

```bash
tsc code-to-compile.ts
```

or

```bash
tsc code-to-compile.ts --outDir output
```

or

```bash
tsc code-to-compile.ts --outFile output/output.js
```

More CLI transpiler options: <https://www.typescriptlang.org/docs/handbook/compiler-options.html>

Some notes on classes, interfaces, `extends`, `implements`, and `abstract`:

- `extends` and `abstract` -> enforce implementation of `abstract` functions in things that extend an `abstract` `class`.
- `implements` and `abstract` -> enforce implementation of `abstract` functions in things that implement an `interface`.
- `extends` (for a class) = `implements` (for an interface).
- But `extends` lets you reuse functions from the base class.
- An interface is just a “contract” with no implementation, but is helpful in other ways.
- `extends` does NOT enforce implementation, but the `abstract` key word in the base class DOES enforce implementation.
- `class` props are inherited, while `interface` props are not inherited, they're a contract of things you have to implement
- `class` prop `abstract` = `interface` prop, in that both are a contract of things of you to implement, but a class can also have things you inherit
- how to intentionally "hide"/"exclude" inherited props: you can instantiate with a child subclass (more props) and then type the param with the parent class (less props):
  
  ```ts
  interface child implements parent
  class child extends parent

  // you can:
  const data: child // many props

  someFunction(data) // (data: parent) in the function, still works since it's a subset of props

  public someFunction(data: parent) {
      data.lessProps // typed as parent (still transpiles with all props, but has child props hidden for typescript DX)
      ...
  }
  ```

## A YouTube Tutorial I'm Following

<https://www.youtube.com/watch?v=WBPrJSw7yQA> -> `youtube-tutorial` sub-folder.

```bash
# you should have tsc installed:
tsc --version
# transpile:
tsc main.ts --watch # or just: tsc main
```

And then you can stop and then run the compiled code in CLI:

```bash
# run js file:
node main.js
```

```ts
function getFullNameScalable(person: Person): string {
  return person.firstName + " " + person.lastName;
}
interface Person {
  firstName: string;
  middleName?: string; // optional
  lastName: string;
}
let person = {
  firstName: "Bruce",
  lastName: "Wayne",
};
console.log(getFullNameScalable(person));
```

(Aside: TypeScript defaults class members to public.)

## TypeScript [decorators](https://github.com/hchiam/learning-typescript/tree/master/decorator-example)

<https://blog.logrocket.com/a-practical-guide-to-typescript-decorators/#:~:text=Automatic%20error%20guard>

<https://github.com/hchiam/learning-typescript/tree/master/decorator-example>

## `interface` vs `type` keywords

<https://pawelgrzybek.com/typescript-interface-vs-type>

- `interface`s are restricted to object type, but tend to be used more than `type`s anyways
- `interface`s can be merged, type can't
- `type` aliases can use computed properties: `type Keys = "firstname" | "surname"`
  - but it can do more than `enum`: `type Container<T> = { value: T };` (generic)

## How to use .d.ts files (type declaration files)

<https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html>

Type declaration files are what tells TS what types things have, to give you those helpful hover messages, autocomplete, etc.

Example: to get type declarations for node (if it doesn’t already come with its [own type files bundled](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html) in):

```sh
npm install --save-dev @types/node
```

## More examples

<https://github.com/hchiam/learning-js/tree/master/ts>
