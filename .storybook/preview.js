import { parameters } from "@storybook/addon-docs/dist/esm/frameworks/react/config";
import { addParameters } from "@storybook/react";
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
  DocFooter,
  ComponentStory,
  Paragraph
} from "../src/storybook-components";

addParameters({
  docs: {
    ...parameters.docs,
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
      p: Paragraph,
      Tip,
      ComponentRules,
      UsageGuidelines,
      RelatedComponents,
      ComponentStory
    }
  },
  viewMode: "docs",
  themes: [
    { name: "Light", class: "light-app-them", color: "#ffffff", default: true },
    { name: "Dark", class: "dark-app-theme", color: "#1C1F3B" },
    { name: "Black", class: "black-app-theme", color: "#111111" }
  ]
});
