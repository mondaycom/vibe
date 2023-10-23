import type { Meta, StoryObj } from '@storybook/react';
import ComponentName from '../component-name';

const meta: Meta<typeof ComponentName> = {
  component: ComponentName,
  title: 'Components/ComponentName',
};
export default meta;

type Story = StoryObj<typeof ComponentName>;

export const Overview: Story = {
  args: {
    children: 'Component Name',
  },
};
