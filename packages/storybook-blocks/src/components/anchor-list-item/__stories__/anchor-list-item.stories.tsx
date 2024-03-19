import type { Meta, StoryObj } from '@storybook/react';
import AnchorListItem from '../anchor-list-item';

const meta: Meta<typeof AnchorListItem> = {
  component: AnchorListItem,
  title: 'Components/AnchorListItem',
};
export default meta;

type Story = StoryObj<typeof AnchorListItem>;

export const Overview: Story = {
  args: {
    children: 'This is a anchor list item',
  },
};
