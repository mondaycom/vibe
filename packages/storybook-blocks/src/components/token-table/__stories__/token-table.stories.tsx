import type { Meta, StoryObj } from '@storybook/react';
import TokenTable from '../token-table';

const meta: Meta<typeof TokenTable> = {
  component: TokenTable,
  title: 'Components/TokenTable',
};
export default meta;

type Story = StoryObj<typeof TokenTable>;

export const Overview: Story = {
  args: {
    theadData: ['Token', 'Value'],
    tbodyData: [
      { id: '1', items: ['--token-1', '#111'] },
      { id: '2', items: ['--token-2', '#222'] },
    ],
  },
};
