const path = require("path");
const fs = require("fs");

const SRC_PATH = path.join(__dirname, "../src");
const ICONS_PATH = path.join(SRC_PATH, "components/Icon/Icons/components");

const publishedComponents = {
  // Don't remove next line
  // plop_marker:published-components
  AccordionItem: "components/Accordion/AccordionItem/AccordionItem.jsx",
  Accordion: "components/Accordion/Accordion/Accordion.jsx",
  Clickable: "components/Clickable/Clickable.jsx",
  TextWithHighlight: "components/TextWithHighlight/TextWithHighlight.jsx",
  List: "components/List/List.jsx",
  ListTitle: "components/ListTitle/ListTitle.jsx",
  ListItemIcon: "components/ListItemIcon/ListItemIcon.jsx",
  ListItem: "components/ListItem/ListItem.jsx",
  VirtualizedList: "components/VirtualizedList/VirtualizedList.jsx",
  ColorPicker: "components/ColorPicker/ColorPicker.jsx",
  ColorPickerContent: "components/ColorPicker/components/ColorPickerContent/ColorPickerContentComponent.jsx",
  ColorUtils: "utils/colors-utils.js",
  Tipseen: "components/Tipseen/Tipseen.jsx",
  TipseenContent: "components/Tipseen/TipseenContent.jsx",
  TipseenWizard: "components/Tipseen/TipseenWizard.jsx",
  TipseenImage: "components/Tipseen/TipseenImage.jsx",
  Steps: "components/Steps/Steps.jsx",
  Combobox: "components/Combobox/Combobox.jsx",
  TabPanels: "components/Tabs/TabPanels/TabPanels.jsx",
  TabsContext: "components/Tabs/TabsContext/TabsContext.jsx",
  TabPanel: "components/Tabs/TabPanel/TabPanel.jsx",
  Tab: "components/Tabs/Tab/Tab.jsx",
  TabList: "components/Tabs/TabList/TabList.jsx",
  Chips: "components/Chips/Chips.jsx",
  BreadcrumbItem: "components/BreadcrumbsBar/BreadcrumbItem/BreadcrumbItem.jsx",
  BreadcrumbsBar: "components/BreadcrumbsBar/BreadcrumbsBar.jsx",
  ResponsiveList: "components/ResponsiveList/ResponsiveList.jsx",
  EditableHeading: "components/EditableHeading/EditableHeading.jsx",
  EditableInput: "components/EditableInput/EditableInput.jsx",
  Heading: "components/Heading/Heading.jsx",
  ExpandCollapse: "components/ExpandCollapse/ExpandCollapse.jsx",
  HiddenText: "components/HiddenText/HiddenText.jsx",
  MultiStepIndicator: "components/MultiStepIndicator/MultiStepIndicator.jsx",
  Banner: "components/Banner/Banner.jsx",
  MenuTitle: "components/Menu/MenuTitle/MenuTitle.jsx",
  Divider: "components/Divider/Divider.jsx",
  MenuItem: "components/Menu/MenuItem/MenuItem.jsx",
  MenuItemButton: "components/Menu/MenuItemButton/MenuItemButton.jsx",
  MenuDivider: "components/Menu/MenuDivider/MenuDivider.jsx",
  Menu: "components/Menu/Menu/Menu.jsx",
  Dialog: "components/Dialog/Dialog.jsx",
  DialogContentContainer: "components/DialogContentContainer/DialogContentContainer.jsx",
  AttentionBox: "components/AttentionBox/AttentionBox.jsx",
  Label: "components/Label/Label.jsx",
  MenuButton: "components/MenuButton/MenuButton.jsx",
  RadioButton: "components/RadioButton/RadioButton.jsx",
  SplitButton: "components/SplitButton/SplitButton.jsx",
  Counter: "components/Counter/Counter.jsx",
  Checkbox: "components/Checkbox/Checkbox.js",
  Dropdown: "components/Dropdown/Dropdown.jsx",
  SearchComponent: "components/Search/Search.jsx", // TODO: remove when bumping to version 1.0.0
  Search: "components/Search/Search.jsx",
  TextField: "components/TextField/TextField.jsx",
  Toast: "components/Toast/Toast.jsx",
  ToastButton: "components/Toast/ToastButton/ToastButton.jsx",
  ToastLink: "components/Toast/ToastLink/ToastLink.jsx",
  Tooltip: "components/Tooltip/Tooltip.jsx",
  Button: "components/Button/Button.jsx",
  Loader: "components/Loader/Loader.jsx",
  Icon: "components/Icon/Icon.jsx",
  CustomSvgIcon: "components/Icon/CustomSvgIcon.jsx",
  FormattedNumber: "components/FormattedNumber/FormattedNumber.jsx",
  LinearProgressBar: "components/ProgressBars/LinearProgressBar/LinearProgressBar.jsx",
  useKeyEvent: "hooks/useKeyEvent/index.js",
  useEventListener: "hooks/useEventListener/index.js",
  useDebounceEvent: "hooks/useDebounceEvent/index.js",
  useClickOutside: "hooks/useClickOutside/index.js",
  useResizeObserver: "hooks/useResizeObserver.js",
  allIcons: "components/Icon/Icons",
  Link: "components/Link/Link.jsx",
  ButtonGroup: "components/ButtonGroup/ButtonGroup.jsx",
  AlertBanner: "components/AlertBanner/AlertBanner.jsx",
  AlertBannerLink: "components/AlertBanner/AlertBannerLink/AlertBannerLink.jsx",
  AlertBannerText: "components/AlertBanner/AlertBannerText/AlertBannerText.jsx",
  AlertBannerButton: "components/AlertBanner/AlertBannerButton/AlertBannerButton.jsx",
  Toggle: "components/Toggle/Toggle.jsx",
  Skeleton: "components/Skeleton/Skeleton.jsx",
  Avatar: "components/Avatar/Avatar.jsx",
  IconButton: "components/IconButton/IconButton.jsx"
};

function getPublishedComponents() {
  return Object.entries(publishedComponents).reduce(
    (acc, [componentName, componentPath]) => ({
      ...acc,
      [componentName]: path.join(SRC_PATH, componentPath)
    }),
    exposeIcons()
  );
}

function exposeIcons() {
  const files = fs.readdirSync(ICONS_PATH);

  return files.reduce(
    (acc, file) => ({
      ...acc,
      [`/icons/${file.split(".")[0]}`]: `${ICONS_PATH}/${file}`
    }),
    {}
  );
}

module.exports = {
  publishedComponents,
  getPublishedComponents
};
