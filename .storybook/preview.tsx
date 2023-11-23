import React from "react";
import { Preview } from "@storybook/react";
import { DocsContainer, DocsPage, Unstyled } from "@storybook/blocks";
import { withThemeByClassName } from "@storybook/addon-themes";
import { ComponentNameDecorator, RelatedComponentsDecorator } from "../src/storybook";
import {
  AnchorListItem,
  AlphaWarning,
  DeprecatedWarning,
  ComponentRules,
  DocFooter,
  Frame,
  FunctionArgument,
  FunctionArguments,
  Link,
  Paragraph,
  SectionName,
  Tip,
  Title,
  UnstyledList,
  UnstyledListItem,
  UsageGuidelines,
  withMemoryStats,
  RelatedComponent,
  MultipleStoryElementsWrapper
} from "vibe-storybook-components";
import "monday-ui-style/dist/index.min.css";
import "vibe-storybook-components/dist/index.css";

const preview: Preview = {
  parameters: {
    docs: {
      story: {
        inline: true
      },
      container: ({ children, context }: { children: any; context: any }) => (
        <DocsContainer context={context}>
          <Unstyled>
            {children}
            {<DocFooter feedbackFormLink="https://forms.monday.com/forms/213ebddcb0d423ae5b6178fb6e8f7b3d?r=use1" />}
          </Unstyled>
        </DocsContainer>
      ),
      page: DocsPage,
      components: {
        h1: ComponentNameDecorator,
        ComponentName: ComponentNameDecorator,
        h2: SectionName,
        h3: Title,
        li: AnchorListItem,
        p: Paragraph,
        AlphaWarning,
        DeprecatedWarning,
        SectionName,
        Link,
        ComponentRules,
        UsageGuidelines,
        FunctionArguments,
        FunctionArgument,
        RelatedComponent,
        RelatedComponents: RelatedComponentsDecorator,
        Frame,
        Tip,
        UnstyledList,
        UnstyledListItem
      }
    },
    options: {
      storySort: {
        order: [
          "Welcome",
          "Catalog",
          "Change Log",
          "Typography Migration Guide",
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
  },
  decorators: [
    withThemeByClassName({
      themes: {
        Light: "light-app-theme",
        Dark: "dark-app-theme",
        Black: "black-app-theme"
      },
      defaultTheme: "Light"
    }) as any,
    withMemoryStats,
    (Story, { className }) => {
      return (
        <MultipleStoryElementsWrapper className={className}>
          <Story />
        </MultipleStoryElementsWrapper>
      );
    }
  ],
  globalTypes: {
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
    }
  }
};

export default preview;
