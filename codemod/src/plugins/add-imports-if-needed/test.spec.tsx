import * as postcss from "postcss";
import { addImportsIfNeeded } from "./index";

describe("addImportsIfNeeded", () => {
  it("should add imports if they do not exist", () => {
    const root = postcss.root();
    const importsToAdd = ["import1", "import2"];

    addImportsIfNeeded(root, importsToAdd);

    let hasImport1 = false;
    let hasImport2 = false;
    root.walkAtRules("import", (rule: postcss.AtRule) => {
      if (rule.params.includes("import1")) {
        hasImport1 = true;
      }

      if (rule.params.includes("import2")) {
        hasImport2 = true;
      }
    });

    expect(hasImport1).toBeTruthy();
    expect(hasImport2).toBeTruthy();
  });

  it("should not add imports if they already exist", () => {
    const root = postcss.root();
    root.append(postcss.atRule({ name: "import", params: `'import1'` }));

    const importsToAdd = ["import1", "import2"];

    addImportsIfNeeded(root, importsToAdd);

    let importCount = 0;
    root.walkAtRules("import", () => {
      importCount++;
    });

    // Only one additional import should have been added
    expect(importCount).toBe(2);
  });
});
