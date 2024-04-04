import type { Meta, StoryObj } from '@storybook/react';
import UsageGuidelines from '../usage-guidelines';
import Link from '../../link/link';
import React from 'react';

const meta: Meta<typeof UsageGuidelines> = {
  component: UsageGuidelines,
  title: 'Components/UsageGuidelines',
};
export default meta;

type Story = StoryObj<typeof UsageGuidelines>;

export const Overview: Story = {
  args: {
    guidelines: [
      'Usage guideline #1',
      <>
        <b>Usage guideline #2 - with JSX element</b>
      </>,
      <>
        Usage guideline #3 -<Link href="/?path=/docs/welcome--docs">with link</Link>
      </>,
    ],
  },
};
