import {
  wrap,
  getCoreImportsForFile,
  getComponentNameOrAliasFromImports,
  findComponentElements,
  migratePropsNames
} from "../../../src/utils";
import { TransformationContext } from "../../../types";
import { NEW_CORE_IMPORT_PATH } from "../../../src/consts/vibe-import-paths";

const ARIA_PROPS_MAPPING: Record<string, string> = {
  ariaLabel: "aria-label",
  ariaHidden: "aria-hidden",
  ariaExpanded: "aria-expanded",
  ariaControls: "aria-controls",
  ariaHasPopup: "aria-haspopup",
  ariaLabeledBy: "aria-labelledby",
  ariaLabelledBy: "aria-labelledby",
  ariaLabelledby: "aria-labelledby",
  ariaDescribedBy: "aria-describedby",
  ariaDescribedby: "aria-describedby"
};

const LINK_ARIA_PROPS_MAPPING: Record<string, string> = {
  ...ARIA_PROPS_MAPPING,
  ariaLabelDescription: "aria-label"
};

const COMPONENTS_WITH_ARIA_PROPS = [
  "Avatar",
  "AlertBanner",
  "Button",
  "ButtonGroup",
  "Checkbox",
  "Clickable",
  "Counter",
  "DatePickerHeader",
  "DialogContentContainer",
  "Dropdown",
  "EditableHeading",
  "EditableText",
  "Flex",
  "Icon",
  "IconButton",
  "LinearProgressBar",
  "Link",
  "List",
  "Menu",
  "MenuButton",
  "RadioButton",
  "Search",
  "Slider",
  "Switch",
  "Toggle",
  "VirtualizedList"
];

function transform({ j, root, filePath }: TransformationContext) {
  const imports = getCoreImportsForFile(root);
  const newImports = getCoreImportsForFile(root, NEW_CORE_IMPORT_PATH);

  for (const componentName of COMPONENTS_WITH_ARIA_PROPS) {
    const name =
      getComponentNameOrAliasFromImports(j, imports, componentName) ||
      getComponentNameOrAliasFromImports(j, newImports, componentName);
    if (!name) continue;

    const elements = findComponentElements(root, name);
    if (!elements.length) continue;

    const mapping = componentName === "Link" ? LINK_ARIA_PROPS_MAPPING : ARIA_PROPS_MAPPING;

    elements.forEach(elementPath => {
      migratePropsNames(j, elementPath, filePath, name, mapping);
    });
  }
}

export default wrap(transform);
