import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import UnstyledList from '../unstyled-list';
import UnstyledListItem from '../../unstyled-list-item/unstyled-list-item';

const meta: Meta<typeof UnstyledList> = {
  component: UnstyledList,
  title: 'Components/UnstyledList',
};
export default meta;

type Story = StoryObj<typeof UnstyledList>;

export const Overview: Story = {
  args: {
    children: (
      <>
        <UnstyledListItem key="1">Item one</UnstyledListItem>
        <UnstyledListItem key="2">Item two</UnstyledListItem>
      </>
    ),
  },
};
