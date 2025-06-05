import React from "react";
import { Preview } from "@storybook/react";
import isChromatic from "chromatic/isChromatic";
import { DocsContainer, DocsPage, Unstyled } from "@storybook/blocks";
import { withThemeByClassName } from "@storybook/addon-themes";
import {
  AlphaWarning,
  DeprecatedWarning,
  ComponentName,
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
  StorybookLink
} from "vibe-storybook-components";
import CanvasWrapper from "../src/storybook/components/canvas-wrapper/CanvasWrapper";
import withGlobalStyle from "../src/storybook/decorators/withGlobalStyle/withGlobalStyle";
import { PropsTable, RelatedComponentsDecorator } from "../src/storybook";
import "monday-ui-style/dist/index.min.css";
import "vibe-storybook-components/dist/index.css";
import { generateAutocompletion } from "storybook-addon-playground";
import {
  playgroundVibeComponents,
  playgroundReactCommonHooks,
  introCode
} from "../src/storybook/stand-alone-documentaion/playground/playground-helpers";
import reactDocgenOutput from "../src/storybook/stand-alone-documentaion/playground/react-docgen-output.json";
import withLiveEdit from "../src/storybook/decorators/withLiveEdit/withLiveEdit";
import modes from "./modes";
import Footer from "../src/storybook/components/footer/Footer";
import StorybookTableOfContents from "../src/storybook/components/toc/TableOfContents";
import { paintToConsole } from "./art";

const fontLoader = async () => ({
  fonts: await document.fonts.ready // Fixing Chromatic tests flakiness - taking snapshots after fonts are loaded
});

const preview: Preview = {
  parameters: {
    chromatic: {
      modes
    },
    controls: {
      sort: "alpha",
      expanded: true
    },
    docs: {
      liveEdit: {
        isEnabled: true
      },
      canvas: {
        layout: "fullscreen"
      },
      container: ({ children, context }: { children: any; context: any }) => {
        return (
          <>
            <DocsContainer context={context}>
              <Unstyled>{children}</Unstyled>
            </DocsContainer>
            <Footer />
            <StorybookTableOfContents />
          </>
        );
      },
      page: DocsPage,
      components: {
        Canvas: CanvasWrapper,
        Controls: PropsTable,
        PropsTable,
        h1: ComponentName,
        ComponentName,
        h2: SectionName,
        h3: Title,
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
        StorybookLink,
        Tip,
        UnstyledList,
        UnstyledListItem
      }
    },
    options: {
      storySort: {
        method: "alphabetical",
        order: [
          "Welcome",
          "Getting Started",
          "Catalog",
          "Playground",
          "Changelog",
          "Migration Guide",
          "Contributing",
          "Foundations",
          "Components",
          "Layout",
          "Text",
          "Theming",
          "Technical Patterns",
          "Accessibility",
          "Hooks"
        ]
      }
    },
    playground: {
      storyId: "playground",
      components: {
        ...playgroundVibeComponents,
        ...playgroundReactCommonHooks
      },
      introCode,
      autocompletions: generateAutocompletion(reactDocgenOutput)
    }
  },
  decorators: [
    withLiveEdit,
    withGlobalStyle,
    withMemoryStats,
    // Should always be the last decorator (stories hooks issues otherwise) - bug in the addon
    withThemeByClassName({
      themes: {
        Light: "light-app-theme",
        Dark: "dark-app-theme",
        Black: "black-app-theme"
      },
      defaultTheme: "Light"
    })
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
  },

  loaders: isChromatic() && document.fonts ? [fontLoader] : []
};

paintToConsole();

export default preview;
