import type { Meta, StoryObj } from '@storybook/react';
import AlphaWarning from '../alpha-warning';

const meta: Meta<typeof AlphaWarning> = {
  component: AlphaWarning,
  title: 'Components/AlphaWarning',
};
export default meta;

type Story = StoryObj<typeof AlphaWarning>;

export const Overview: Story = {};
