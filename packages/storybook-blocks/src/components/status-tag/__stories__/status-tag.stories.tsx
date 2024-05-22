import type { Meta, StoryObj } from '@storybook/react';
import StatusTag from '../status-tag';
import Flex from '../../../helpers/components/Flex/Flex';

const meta: Meta<typeof StatusTag> = {
  component: StatusTag,
  title: 'Components/StatusTag',
};
export default meta;

type Story = StoryObj<typeof StatusTag>;

export const Overview: Story = {
  args: {
    type: 'beta',
  },
};

export const Types: Story = {
  render: () => (
    <Flex direction={Flex.directions.COLUMN} gap={Flex.gaps.MEDIUM} align={Flex.align.START}>
      <StatusTag type="alpha" />
      <StatusTag type="beta" />
      <StatusTag type="deprecated" />
    </Flex>
  ),
};
