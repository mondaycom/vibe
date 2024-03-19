import type { Meta, StoryObj } from '@storybook/react';
import InformationBox from '../information-box';

const meta: Meta<typeof InformationBox> = {
  component: InformationBox,
  title: 'Components/InformationBox',
};
export default meta;

type Story = StoryObj<typeof InformationBox>;

export const Overview: Story = {
  args: {
    title: 'Title',
    component: <img src="/visual-description.png" alt="Example Image" width={100} />,
    description: 'This is a description.',
    href: '/?path=/docs/welcome--docs',
  },
};
