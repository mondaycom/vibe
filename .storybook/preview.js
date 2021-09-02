import { addParameters, configure } from "@storybook/react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import {
  SubHeader,
  Title,
  Tip,
  AnchorListItem,
  ComponentRules,
  Header,
  UsageGuidelines,
  RelatedComponents,
  DocFooter
} from "../src/storybook-components";
import { loadFoundationsStories } from "../src/general-stories/foundations-stories";

addParameters({
  docs: {
    container: ({ children, context }) => (
      <DocsContainer context={context}>
        {children}
        {<DocFooter />}{" "}
      </DocsContainer>
    ),
    page: DocsPage,
    components: {
      h1: Header,
      h2: SubHeader,
      h3: Title,
      li: AnchorListItem,
      Tip,
      ComponentRules,
      UsageGuidelines,
      RelatedComponents
    }
  },
  viewMode: "docs",
  themes: [
    { name: "Light", class: "light-app-them", color: "#ffffff", default: true },
    { name: "Dark", class: "dark-app-theme", color: "#1C1F3B" },
    { name: "Black", class: "black-app-theme", color: "#111111" }
  ]
});

const storiesLoaderFunction = () => [...loadFoundationsStories()];

configure(storiesLoaderFunction, module);
