import type { Meta, StoryObj } from '@storybook/react';
import StoryDescription from '../story-description';
import StatusTag from '../../status-tag/status-tag';
import { FlexJustify } from '../../../helpers/components/Flex/FlexConstants';

const meta: Meta<typeof StoryDescription> = {
  component: StoryDescription,
  title: 'Storybook Blocks/StoryDescription',
};
export default meta;

type Story = StoryObj<typeof StoryDescription>;

export const Overview: Story = {
  args: {
    description: 'Deprecated',
    children: <StatusTag type="deprecated" />,
    justify: FlexJustify.CENTER,
  },
};
