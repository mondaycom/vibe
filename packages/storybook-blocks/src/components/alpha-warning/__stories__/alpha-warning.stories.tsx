import type { Meta, StoryObj } from '@storybook/react';
import AlphaWarning from '../alpha-warning';

const meta: Meta<typeof AlphaWarning> = {
  component: AlphaWarning,
  title: 'Storybook Blocks/AlphaWarning',
};
export default meta;

type Story = StoryObj<typeof AlphaWarning>;

export const Overview: Story = {};
