import {
  wrap,
  getImports,
  getComponentNameOrAliasFromImports,
  findComponentElements,
  findProps,
  removeSpecifierFromImport,
  findImportsThatIncludesSpecifier
} from "../../../src/utils";
import { NEW_CORE_IMPORT_PATH } from "../../../src/consts";
import { TransformationContext } from "../../../types";
import { JSXAttribute } from "jscodeshift";

/**
 * TipseenImage migration for v3 to v4:
 * 1. Replace <TipseenImage src={..} alt={..} className={..} tipseenMediaClassName={..} />
 *    with <TipseenMedia className={..}><img src={..} alt={..} className={..} style={{ objectFit: "cover", width: "100%" }} /></TipseenMedia>
 * 2. Update imports: remove TipseenImage, add TipseenMedia if not already imported
 */
function transform({ j, root }: TransformationContext) {
  const imports = getImports(root, NEW_CORE_IMPORT_PATH);
  const componentName = getComponentNameOrAliasFromImports(j, imports, "TipseenImage");
  if (!componentName) return;

  const elements = findComponentElements(root, componentName);
  if (!elements.length) return;

  elements.forEach(elementPath => {
    // Extract prop values from TipseenImage
    const srcProps = findProps(j, elementPath, "src");
    const altProps = findProps(j, elementPath, "alt");
    const classNameProps = findProps(j, elementPath, "className");
    const tipseenMediaClassNameProps = findProps(j, elementPath, "tipseenMediaClassName");

    // Build img attributes
    const imgAttrs: JSXAttribute[] = [];

    if (srcProps.length) {
      const srcAttr = srcProps.get().node;
      imgAttrs.push(j.jsxAttribute(j.jsxIdentifier("src"), srcAttr.value));
    }

    if (altProps.length) {
      const altAttr = altProps.get().node;
      imgAttrs.push(j.jsxAttribute(j.jsxIdentifier("alt"), altAttr.value));
    }

    if (classNameProps.length) {
      const classNameAttr = classNameProps.get().node;
      imgAttrs.push(j.jsxAttribute(j.jsxIdentifier("className"), classNameAttr.value));
    }

    // Add style={{ objectFit: "cover", width: "100%" }}
    imgAttrs.push(
      j.jsxAttribute(
        j.jsxIdentifier("style"),
        j.jsxExpressionContainer(
          j.objectExpression([
            j.property("init", j.identifier("objectFit"), j.literal("cover")),
            j.property("init", j.identifier("width"), j.literal("100%"))
          ])
        )
      )
    );

    // Create <img ... /> element
    const imgElement = j.jsxElement(j.jsxOpeningElement(j.jsxIdentifier("img"), imgAttrs, true), null, []);

    // Build TipseenMedia attributes
    const mediaAttrs: JSXAttribute[] = [];

    if (tipseenMediaClassNameProps.length) {
      const mediaClassNameAttr = tipseenMediaClassNameProps.get().node;
      mediaAttrs.push(j.jsxAttribute(j.jsxIdentifier("className"), mediaClassNameAttr.value));
    }

    // Determine the TipseenMedia component name to use
    const tipseenMediaName = getComponentNameOrAliasFromImports(j, imports, "TipseenMedia") || "TipseenMedia";

    // Create <TipseenMedia>{img}</TipseenMedia>
    const mediaElement = j.jsxElement(
      j.jsxOpeningElement(j.jsxIdentifier(tipseenMediaName), mediaAttrs, false),
      j.jsxClosingElement(j.jsxIdentifier(tipseenMediaName)),
      [j.jsxText("\n  "), imgElement, j.jsxText("\n")]
    );

    // Replace TipseenImage with TipseenMedia wrapping img
    j(elementPath).replaceWith(mediaElement);
  });

  // Update imports: remove TipseenImage, add TipseenMedia if not present
  const tipseenImageImports = findImportsThatIncludesSpecifier(j, imports, "TipseenImage");
  if (tipseenImageImports.length) {
    const hasTipseenMedia = getComponentNameOrAliasFromImports(j, imports, "TipseenMedia") !== null;

    tipseenImageImports.forEach(importPath => {
      if (!hasTipseenMedia) {
        // Add TipseenMedia specifier before removing TipseenImage
        const newSpecifier = j.importSpecifier(j.identifier("TipseenMedia"), j.identifier("TipseenMedia"));
        importPath.node.specifiers?.push(newSpecifier);
      }

      removeSpecifierFromImport(j, importPath, "TipseenImage");
    });
  }
}

export default wrap(transform);
