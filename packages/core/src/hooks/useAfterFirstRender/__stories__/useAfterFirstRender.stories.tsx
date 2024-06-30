import React, { useState } from "react";
import useAfterFirstRender from "..";
import Button from "../../../components/Button/Button";
import { Meta, StoryObj } from "@storybook/react";
import Flex from "../../../components/Flex/Flex";
import Heading from "../../../components/Heading/Heading";

type Story = StoryObj<typeof useAfterFirstRender>;

export default {
  title: "Hooks/useAfterFirstRender"
} satisfies Meta<typeof useAfterFirstRender>;

export const Overview: Story = {
  render: () => {
    const isAfterFirstRender = useAfterFirstRender();
    const [renderCount, setRenderCount] = useState(0);

    const handleRerender = () => {
      setRenderCount(prevCount => prevCount + 1);
    };

    return (
      <>
        <Heading type={Heading.types.H3} weight={Heading.weights.NORMAL}>
          {isAfterFirstRender.current ? "It is after the first render!" : "This is the first render!"}
        </Heading>
        <p>Rerender count: {renderCount}</p>
        <Button onClick={handleRerender}>Rerender component</Button>
      </>
    );
  },
  decorators: [
    Story => (
      <Flex direction={Flex.directions.COLUMN} align={Flex.align.START}>
        <Story />
      </Flex>
    )
  ],
  parameters: {
    docs: {
      liveEdit: {
        scope: { Heading }
      }
    }
  }
};
