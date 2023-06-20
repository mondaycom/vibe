import { TemplateLiteralPart } from "../templateLiterals/buildClassnameStringFromTemplateLiteral";
import { CssBaseClass } from "../getCssBaseClass";

export const isTemplateLiteralPartBaseClassIdentifier = (
  node: TemplateLiteralPart,
  baseCssClass: CssBaseClass | undefined
) => {
  return node.type === "Identifier" && node.value === baseCssClass?.variableName;
};
