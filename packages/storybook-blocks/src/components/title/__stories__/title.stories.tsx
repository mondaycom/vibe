import type { Meta, StoryObj } from '@storybook/react';
import Title from '../title';

const meta: Meta<typeof Title> = {
  component: Title,
  title: 'Components/Title',
};
export default meta;

type Story = StoryObj<typeof Title>;

export const Overview: Story = {
  args: {
    children: 'This is a story title',
  },
};
