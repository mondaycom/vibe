import React from 'react';
import { Preview } from '@storybook/react';
import {
  AnchorListItem,
  ComponentName,
  ComponentRules,
  Frame,
  FunctionArgument,
  FunctionArguments,
  Link,
  Paragraph,
  RelatedComponent,
  RelatedComponents,
  SectionName,
  Title,
  Tip,
  UnstyledList,
  UnstyledListItem,
  UsageGuidelines,
} from '../src';
import { DocsContainer, DocsPage, Unstyled } from '@storybook/blocks';
import { withThemeByClassName } from '@storybook/addon-themes';
import '../src/styles/tokens/index.scss';

const preview: Preview = {
  parameters: {
    docs: {
      story: {
        inline: true,
      },
      container: ({ children, context }: { children: any; context: any }) => (
        <DocsContainer context={context}>
          <Unstyled>{children}</Unstyled>
        </DocsContainer>
      ),
      page: DocsPage,
      components: {
        h1: ComponentName,
        ComponentName,
        h2: SectionName,
        h3: Title,
        li: AnchorListItem,
        a: Link,
        p: Paragraph,
        SectionName,
        Link,
        ComponentRules,
        UsageGuidelines,
        FunctionArguments,
        FunctionArgument,
        RelatedComponent,
        RelatedComponents,
        Frame,
        Tip,
        UnstyledList,
        UnstyledListItem,
      },
    },
    options: {
      storySort: {
        order: ['Welcome', 'Change Log', '*'],
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        Light: 'light-app-theme',
        Dark: 'dark-app-theme',
        Black: 'black-app-theme',
      },
      defaultTheme: 'Light',
    }) as any,
  ],
};

export default preview;
