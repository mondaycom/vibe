import type { Meta, StoryObj } from '@storybook/react';
import ColorDescription from '../color-description';

const meta: Meta<typeof ColorDescription> = {
  component: ColorDescription,
  title: 'Components/ColorDescription',
};
export default meta;

type Story = StoryObj<typeof ColorDescription>;

export const Overview: Story = {
  args: {
    colorName: 'sb-positive-color',
    description: 'This is a description',
    withBorder: false,
  },
};
