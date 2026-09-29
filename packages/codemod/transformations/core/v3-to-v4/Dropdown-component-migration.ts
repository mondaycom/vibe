import {
  wrap,
  getImports,
  getComponentNameOrAliasFromImports,
  findComponentElements,
  isPropExists,
  findProps,
  removeProp
} from "../../../src/utils";
import { NEW_CORE_IMPORT_PATH } from "../../../src/consts";
import { TransformationContext } from "../../../types";

// Props whose value may contain option objects carrying the old `isMandatory` flag.
const OPTION_PROPS = ["options", "value", "defaultValue"];

/**
 * Dropdown migration for v3 to v4:
 * - Remove the dropdown-level `withMandatoryDefaultOptions` prop (no longer needed)
 * - Replace option-level `isMandatory: true` with `removable: false` (and inverse) inside inline
 *   `options` / `value` / `defaultValue` props
 */
function transform({ j, root }: TransformationContext) {
  const imports = getImports(root, NEW_CORE_IMPORT_PATH);
  const componentName = getComponentNameOrAliasFromImports(j, imports, "Dropdown");
  if (!componentName) return;

  const elements = findComponentElements(root, componentName);
  if (!elements.length) return;

  // Rewrite a single `isMandatory` property to `removable`, inverting its boolean value.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const rewriteMandatoryProperty = (prop: any) => {
    if (prop.type !== "ObjectProperty" && prop.type !== "Property") return;

    const key = prop.key;
    const keyName = key.type === "Identifier" ? key.name : key.type === "StringLiteral" ? key.value : null;
    if (keyName !== "isMandatory") return;

    prop.key = j.identifier("removable");

    // Shorthand `{ isMandatory }` means true -> removable: false
    if (prop.shorthand) {
      prop.shorthand = false;
      prop.value = j.booleanLiteral(false);
      return;
    }

    const propValue = prop.value;
    if (propValue.type === "BooleanLiteral") {
      prop.value = j.booleanLiteral(!propValue.value);
    } else {
      // Dynamic value: isMandatory={expr} -> removable={!(expr)}
      prop.value = j.unaryExpression("!", propValue, true);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const rewriteOptionObjects = (expression: any) => {
    if (!expression) return;

    if (expression.type === "ArrayExpression") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      expression.elements.forEach((element: any) => {
        if (element?.type === "ObjectExpression") {
          element.properties.forEach(rewriteMandatoryProperty);
        }
      });
    } else if (expression.type === "ObjectExpression") {
      expression.properties.forEach(rewriteMandatoryProperty);
    }
  };

  elements.forEach(elementPath => {
    // Remove the dropdown-level gate prop.
    removeProp(j, elementPath, "withMandatoryDefaultOptions");

    OPTION_PROPS.forEach(propName => {
      if (!isPropExists(j, elementPath, propName)) return;

      const props = findProps(j, elementPath, propName);
      if (!props.length) return;

      const value = props.at(0).get().node.value;
      // Only transform inline expressions; `options={someVariable}` cannot be safely rewritten.
      if (value?.type === "JSXExpressionContainer") {
        rewriteOptionObjects(value.expression);
      }
    });
  });
}

export default wrap(transform);
