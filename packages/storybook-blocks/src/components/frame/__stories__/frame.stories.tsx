import type { Meta, StoryObj } from '@storybook/react';
import Frame from '../frame';

const meta: Meta<typeof Frame> = {
  component: Frame,
  title: 'Components/Frame',
};
export default meta;

type Story = StoryObj<typeof Frame>;

export const Overview: Story = {
  args: {
    children: 'This is a frame',
  },
};
