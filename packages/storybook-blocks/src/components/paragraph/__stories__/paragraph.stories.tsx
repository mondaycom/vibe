import type { Meta, StoryObj } from '@storybook/react';
import Paragraph from '../paragraph';

const meta: Meta<typeof Paragraph> = {
  component: Paragraph,
  title: 'Components/Paragraph',
};
export default meta;

type Story = StoryObj<typeof Paragraph>;

export const Overview: Story = {
  args: {
    children: 'This is a paragraph',
  },
};
