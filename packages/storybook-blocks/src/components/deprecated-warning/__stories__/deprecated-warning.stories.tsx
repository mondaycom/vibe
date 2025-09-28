import type { Meta, StoryObj } from '@storybook/react';
import DeprecatedWarning from '../deprecated-warning';

const meta: Meta<typeof DeprecatedWarning> = {
  component: DeprecatedWarning,
  title: 'Storybook Blocks/DeprecatedWarning',
};
export default meta;

type Story = StoryObj<typeof DeprecatedWarning>;

export const Overview: Story = {
  args: {
    alternativeName: 'NewComponent',
    alternativeLink: '#',
  },
};
