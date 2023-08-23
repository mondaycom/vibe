import { Preview } from '@storybook/react';
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
  RelatedComponents,
  SectionName,
  Title,
  UnstyledList,
  UnstyledListItem,
  UsageGuidelines,
} from '../src';
import { ComponentNameDecorator } from '../storybook/components';
import { DocsContainer, DocsPage, Unstyled } from '@storybook/blocks';
import '../src/styles/tokens/index.scss';

const preview: Preview = {
  parameters: {
    docs: {
      inlineStories: true,
      container: ({ children, context }) => (
        <DocsContainer context={context}>
          <Unstyled>
            {children}
            {<DocFooter feedbackFormLink="// TODO add feedbackFormLink" />}
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
        RelatedComponents,
        Frame,
        UnstyledList,
        UnstyledListItem,
      },
    },
    // TODO themes when https://storybook.js.org/addons/storybook-addon-themes version 7 will be released
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
        order: ['Welcome', 'Change Log', '*'],
      },
    },
  },
};

export default preview;
