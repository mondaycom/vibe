import { describe, it, expect } from "vitest";
import jscodeshift, { API, FileInfo } from "jscodeshift";
import namedNextImportToNamedRegularImport from "../";

function applyTransform(source: string): string {
  const fileInfo: FileInfo = { source, path: "mock/path" };

  const api: API = {
    jscodeshift,
    j: jscodeshift,
    stats: (_message: string) => {},
    report: (_message: string) => {}
  };

  return namedNextImportToNamedRegularImport(fileInfo, api);
}

describe("namedNextImportToNamedRegularImport", () => {
  it("should convert a single 'next' import to a 'regular' import", () => {
    const input = `import { Button } from "monday-ui-react-core/next";`;
    const output = applyTransform(input);
    expect(output).toBe(`import { Button } from "monday-ui-react-core";`);
  });

  it("should merge multiple 'next' imports into a single 'regular' import", () => {
    const input = `
      import { Button } from "monday-ui-react-core/next";
      import { Icon } from "monday-ui-react-core/next";
    `;
    const expected = `
      import { Button, Icon } from "monday-ui-react-core";
    `;
    const output = applyTransform(input);
    expect(output).toBe(expected);
  });

  it("should merge a single 'next' import and a single 'regular' import into one", () => {
    const input = `
      import { Button } from "monday-ui-react-core/next";
      import { Icon } from "monday-ui-react-core";
    `;
    const expected = `
      import { Icon, Button } from "monday-ui-react-core";
    `;
    const output = applyTransform(input);
    expect(output).toBe(expected);
  });

  it("should handle merging multiple 'next' imports with a single 'regular' import effectively", () => {
    const input = `
      import { Button, Tooltip } from "monday-ui-react-core/next";
      import { Icon } from "monday-ui-react-core";
    `;
    const expected = `
      import { Icon, Button, Tooltip } from "monday-ui-react-core";
    `;
    const output = applyTransform(input);
    expect(output).toBe(expected);
  });

  it("should do nothing if there are no 'next' imports", () => {
    const input = `import { Icon } from "monday-ui-react-core";`;
    const output = applyTransform(input);
    expect(output).toBe(input);
  });

  it("should do nothing if there are no vibe imports", () => {
    const input = `import { Icon } from "mydesignsystem/next";`;
    const output = applyTransform(input);
    expect(output).toBe(input);
  });

  it("should make no changes when there are no imports at all", () => {
    const input = `console.log('No imports here');`;
    const output = applyTransform(input);
    expect(output).toBe(input);
  });

  it("should merge multiple 'next' and multiple followed 'regular' imports to first 'regular' import", () => {
    const input = `
      import { Tooltip } from "monday-ui-react-core/next";
      import { Search } from "monday-ui-react-core/next";
      import { Button, Icon } from "monday-ui-react-core";
      import { Accordion } from "monday-ui-react-core";
    `;
    const expected = `
      import { Button, Icon, Tooltip, Search } from "monday-ui-react-core";
      import { Accordion } from "monday-ui-react-core";
    `;
    const output = applyTransform(input);
    expect(output).toBe(expected);
  });

  it("should merge multiple 'next' and multiple unordered 'regular' imports to first 'regular' import", () => {
    const input = `
      import { Button, Icon } from "monday-ui-react-core";
      import { Accordion } from "monday-ui-react-core";
      import { Tooltip } from "monday-ui-react-core/next";
      import { Search } from "monday-ui-react-core/next";
      import { Something } from "monday-ui-react-core";
    `;
    const expected = `
      import { Button, Icon, Tooltip, Search } from "monday-ui-react-core";
      import { Accordion } from "monday-ui-react-core";
      import { Something } from "monday-ui-react-core";
    `;
    const output = applyTransform(input);
    expect(output).toBe(expected);
  });

  it("should position new import in the same position as before", () => {
    const input = `
      import React from "react";
      import cx from "classnames";
      import { Tooltip } from "monday-ui-react-core/next";
      import { Button } from "monday-ui-react-core";
      import styles from "MyComponent.module.css";
    `;
    const expected = `
      import React from "react";
      import cx from "classnames";
      import { Button, Tooltip } from "monday-ui-react-core";
      import styles from "MyComponent.module.css";
    `;
    const output = applyTransform(input);
    expect(output).toBe(expected);
  });

  it("should do nothing when no named imports from next", () => {
    const input = `
      import VibeNext from "monday-ui-react-core/next";
      import { Something } from "monday-ui-react-core";
    `;
    const expected = `
      import VibeNext from "monday-ui-react-core/next";
      import { Something } from "monday-ui-react-core";
    `;
    const output = applyTransform(input);
    expect(output).toBe(expected);
  });
});
