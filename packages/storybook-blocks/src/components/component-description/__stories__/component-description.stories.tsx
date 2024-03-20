import type { Meta, StoryObj } from '@storybook/react';
import ComponentDescription from '../component-description';

const meta: Meta<typeof ComponentDescription> = {
  component: ComponentDescription,
  title: 'Components/ComponentDescription',
};
export default meta;

type Story = StoryObj<typeof ComponentDescription>;

export const Overview: Story = {
  args: {
    description: 'This is a description',
    children: '',
  },
};
