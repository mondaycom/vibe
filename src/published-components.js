const publishedComponents = {
  button: "/src/components/button/button.jsx",
  SearchComponent: "/src/components/Search/Search.jsx",
  TextField: "/src/components/TextField/InputField.jsx",
  Tooltip: "/src/components/Tooltip/Tooltip.jsx",
  Button_WIP: "/src/components/Button/Button.jsx",
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
  return Object.entries(publishedComponents).reduce((acc, [key, value]) => {
    return { ...acc, [key]: dirPath + value };
  }, {});
}

module.exports = {
  getPublishedComponents
};
