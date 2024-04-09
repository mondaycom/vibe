import type { Meta, StoryObj } from '@storybook/react';
import DocFooter from '../doc-footer';

const meta: Meta<typeof DocFooter> = {
  component: DocFooter,
  title: 'Components/DocFooter',
};
export default meta;

type Story = StoryObj<typeof DocFooter>;

export const Overview: Story = {
  args: {
    feedbackFormLink: '/',
  },
};
