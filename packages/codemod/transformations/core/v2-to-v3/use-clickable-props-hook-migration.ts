import { getComponentNameOrAliasFromImports, getCoreImportsForFile, wrap } from "../../../src/utils";
import { TransformationContext } from "../../../types";
import { Property } from "jscodeshift";

/**
 * 1. Update the 'dataTestId' prop to 'data-testid'
 */
function transform({ j, root }: TransformationContext) {
  const imports = getCoreImportsForFile(root);
  const componentName = getComponentNameOrAliasFromImports(j, imports, "useClickableProps");
  if (!componentName) return;

  root
    .find(j.CallExpression, {
      callee: {
        type: "Identifier",
        name: "useClickableProps"
      }
    })
    .forEach(path => {
      const args = path.node.arguments;

      if (args.length > 0 && args[0].type === "ObjectExpression") {
        const objectExpression = args[0];

        objectExpression.properties.forEach(property => {
          const prop = property as Property;
          if (prop.key?.type === "Identifier" && prop.key?.name === "dataTestId") {
            prop.key = j.literal("data-testid");
          }
        });
      }
    });
}

export default wrap(transform);
