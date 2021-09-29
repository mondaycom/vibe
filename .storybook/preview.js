import { parameters } from "@storybook/addon-docs/dist/esm/frameworks/react/config";
import { addParameters } from "@storybook/react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import {
  SectionName,
  Title,
  Tip,
  AnchorListItem,
  ComponentRules,
  ComponentName,
  UsageGuidelines,
  RelatedComponents,
  DocFooter,
  ComponentStory
} from "../src/storybook-components";

addParameters({
  docs: {
    ...parameters.docs,
    container: ({ children, context }) => (
      <DocsContainer context={context}>
        {children}
        {<DocFooter />}
      </DocsContainer>
    ),
    page: DocsPage,
    components: {
      h1: ComponentName,
      h2: SectionName,
      h3: Title,
      li: AnchorListItem,
      Tip,
      ComponentRules,
      UsageGuidelines,
      RelatedComponents,
      ComponentStory
    }
  },
  viewMode: "docs",
  previewTabs: {
    "storybook/docs/panel": {
      index: -1
    },
    canvas: { title: "Sandbox" }
  },
  themes: [
    { name: "Light", class: "light-app-them", color: "#ffffff", default: true },
    { name: "Dark", class: "dark-app-theme", color: "#1C1F3B" },
    { name: "Black", class: "black-app-theme", color: "#111111" }
  ]
});
