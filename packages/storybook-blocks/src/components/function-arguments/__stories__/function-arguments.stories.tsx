import type { Meta, StoryObj } from '@storybook/react';
import FunctionArguments from '../function-arguments';
import FunctionArgument from '../function-argument';

const meta: Meta<typeof FunctionArguments> = {
  component: FunctionArguments,
  title: 'Components/FunctionArguments',
};
export default meta;

type Story = StoryObj<typeof FunctionArguments>;

export const Overview: Story = {
  args: {
    children: (
      <FunctionArgument name="argument" type="type" description="Description of the argument">
        <FunctionArgument
          name="callback"
          type="(event: Event) => void"
          description="Callback function to execute when the event is fired."
          required
        />
        <FunctionArgument
          name="count"
          type="number"
          description="The number of items to process."
          default="0"
          required
        />
      </FunctionArgument>
    ),
  },
};
