import * as postcss from "postcss";

export const addImportsIfNeeded = (root: postcss.Root, importsToAdd: string[]) => {
  const existingImports: Set<string> = new Set();
  root.walkAtRules("import", (rule: postcss.AtRule) => {
    existingImports.add(rule.params);
  });

  const importsToCreate: string[] = [];
  for (const importName of importsToAdd) {
    if (!existingImports.has(importName)) {
      importsToCreate.push(importName);
    }
  }

  if (importsToCreate.length > 0) {
    const importRules: postcss.AtRule[] = [
      postcss.atRule({
        name: "import",
        params: importsToCreate.map(importName => `'${importName}'`).join(", ")
      })
    ];
    root.prepend(...importRules);
  }
};
