import type { Meta, StoryObj } from '@storybook/react';
import SidebarItem from '../sidebar-item';

const meta: Meta<typeof SidebarItem> = {
  component: SidebarItem,
  title: 'Components/SidebarItem',
};
export default meta;

type Story = StoryObj<typeof SidebarItem>;

export const Overview: Story = {
  args: {
    status: 'beta',
    children: 'Sidebar Item',
  },
};
