import { describe, it, expect } from "vitest";
import jscodeshift, { API, FileInfo } from "jscodeshift";
import attentionBoxPropComponentClassNameToClassName from "../";

function applyTransform(source: string): string {
  const sourceWithImport = `
    import { AttentionBox } from "monday-ui-react-core";
    ${source}
  `;
  const fileInfo: FileInfo = { source: sourceWithImport, path: "mock/path" };

  const api: API = {
    jscodeshift,
    j: jscodeshift,
    stats: (_message: string) => {},
    report: (_message: string) => {}
  };

  return attentionBoxPropComponentClassNameToClassName(fileInfo, api);
}

function getExpectedResultWithImport(expected: string): string {
  return `
    import { AttentionBox } from "monday-ui-react-core";
    ${expected}
  `;
}

describe("attentionBoxPropComponentClassNameToClassName", () => {
  it("should change 'componentClassName' to 'className' on AttentionBox", () => {
    const input = `<AttentionBox componentClassName="old-class" />;`;
    const expected = `<AttentionBox className="old-class" />;`;
    const output = applyTransform(input);
    expect(output).toBe(getExpectedResultWithImport(expected));
  });

  it("should handle multiple AttentionBox instances", () => {
    const input = `
      <div>
        <AttentionBox componentClassName="old-class" />
        <AttentionBox componentClassName="another-class" />
      </div>;
    `;
    const expected = `
      <div>
        <AttentionBox className="old-class" />
        <AttentionBox className="another-class" />
      </div>;
    `;
    const output = applyTransform(input);
    expect(output).toBe(getExpectedResultWithImport(expected));
  });

  it("should not change other components", () => {
    const input = `<OtherComponent componentClassName="old-class" />;`;
    const output = applyTransform(input);
    expect(output).toBe(getExpectedResultWithImport(input));
  });

  it("should ignore AttentionBox without 'componentClassName'", () => {
    const input = `<AttentionBox otherProp="value" />;`;
    const output = applyTransform(input);
    expect(output).toBe(getExpectedResultWithImport(input));
  });

  it("should ignore components that have AttentionBox as prefix (AttentionBox inner components)", () => {
    const input = `<AttentionBoxLink componentClassName="value" />;`;
    const output = applyTransform(input);
    expect(output).toBe(getExpectedResultWithImport(input));
  });

  it("should work with mixed props", () => {
    const input = `<AttentionBox componentClassName="old-class" type="error" />;`;
    const expected = `<AttentionBox className="old-class" type="error" />;`;
    const output = applyTransform(input);
    expect(output).toBe(getExpectedResultWithImport(expected));
  });

  // TODO still not support this case (what should we apply? new-class or old-class?)
  it.skip("should work with both componentClassName and className prop convention assigned to AttentionBox", () => {
    const input = `<AttentionBox componentClassName="old-class" className="new-class" />;`;
    const expected = `<AttentionBox className="old-class" />;`;
    const output = applyTransform(input);
    expect(output).toBe(getExpectedResultWithImport(expected));
  });
});
