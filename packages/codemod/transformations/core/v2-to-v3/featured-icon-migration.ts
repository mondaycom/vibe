import { wrap, getComponentNameOrAliasFromImports, getImports } from "../../../src/utils";
import { TransformationContext } from "../../../types";
import { CORE_ICONS_IMPORT_PATH } from "../../../src/consts";

/**
 * 1. Replace Featured icon with Upgrade icon
 */
function transform({ j, root }: TransformationContext) {
  const imports = getImports(root, CORE_ICONS_IMPORT_PATH);

  if (!imports.length) return;

  const componentName = getComponentNameOrAliasFromImports(j, imports, "Featured");
  if (!componentName) return;

  imports.forEach(path => {
    path.node.specifiers?.forEach(spec => {
      if (j.ImportSpecifier.check(spec)) {
        if (spec.imported.name === "Featured") {
          spec.imported.name = "Upgrade";
        }
      }
    });
  });

  root.find(j.JSXExpressionContainer).find(j.Identifier, { name: componentName }).replaceWith(j.identifier("Upgrade"));
}

export default wrap(transform);
