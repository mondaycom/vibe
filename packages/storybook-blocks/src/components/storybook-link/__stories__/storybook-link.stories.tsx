import type { Meta, StoryObj } from '@storybook/react';
import StorybookLink from '../storybook-link';

const meta: Meta<typeof StorybookLink> = {
  component: StorybookLink,
  title: 'Components/StorybookLink',
};
export default meta;

type Story = StoryObj<typeof StorybookLink>;

export const Overview: Story = {
  args: {
    page: 'Components/Paragraph',
    children: 'Navigate to "Paragraph"',
  },
};
