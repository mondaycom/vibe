import { describe, it, expect } from "vitest";
import jscodeshift, { API, FileInfo } from "jscodeshift";
import chipsRemovePropClickable from "../";

function applyTransform(source: string): string {
  const sourceWithImport = `
    import { Chips } from "monday-ui-react-core";
    ${source}
  `;
  const fileInfo: FileInfo = { source: sourceWithImport, path: "mock/path" };

  const api: API = {
    jscodeshift,
    j: jscodeshift,
    stats: (_message: string) => {},
    report: (_message: string) => {}
  };

  return chipsRemovePropClickable(fileInfo, api);
}

function getExpectedResultWithImport(expected: string): string {
  return `
    import { Chips } from "monday-ui-react-core";
    ${expected}
  `;
}

describe("chipsRemovePropClickable", () => {
  it("should remove 'clickable' prop from Chips", () => {
    const input = `<Chips clickable />;`;
    const expected = `<Chips />;`;
    const output = applyTransform(input);
    expect(output).toBe(getExpectedResultWithImport(expected));
  });

  it("should handle multiple Chips instances", () => {
    const input = `
      <div>
        <Chips clickable />
        <Chips clickable />
      </div>;
    `;
    const expected = `
      <div>
        <Chips />
        <Chips />
      </div>;
    `;
    const output = applyTransform(input);
    expect(output).toBe(getExpectedResultWithImport(expected));
  });

  it("should not change other components", () => {
    const input = `<OtherComponent clickable />;`;
    const output = applyTransform(input);
    expect(output).toBe(getExpectedResultWithImport(input));
  });

  it("should ignore Chips without 'clickable' prop", () => {
    const input = `<Chips />;`;
    const output = applyTransform(input);
    expect(output).toBe(getExpectedResultWithImport(input));
  });

  it("should work when Chips has multiple props, including 'clickable'", () => {
    const input = `<Chips clickable type="error" />;`;
    const expected = `<Chips type="error" />;`;
    const output = applyTransform(input);
    expect(output).toBe(getExpectedResultWithImport(expected));
  });
});
