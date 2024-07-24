import React from "react";
import * as VibeComponents from "../src/components";
import * as VibeComponentsNext from "../src/next";
import * as VibeHooks from "../src/hooks";
import * as VibeIcons from "../src/components/Icon/Icons";
import { Preview } from "@storybook/react";
import isChromatic from "chromatic/isChromatic";
import { DocsContainer, DocsPage, Unstyled } from "@storybook/blocks";
import { withThemeByClassName } from "@storybook/addon-themes";
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
  StorybookLink
} from "vibe-storybook-components";
import CanvasWrapper from "../src/storybook/components/canvas-wrapper/CanvasWrapper";
import withGlobalStyle from "../src/storybook/decorators/withGlobalStyle/withGlobalStyle";
import { ComponentNameDecorator, PropsTable, RelatedComponentsDecorator } from "../src/storybook";
import "monday-ui-style/dist/index.min.css";
import "vibe-storybook-components/dist/index.css";
import { generateAutocompletion } from "storybook-addon-playground";
import introCode from "../src/storybook/stand-alone-documentaion/playground/playground-helpers";
import reactDocgenOutput from "../src/storybook/stand-alone-documentaion/playground/react-docgen-output.json";
import withLiveEdit from "../src/storybook/decorators/withLiveEdit/withLiveEdit";
import modes from "./modes";

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
        Canvas: CanvasWrapper,
        Controls: PropsTable,
        PropsTable,
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
        StorybookLink,
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
          "Internal",
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
    },
    playground: {
      storyId: "playground",
      components: { ...VibeComponents, VibeIcons, VibeNext: VibeComponentsNext, ...VibeHooks },
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

export default preview;
