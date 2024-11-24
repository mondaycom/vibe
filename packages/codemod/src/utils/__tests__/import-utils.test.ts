import jscodeshift from "jscodeshift";
import {
  findImportsThatIncludesSpecifier,
  getComponentNameOrAliasFromImports,
  getCoreImportsForFile,
  removeSpecifierFromImport,
  updateImportSpecifierName
} from "../import-utils";

const j = jscodeshift.withParser("tsx");

describe("Import Utils", () => {
  describe("findImportsThatIncludesSpecifier", () => {
    const testCases = [
      {
        description: "should find imports that include the specified specifier",
        source: `
        import { Button } from "monday-ui-react-core";
        import { Input } from "monday-ui-react-core";
      `,
        specifierName: "Button",
        expectedImports: [`import { Button } from "monday-ui-react-core";`]
      },
      {
        description: "should return an empty collection if no import includes the specified specifier",
        source: `
        import { Input } from "monday-ui-react-core";
        import { Card } from "monday-ui-react-core";
      `,
        specifierName: "Button",
        expectedImports: []
      },
      {
        description: "should find multiple imports that include the specified specifier",
        source: `
        import { Button } from "monday-ui-react-core";
        import { Button as Btn, Input } from "monday-ui-react-core";
      `,
        specifierName: "Button",
        expectedImports: [
          `import { Button } from "monday-ui-react-core";`,
          `import { Button as Btn, Input } from "monday-ui-react-core";`
        ]
      },
      {
        description: "should find imports with aliased specifiers",
        source: `
        import { Button as Btn } from "monday-ui-react-core";
        import { Input } from "monday-ui-react-core";
      `,
        specifierName: "Button",
        expectedImports: [`import { Button as Btn } from "monday-ui-react-core";`]
      },
      {
        description: "should ignore specifiers that are not the target",
        source: `
        import { Input } from "monday-ui-react-core";
        import { Button } from "another-library";
      `,
        specifierName: "Button",
        expectedImports: []
      }
    ];

    testCases.forEach(({ description, source, specifierName, expectedImports }) => {
      it(description, () => {
        const root = j(source);
        const coreImportDeclarations = getCoreImportsForFile(root);
        const result = findImportsThatIncludesSpecifier(j, coreImportDeclarations, specifierName);
        const output = result.nodes().map(node => j(node).toSource());
        expect(output).toEqual(expectedImports);
      });
    });
  });

  describe("updateImportSpecifierName", () => {
    const testCases = [
      {
        description: "should update the import specifier name",
        source: `import { OldName } from "monday-ui-react-core";`,
        oldName: "OldName",
        newName: "NewName",
        expected: `import { NewName } from "monday-ui-react-core";`
      },
      {
        description: "should update the import specifier name and keep the alias",
        source: `import { OldName as AliasName } from "monday-ui-react-core";`,
        oldName: "OldName",
        newName: "NewName",
        expected: `import { NewName as AliasName } from "monday-ui-react-core";`
      },
      {
        description: "should not change anything if the specifier name does not match",
        source: `import { AnotherName } from "monday-ui-react-core";`,
        oldName: "OldName",
        newName: "NewName",
        expected: `import { AnotherName } from "monday-ui-react-core";`
      }
    ];

    testCases.forEach(({ description, source, oldName, newName, expected }) => {
      it(description, () => {
        const root = j(source);
        const coreImports = getCoreImportsForFile(root);
        const coreImportDeclarationsPath = coreImports.paths()[0];
        updateImportSpecifierName(j, coreImportDeclarationsPath, oldName, newName);
        const output = j(coreImportDeclarationsPath).toSource();
        expect(output).toBe(expected);
      });
    });
  });

  describe("removeSpecifierFromImport", () => {
    const testCases = [
      {
        description: "should remove the specified import specifier",
        source: `import { Button, Input } from "monday-ui-react-core";`,
        specifierName: "Button",
        expected: `import { Input } from "monday-ui-react-core";`
      },
      {
        description: "should remove the entire import declaration if it was the last specifier",
        source: `import { Button } from "monday-ui-react-core";`,
        specifierName: "Button",
        expected: ``
      },
      {
        description: "should do nothing if the specifier is not found",
        source: `import { Button, Input } from "monday-ui-react-core";`,
        specifierName: "Card",
        expected: `import { Button, Input } from "monday-ui-react-core";`
      },
      {
        description: "should remove only the matching specifier and leave others intact",
        source: `import { Button, Input, Card } from "monday-ui-react-core";`,
        specifierName: "Input",
        expected: `import { Button, Card } from "monday-ui-react-core";`
      },
      {
        description: "should handle multiple imports and remove the specified one",
        source: `
        import { Button, Input } from "monday-ui-react-core";
        import { Card } from "monday-ui-react-core";
      `,
        specifierName: "Input",
        expected: `
        import { Button } from "monday-ui-react-core";
        import { Card } from "monday-ui-react-core";
      `
      }
    ];

    testCases.forEach(({ description, source, specifierName, expected }) => {
      it(description, () => {
        const root = j(source);
        const importDeclarationPath = root.find(j.ImportDeclaration).paths()[0];
        removeSpecifierFromImport(j, importDeclarationPath, specifierName);
        const output = root.toSource();
        expect(output).toBe(expected);
      });
    });
  });

  describe("getComponentNameOrAliasFromImports", () => {
    const testCases = [
      {
        description: "should return the original name if the component is imported without an alias",
        source: `import { Button } from "monday-ui-react-core";`,
        componentName: "Button",
        expected: "Button"
      },
      {
        description: "should return the alias if the component is imported with an alias",
        source: `import { Button as Btn } from "monday-ui-react-core";`,
        componentName: "Button",
        expected: "Btn"
      },
      {
        description: "should return null if the component is not imported",
        source: `import { Input } from "monday-ui-react-core";`,
        componentName: "Button",
        expected: null
      },
      {
        description: "should handle multiple imports and return the correct alias",
        source: `
        import { Input } from "monday-ui-react-core";
        import { Button as Btn } from "another-library";
      `,
        componentName: "Button",
        expected: "Btn"
      },
      {
        description: "should return the original name if there are multiple specifiers",
        source: `import { Button, Card } from "monday-ui-react-core";`,
        componentName: "Button",
        expected: "Button"
      }
    ];

    testCases.forEach(({ description, source, componentName, expected }) => {
      it(description, () => {
        const root = j(source);
        const importDeclarations = root.find(j.ImportDeclaration);
        const result = getComponentNameOrAliasFromImports(j, importDeclarations, componentName);
        expect(result).toBe(expected);
      });
    });
  });
});
