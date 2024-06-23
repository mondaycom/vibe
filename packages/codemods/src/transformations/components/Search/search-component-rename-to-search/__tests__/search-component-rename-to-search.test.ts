import { describe, it, expect } from "vitest";
import jscodeshift, { API, FileInfo } from "jscodeshift";
import searchComponentRenameToSearch from "..";

function applyTransform(source: string): string {
  const fileInfo: FileInfo = { source, path: "mock/path" };

  const api: API = {
    jscodeshift,
    j: jscodeshift,
    stats: (_message: string) => {},
    report: (_message: string) => {}
  };

  return searchComponentRenameToSearch(fileInfo, api);
}

describe("searchComponentRenameToSearch", () => {
  it("should rename 'SearchComponent' to 'Search' in import statements and JSX usages", () => {
    const input = `
      import { SearchComponent } from "monday-ui-react-core";
      const Example = () => <SearchComponent />;
    `;
    const expected = `
      import { Search } from "monday-ui-react-core";
      const Example = () => <Search />;
    `;
    const output = applyTransform(input);
    expect(output.trim()).toBe(expected.trim());
  });

  it("should handle multiple instances of 'SearchComponent' usage", () => {
    const input = `
      import { SearchComponent } from "monday-ui-react-core";
      const Example = () => (
        <div>
          <SearchComponent />
          <SearchComponent />
        </div>
      );
    `;
    const expected = `
      import { Search } from "monday-ui-react-core";
      const Example = () => (
        <div>
          <Search />
          <Search />
        </div>
      );
    `;
    const output = applyTransform(input);
    expect(output.trim()).toBe(expected.trim());
  });

  it("should not affect other imports or components", () => {
    const input = `
      import { AnotherComponent } from "monday-ui-react-core";
      const Example = () => <AnotherComponent />;
    `;
    const expected = input; // No changes should be made
    const output = applyTransform(input);
    expect(output.trim()).toBe(expected.trim());
  });

  it("should only rename imports and usages where the name 'SearchComponent' is specifically used", () => {
    const input = `
      import { SearchComponent as SC } from "monday-ui-react-core";
      const Example = () => <SC />;
    `;
    const expected = `
      import { Search as SC } from "monday-ui-react-core";
      const Example = () => <SC />;
    `;
    const output = applyTransform(input);
    expect(output.trim()).toBe(expected.trim());
  });
});
