import { addParameters, configure } from "@storybook/react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";

import { loadFoundationsStories } from "../src/general-stories/foundations-stories";

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage
  },
  themes: [
    { name: "Light", class: "light-app-them", color: "#ffffff", default: true },
    { name: "Dark", class: "dark-app-theme", color: "#1C1F3B" },
    { name: "Black", class: "black-app-theme", color: "#111111" }
  ]
});

const storiesLoaderFunction = () => [...loadFoundationsStories()];

configure(storiesLoaderFunction, module);
