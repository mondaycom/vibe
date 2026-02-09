import { describe, it, expect } from "vitest";
import parser from "@babel/parser";
import { generateCodeForOneLiner } from "../extract-code-samples.js";

function parseCode(code) {
  return parser.parse(code, {
    sourceType: "module",
    plugins: ["typescript", "jsx"]
  });
}

describe("generateCodeForOneLiner", () => {
  it("should return generated code for a regular variable declaration", () => {
    const code = `const myComponent = () => <div>Hello</div>;`;
    const ast = parseCode(code);

    const result = generateCodeForOneLiner(ast, "myComponent");

    expect(result).not.toBeNull();
    expect(result).toContain("const");
    expect(result).toContain("myComponent");
  });

  it("should return empty string for a createComponentTemplate call", () => {
    const code = `const myTemplate = createComponentTemplate(SomeComponent);`;
    const ast = parseCode(code);

    const result = generateCodeForOneLiner(ast, "myTemplate");

    expect(result).toBe("");
  });

  it("should return null when the variable name is not found", () => {
    const code = `const other = 42;`;
    const ast = parseCode(code);

    const result = generateCodeForOneLiner(ast, "nonExistent");

    expect(result).toBeNull();
  });

  it("should handle multiple variable declarations and find the correct one", () => {
    const code = `
      const first = createComponentTemplate(A);
      const second = () => <span>Test</span>;
      const third = 42;
    `;
    const ast = parseCode(code);

    expect(generateCodeForOneLiner(ast, "first")).toBe("");
    expect(generateCodeForOneLiner(ast, "second")).toContain("second");
    expect(generateCodeForOneLiner(ast, "third")).toContain("third");
  });

  it("should prepend 'const ' to the generated code", () => {
    const code = `const myVar = "hello";`;
    const ast = parseCode(code);

    const result = generateCodeForOneLiner(ast, "myVar");

    expect(result).toMatch(/^const /);
  });
});

describe("generateCodeForOneLiner - JSX handling", () => {
  it("should generate code for a variable with JSX value", () => {
    const code = `const myElement = <div className="wrapper"><span>Hello</span></div>;`;
    const ast = parseCode(code);

    const result = generateCodeForOneLiner(ast, "myElement");

    expect(result).toContain("myElement");
    expect(result).toContain("div");
    expect(result).toContain("wrapper");
  });

  it("should generate code for an arrow function returning JSX", () => {
    const code = `const MyComponent = () => <Button onClick={handler}>Click</Button>;`;
    const ast = parseCode(code);

    const result = generateCodeForOneLiner(ast, "MyComponent");

    expect(result).not.toBeNull();
    expect(result).toContain("MyComponent");
    expect(result).toContain("Button");
  });

  it("should handle a variable with a nested function call (not createComponentTemplate)", () => {
    const code = `const myVar = someOtherFunction(Arg1, Arg2);`;
    const ast = parseCode(code);

    const result = generateCodeForOneLiner(ast, "myVar");

    expect(result).not.toBeNull();
    expect(result).toContain("const");
    expect(result).toContain("someOtherFunction");
  });
});
