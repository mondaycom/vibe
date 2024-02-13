import { Preview } from "@storybook/react";
import {
  AnchorListItem,
  ComponentRules,
  DocFooter,
  Frame,
  FunctionArgument,
  FunctionArguments,
  LinkComponent,
  Paragraph,
  RelatedComponent,
  SectionName,
  Title,
  UnstyledList,
  UnstyledListItem,
  UsageGuidelines
} from "vibe-storybook-components";
import { withThemeByClassName } from "@storybook/addon-themes";
import { ComponentNameDecorator, RelatedComponentsDecorator } from "../storybook/components";
import { DocsContainer, DocsPage, Unstyled } from "@storybook/blocks";
import "vibe-storybook-components/index.css";

// TODO add DocFooter feedbackFormLink
const preview: Preview = {
  parameters: {
    docs: {
      inlineStories: true,
      container: ({ children, context }: { children: any; context: any }) => (
        <DocsContainer context={context}>
          <Unstyled>
            {children}
            {<DocFooter feedbackFormLink="" />}
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
        a: LinkComponent,
        p: Paragraph,
        SectionName,
        ComponentRules,
        UsageGuidelines,
        FunctionArguments,
        FunctionArgument,
        RelatedComponent,
        RelatedComponents: RelatedComponentsDecorator,
        Frame,
        UnstyledList,
        UnstyledListItem
      }
    },
    options: {
      storySort: {
        order: ["Welcome", "*"]
      }
    }
  },
  decorators: [
    withThemeByClassName({
      themes: {
        Light: "light-app-theme",
        Dark: "dark-app-theme",
        Black: "black-app-theme",
        Hacker: "hacker_theme-app-theme"
      },
      defaultTheme: "Light"
    }) as any
  ]
};

export default preview;
