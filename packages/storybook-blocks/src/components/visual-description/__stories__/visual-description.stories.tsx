import type { Meta, StoryObj } from '@storybook/react';
import VisualDescription from '../visual-description';

const meta: Meta<typeof VisualDescription> = {
  component: VisualDescription,
  title: 'Components/VisualDescription',
};
export default meta;

type Story = StoryObj<typeof VisualDescription>;

export const Overview: Story = {
  args: {
    title: 'Example Title',
    ariaLabel: 'Example Visual Description',
    children: <img src="/visual-description.png" alt="Example Image" width={200} />,
    description: 'This is an example visual description.',
    code: 'const exampleCode = "Hello, world!";',
    className: '',
    visualDescriptionClassName: '',
  },
};
