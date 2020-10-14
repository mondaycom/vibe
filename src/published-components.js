const path = require("path");
const fs = require("fs");

const publishedComponents = {
  SearchComponent: "/src/components/Search/Search.jsx",
  TextField: "/src/components/TextField/InputField.jsx",
  Tooltip: "/src/components/Tooltip/Tooltip.jsx",
  Button: "/src/components/Button/Button.jsx",
  Loader: "/src/components/Loader/Loader.jsx",
  FormattedNumber: "/src/components/FormattedNumber/FormattedNumber.jsx",
  LinearProgressBar:
    "/src/components/ProgressBars/LinearProgressBar/LinearProgressBar.jsx",
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
    // Do whatever you want to do with the file
    console.log(file);
    filesObject[`/icons/${file.split(".")[0]}`] = `${iconsPath}/${file}`;
  });
  return filesObject;
}

module.exports = {
  getPublishedComponents
};
