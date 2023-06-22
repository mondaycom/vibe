import { addParameters } from "@storybook/react";
import { DocsContainer, DocsPage } from "@storybook/addon-docs";
import { withPerformance } from "storybook-addon-performance";
import "monday-ui-style/dist/index.min.css";
import {
  AnchorListItem,
  ComponentName,
  ComponentRules,
  DocFooter,
  FunctionArgument,
  FunctionArguments,
  LinkComponent,
  MultipleStoryElementsWrapper,
  Paragraph,
  RelatedComponents,
  SectionName,
  Tip,
  Title,
  UsageGuidelines,
  withMemoryStats
} from "../src/storybook";

addParameters({
  controls: {
    expanded: true,
    sort: "requiredFirst"
  },
  docs: {
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
      ]
    }
  }
});

const themes = {
  light: 'light-app-theme',
  dark: 'dark-app-theme',
  black: 'black-app-theme',
  hacker: 'hacker_theme-app-theme',
};

export const globalTypes = {
  memoryStats: {
    name: "Memory Stats",
    description: "Add Memory Stat tracker",
    defaultValue: "no",
    toolbar: {
      icon: "memory",
      items: [
        { value: "no", right: "🚫", title: "Hide Memory Stat" },
        { value: "yes", right: "✅", title: "Show Memory Stat" }
      ]
    }
  },
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      // The icon for the toolbar item
      icon: "circlehollow",
      // Array of options
      items: Object.keys(themes).map(themeName => ({value: themeName, icon: "circle", title: themeName})),
      // Property that specifies if the name of the item will be displayed
      showName: true
    }
  }
};

const withTheme = (StoryFn, context) => {
  // Get the active theme value from the story parameter
  return (
    <div className={themes[context.globals.theme]} style={{display: 'inherit', width: '100%'}}>
      <StoryFn />
    </div>
  );
};

export const decorators = [
  withTheme,
  withPerformance,
  (Story, { className }) => {
    return (
      <MultipleStoryElementsWrapper className={className}>
        <Story />
      </MultipleStoryElementsWrapper>
    );
  },
  withMemoryStats
];
