import type { Meta, StoryObj } from '@storybook/react';
import Link from '../link';

const meta: Meta<typeof Link> = {
  component: Link,
  title: 'Components/Link',
};
export default meta;

type Story = StoryObj<typeof Link>;

export const Overview: Story = {
  args: {
    href: '/?path=/docs/welcome--docs',
    size: Link.sizes.MEDIUM,
    children: 'This is a link to welcome page',
  },
};
