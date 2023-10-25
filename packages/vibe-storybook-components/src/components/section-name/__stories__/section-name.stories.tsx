import type { Meta, StoryObj } from '@storybook/react';
import SectionName from '../section-name';

const meta: Meta<typeof SectionName> = {
  component: SectionName,
  title: 'Components/SectionName',
};
export default meta;

type Story = StoryObj<typeof SectionName>;

export const Overview: Story = {
  args: {
    children: 'This is a section name',
  },
};
