const path = require("path");
const fs = require("fs");

const publishedComponents = {
  // Don't remove next line
  // plop_marker:published-components
	EditableHeading: "/src/components/EditableHeading/EditableHeading.jsx",
	EditableInput: "/src/components/EditableInput/EditableInput.jsx",
	Heading: "/src/components/Heading/Heading.jsx",
	ExpandCollapse: "/src/components/ExpandCollapse/ExpandCollapse.jsx",
	HiddenText: "/src/components/HiddenText/HiddenText.jsx",
	MultiStepIndicator: "/src/components/MultiStepIndicator/MultiStepIndicator.jsx",
  Banner: "/src/components/Banner/Banner.jsx",
  MenuTitle: "/src/components/Menu/MenuTitle/MenuTitle.jsx",
  Divider: "/src/components/Divider/Divider.jsx",
  MenuItem: "/src/components/Menu/MenuItem/MenuItem.jsx",
  Menu: "/src/components/Menu/Menu/Menu.jsx",
  Dialog: "/src/components/Dialog/Dialog.jsx",
  DialogContentContainer: "/src/components/DialogContentContainer/DialogContentContainer.jsx",
  AttentionBox: "/src/components/AttentionBox/AttentionBox.jsx",
  Label: "/src/components/Label/Label.jsx",
  MenuButton: "/src/components/MenuButton/MenuButton.jsx",
  RadioButton: "/src/components/RadioButton/RadioButton.jsx",
  SplitButton: "/src/components/SplitButton/SplitButton.jsx",
  Counter: "/src/components/Counter/Counter.jsx",
  Checkbox: "/src/components/Checkbox/Checkbox.js",
  Dropdown: "/src/components/Dropdown/Dropdown.jsx",
  SearchComponent: "/src/components/Search/Search.jsx", // TODO: remove when bumping to version 1.0.0
  Search: "/src/components/Search/Search.jsx",
  TextField: "/src/components/TextField/TextField.jsx",
  Toast: "/src/components/Toast/Toast.jsx",
  Tooltip: "/src/components/Tooltip/Tooltip.jsx",
  Button: "/src/components/Button/Button.jsx",
  Loader: "/src/components/Loader/Loader.jsx",
  Icon: "/src/components/Icon/Icon.jsx",
  CustomSvgIcon: "/src/components/Icon/CustomSvgIcon.jsx",
  FormattedNumber: "/src/components/FormattedNumber/FormattedNumber.jsx",
  LinearProgressBar: "/src/components/ProgressBars/LinearProgressBar/LinearProgressBar.jsx",
  useKeyEvent: "/src/hooks/useKeyEvent.js",
  useEventListener: "/src/hooks/useEventListener.js",
  useDebounceEvent: "/src/hooks/useDebounceEvent.js",
  useClickOutside: "/src/hooks/useClickOutside.js",
  useResizeObserver: "/src/hooks/useResizeObserver.js"
};

function getPublishedComponents(dirPath = "") {
  return Object.entries(publishedComponents).reduce(
    (acc, [key, value]) => {
      return { ...acc, [key]: dirPath + value };
    },
    { ...exposeIcons(dirPath) }
  );
}

function exposeIcons(dirPath) {
  const iconsPath = "src/components/Icon/Icons/components";
  const directoryPath = path.join(dirPath, iconsPath);
  const filesObject = {};
  const files = fs.readdirSync(directoryPath);
  files.forEach(function(file) {
    filesObject[`/icons/${file.split(".")[0]}`] = `${iconsPath}/${file}`;
  });
  return filesObject;
}

module.exports = {
  getPublishedComponents
};
