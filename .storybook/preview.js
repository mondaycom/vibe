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
  MultipleStoryElementsWrapper,
  Link,
  Paragraph
} from "../src/storybook/components";
import LinkComponent from "../src/storybook/components/link-component/link-component";

addParameters({
  docs: {
    ...parameters.docs,
    inlineStories: true,
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
      a: LinkComponent,
      p: Paragraph,
      Tip,
      ComponentRules,
      UsageGuidelines,
      RelatedComponents,
      Link
    }
  },
  viewMode: "docs",
  previewTabs: {
    "storybook/docs/panel": {
      index: -1
    },
    canvas: { title: "Sandbox" }
  },
  themes: {
    default: "Light",
    list: [
      { name: "Light", class: "light-app-them", color: "#ffffff" },
      { name: "Dark", class: "dark-app-theme", color: "#1C1F3B" },
      { name: "Black", class: "black-app-theme", color: "#111111" },
      { name: "Hacker", class: "hacker_theme-app-theme", color: "#282a36" }
    ]
  }
});

export const decorators = [
  (Story, { className }) => {
    return (
      <MultipleStoryElementsWrapper className={className}>
        <Story />
      </MultipleStoryElementsWrapper>
    );
  }
];
