# Learning TypeScript

Just one of the things I'm learning. <https://github.com/hchiam/learning>

Static type checking. CLI tool to transpile to JavaScript that can run on older browsers too. Also can use constructor parameter `public` keyword as a shorthand to automatically add properties to a class. I think I really like the `interface` and `enum` part of TypeScript (e.g. as a consult-able in-code reference to help you/others remember what inputs to include or optionally have).

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

- `extends` (for a class) = `implements` (for an interface).
- But `extends` lets you reuse functions from the base class.
- An interface is just a “contract” with no implementation, but is helpful in other ways.
- `extends` does NOT enforce implementation, but the `abstract` key word in the base class DOES enforce implementation.

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
```

(Aside: TypeScript defaults class members to public.)
