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
import { ComponentNameDecorator, RelatedComponentsDecorator } from "../storybook/components";
import { DocsContainer, DocsPage, Unstyled } from "@storybook/blocks";
import "vibe-storybook-components/index.css";

// TODO add DocFooter feedbackFormLink
const preview: Preview = {
  parameters: {
    docs: {
      inlineStories: true,
      container: ({ children, context }) => (
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
    // TODO implement theming
    // themes: {
    //   default: "Light",
    //   list: [
    //     { name: "Light", class: "light-app-theme", color: "#ffffff" },
    //     { name: "Dark", class: "dark-app-theme", color: "#1C1F3B" },
    //     { name: "Black", class: "black-app-theme", color: "#111111" },
    //     { name: "Hacker", class: "hacker_theme-app-theme", color: "#282a36" }
    //   ]
    // },
    options: {
      storySort: {
        order: ["Welcome", "*"]
      }
    }
  }
};

export default preview;
