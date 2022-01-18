import { parameters } from "@storybook/addon-docs/dist/esm/frameworks/react/config";
import { addParameters } from "@storybook/react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs";
import {
  SectionName,
  Title,
  Tip,
  AnchorListItem,
  ComponentRules,
  ComponentName,
  UsageGuidelines,
  FunctionArguments,
  FunctionArgument,
  RelatedComponents,
  DocFooter,
  MultipleStoryElementsWrapper,
  Paragraph,
  LinkComponent
} from "../src/storybook/components";

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
      FunctionArguments,
      FunctionArgument,
      RelatedComponents
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
  },
  options: {
    storySort: {
      order: [
        "Welcome",
        "Foundations",
        "Buttons",
        "Inputs",
        "Data display",
        "Media",
        "Popover",
        "Pickers",
        "*",
        "Accessibility",
        "Hooks"
      ],
      includeName: false,
      // currently there is a bug that makes any componet stories to be order alphabetical even so
      // it is not the default settings. This settings purpose is to sort all the stories of any component by their load time
      storySort: (a, b) => 0
    }
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
