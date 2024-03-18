import type { Meta, StoryObj } from '@storybook/react';
import ComponentRules from '../component-rules';
import ComponentName from '../../component-name/component-name';

const meta: Meta<typeof ComponentRules> = {
  component: ComponentRules,
  title: 'Components/ComponentRules',
};
export default meta;

type Story = StoryObj<typeof ComponentRules>;

export const Overview: Story = {
  args: {
    rules: [
      {
        positive: {
          component: <ComponentName className="">Hello world</ComponentName>,
          description: 'Always capitalize the first letter of the first word in the heading.',
        },
        negative: {
          component: <ComponentName className="">Hello World</ComponentName>,
          description: 'Please avoid capitalizing the first letter of each word in the heading.',
        },
      },
    ],
  },
};
