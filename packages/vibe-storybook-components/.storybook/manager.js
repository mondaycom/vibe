import { addons } from "@storybook/manager-api";
import theme from "./theme";

// window.STORYBOOK_GA_ID = "UA-308574295"; // TODO set STORYBOOK_GA_ID? What's is that for?
window.STORYBOOK_REACT_GA_OPTIONS = {};

addons.setConfig({
  theme: theme
});
