import React from "react";
import Label from "../Label";
import Button from "../../Button/Button";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { NOOP } from "../../../utils/function-utils";
import { createComponentTemplate } from "vibe-storybook-components";
import { useEffect, useState } from "react";
import { Decorator, StoryObj } from "@storybook/react";
import Flex from "../../Flex/Flex";
import Box from "../../Box/Box";
import Heading from "../../Heading/Heading";
import Text from "../../Text/Text";

type Story = StoryObj<typeof Label>;

const metaSettings = createStoryMetaSettingsDecorator({
  component: Label
});

export default {
  title: "Components/Label",
  component: Label,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const withGrid: Decorator = Story => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 180px)",
      marginInlineStart: "30px",
      marginTop: "10px",
      gap: "50px",
      width: "100%"
    }}
  >
    <Story />
  </div>
);

const labelTemplate = createComponentTemplate(Label);

export const Overview = {
  render: labelTemplate.bind({}),
  name: "Overview",
  args: {
    text: "New"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const Kinds = {
  render: () => (
    <Flex style={{ marginLeft: "30px", marginTop: "10px", gap: "184px" }}>
      <Flex direction="column" align="start" gap="large">
        <Label text="New" />
        <Text>Fill</Text>
      </Flex>
      <Flex direction="column" align="start" gap="large">
        <Label text="New" kind="line" />
        <Text>Outline</Text>
      </Flex>
    </Flex>
  ),
  name: "Kinds"
};

export const Sizes: Story = {
  render: () => (
    <>
      <Label text="New" />
      <Label text="New" size="small" />
    </>
  ),
  decorators: [withGrid],
  name: "Sizes"
};

export const Colors = {
  render: () => (
    <>
      <Label text="New" />
      <Label text="New" color="negative" />
      <Label text="New" color="positive" />
      <Label text="New" color="dark" />
      <Label text="New" kind="line" />
      <Label text="New" color="negative" kind="line" />
      <Label text="New" color="positive" kind="line" />
      <Label text="New" color="dark" kind="line" />
    </>
  ),
  decorators: [withGrid],
  name: "Colors"
};

export const Clickable = {
  render: () => (
    <>
      <Label text="New" onClick={NOOP} />
      <Label text="New" kind="line" onClick={NOOP} />
    </>
  ),
  decorators: [withGrid],
  name: "Clickable",

  parameters: {
    docs: {
      liveEdit: {
        scope: { NOOP }
      }
    }
  }
};

export const SecondaryLabel = {
  render: () => (
    <Flex direction="column" gap="large">
      <Box style={{ width: "300px" }}>
        <Flex align="center" gap="small">
          <Heading type="h3">Gannt</Heading>
          <Label text="New" kind="line" />
        </Flex>
        <Text element="p" type="text1">
          Plan, track and present your projects visually using the Gannt chart
        </Text>
      </Box>
      <Box style={{ width: "300px", marginTop: "8px" }}>
        <Flex align="center" gap="small">
          <Heading type="h3" style={{ display: "inline" }}>
            Apps
          </Heading>
          <Label text="New" kind="line" />
        </Flex>
        <Text element="p" type="text1" style={{ marginTop: "8px" }}>
          Enhance your dashboard with widgets built on the monday apps framework
        </Text>
      </Box>
    </Flex>
  ),

  name: "Secondary label"
};

export const Celebration = {
  render: () => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        setAnimate(false);
      }, 500);
    }, [animate]);

    return (
      <>
        <Label text="New" kind="line" celebrationAnimation={animate} />
        <Button size="small" kind="tertiary" onClick={() => setAnimate(true)}>
          Click to celebrate
        </Button>
      </>
    );
  },
  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true
    }
  }
};
