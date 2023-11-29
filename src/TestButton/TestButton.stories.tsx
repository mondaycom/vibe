import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { TestButton } from "./TestButton";

const meta: Meta<typeof TestButton> = {
  title: "TestButton",
  component: TestButton
};

export default meta;
type Story = StoryObj<typeof TestButton>;

// TODO storybook 7 migration: remove test hook story
export const Primary: Story = {
  render: () => {
    const [value, setValue] = useState("Secondary");
    const [isPrimary, setIsPrimary] = useState(false);

    const handleOnChange = () => {
      if (!isPrimary) {
        setIsPrimary(true);
        setValue("Primary");
      }
    };
    return <TestButton primary={isPrimary} onClick={handleOnChange} label={value} />;
  }
};
