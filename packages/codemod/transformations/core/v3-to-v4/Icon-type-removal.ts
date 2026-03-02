import {
  wrap,
  getImports,
  getComponentNameOrAliasFromImports,
  findComponentElements,
  removeProp
} from "../../../src/utils";
import { NEW_CORE_IMPORT_PATH } from "../../../src/consts";
import { TransformationContext } from "../../../types";

const ICON_IMPORT_PATH = "@vibe/icon";

/**
 * Icon type removal migration for v3 to v4:
 * 1. Remove `type` prop from Icon
 * 2. Remove `useCurrentColor` and `customColor` props from Icon
 * 3. Remove `iconType` prop from AttentionBox, Tab, MenuItem
 * 4. Remove `rightIconType` prop from MenuItem
 * 5. Remove `fulfilledStepIconType` prop from MultiStepIndicator
 */
function transform({ j, root }: TransformationContext) {
  // Handle Icon component (imported from @vibe/icon or @vibe/core)
  const coreImports = getImports(root, NEW_CORE_IMPORT_PATH);
  const iconImports = getImports(root, ICON_IMPORT_PATH);

  const iconNameFromCore = getComponentNameOrAliasFromImports(j, coreImports, "Icon");
  const iconNameFromIcon = getComponentNameOrAliasFromImports(j, iconImports, "Icon");
  const iconName = iconNameFromCore || iconNameFromIcon;

  if (iconName) {
    const iconElements = findComponentElements(root, iconName);
    iconElements.forEach(elementPath => {
      removeProp(j, elementPath, "type", "useCurrentColor", "customColor");
    });
  }

  // Handle AttentionBox - remove iconType
  const attentionBoxName = getComponentNameOrAliasFromImports(j, coreImports, "AttentionBox");
  if (attentionBoxName) {
    const elements = findComponentElements(root, attentionBoxName);
    elements.forEach(elementPath => {
      removeProp(j, elementPath, "iconType");
    });
  }

  // Handle Tab - remove iconType
  const tabName = getComponentNameOrAliasFromImports(j, coreImports, "Tab");
  if (tabName) {
    const elements = findComponentElements(root, tabName);
    elements.forEach(elementPath => {
      removeProp(j, elementPath, "iconType");
    });
  }

  // Handle MenuItem - remove iconType and rightIconType
  const menuItemName = getComponentNameOrAliasFromImports(j, coreImports, "MenuItem");
  if (menuItemName) {
    const elements = findComponentElements(root, menuItemName);
    elements.forEach(elementPath => {
      removeProp(j, elementPath, "iconType", "rightIconType");
    });
  }

  // Handle MultiStepIndicator - remove fulfilledStepIconType
  const multiStepName = getComponentNameOrAliasFromImports(j, coreImports, "MultiStepIndicator");
  if (multiStepName) {
    const elements = findComponentElements(root, multiStepName);
    elements.forEach(elementPath => {
      removeProp(j, elementPath, "fulfilledStepIconType");
    });
  }
}

export default wrap(transform);
