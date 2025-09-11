import React from "react";
import Box, { type BoxProps } from "../Box";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { Divider } from "../../Divider";
import { type StoryFn } from "@storybook/react";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Box
});

//TODO remove when remove the flex class from the stories
metaSettings.decorators = [
  ...(metaSettings.decorators || []),
  (Story: StoryFn) => (
    <div style={{ width: "100%" }}>
      <Story />
    </div>
  )
];
export default {
  title: "Layout/Box",
  component: Box,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const boxTemplate = (args: BoxProps) => (
  <Box border rounded="medium" padding="large" marginBottom="medium" {...args} style={{ width: "100%" }}>
    Box composite component
  </Box>
);

export const Overview = {
  render: boxTemplate.bind({}),
  name: "Overview",
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const BackgroundColors = {
  render: () => (
    <>
      <Box backgroundColor="primaryBackgroundColor" padding="large" marginBottom="medium">
        primaryBackgroundColor
      </Box>
      <Box backgroundColor="secondaryBackgroundColor" padding="large" marginBottom="medium">
        secondaryBackgroundColor
      </Box>
      <Box backgroundColor="greyBackgroundColor" padding="large" marginBottom="medium">
        greyBackgroundColor
      </Box>
      <Box backgroundColor="allgreyBackgroundColor" padding="large" marginBottom="medium">
        allgreyBackgroundColor
      </Box>
      <Box
        textColor="textColorOnInverted"
        backgroundColor="invertedColorBackground"
        padding="large"
        marginBottom="medium"
      >
        invertedColorBackground
      </Box>
    </>
  )
};

export const TextColors = {
  render: () => (
    <>
      <Box textColor="primaryTextColor" padding="large" marginBottom="medium">
        textPrimaryTextColor
      </Box>
      <Box
        backgroundColor="invertedColorBackground"
        textColor="textColorOnInverted"
        padding="large"
        marginBottom="medium"
      >
        textColorOnInverted
      </Box>
      <Box textColor="secondaryTextColor" padding="large" marginBottom="medium">
        secondaryTextColor
      </Box>
    </>
  )
};

export const Border = {
  render: () => (
    <>
      <Box border padding="large" marginBottom="medium">
        default
      </Box>
    </>
  )
};

export const BorderColor = {
  render: () => (
    <>
      <Box border borderColor="uiBorderColor" padding="large" marginBottom="medium">
        uiBorderColor
      </Box>
      <Box border borderColor="layoutBorderColor" padding="large" marginBottom="medium">
        layoutBorderColor
      </Box>
    </>
  )
};

export const RoundCorners = {
  render: () => (
    <>
      <Box border rounded="small" padding="large" marginBottom="medium">
        small
      </Box>
      <Box border rounded="medium" padding="large" marginBottom="medium">
        medium
      </Box>
      <Box border rounded="big" padding="large" marginBottom="medium">
        big
      </Box>
    </>
  )
};

export const Shadow = {
  render: () => (
    <>
      <Box shadow="xs" padding="large" marginBottom="medium">
        xs
      </Box>
      <Box shadow="small" padding="large" marginBottom="medium">
        small
      </Box>
      <Box shadow="medium" padding="large" marginBottom="medium">
        medium
      </Box>
      <Box shadow="large" padding="large" marginBottom="medium">
        large
      </Box>
    </>
  )
};

export const Margin = {
  render: () => (
    <>
      <Box backgroundColor="allgreyBackgroundColor">
        <Box backgroundColor="primaryBackgroundColor" border margin="xs">
          xs
        </Box>
      </Box>
      <Divider withoutMargin />
      <Box backgroundColor="allgreyBackgroundColor">
        <Box backgroundColor="primaryBackgroundColor" border margin="small">
          small
        </Box>
      </Box>
      <Divider withoutMargin />
      <Box backgroundColor="allgreyBackgroundColor">
        <Box backgroundColor="primaryBackgroundColor" border margin="medium">
          medium
        </Box>
      </Box>
      <Divider withoutMargin />
      <Box backgroundColor="allgreyBackgroundColor">
        <Box backgroundColor="primaryBackgroundColor" border margin="large">
          large
        </Box>
      </Box>
      <Divider withoutMargin />
      <Box backgroundColor="allgreyBackgroundColor">
        <Box backgroundColor="primaryBackgroundColor" border margin="xl">
          xl
        </Box>
      </Box>
      <Divider withoutMargin />
      <Box backgroundColor="allgreyBackgroundColor">
        <Box backgroundColor="primaryBackgroundColor" border margin="xxl">
          xxl
        </Box>
      </Box>
      <Divider withoutMargin />
      <Box backgroundColor="allgreyBackgroundColor">
        <Box backgroundColor="primaryBackgroundColor" border margin="xxxl">
          xxxl
        </Box>
      </Box>
      <Divider withoutMargin />
    </>
  )
};

export const Padding = {
  render: () => (
    <>
      <Box style={{ backgroundColor: "var(--color-sky-selected)" }} marginBottom="medium" border padding="xs">
        <Box backgroundColor="primaryBackgroundColor">xs</Box>
      </Box>
      <Box style={{ backgroundColor: "var(--color-sky-selected)" }} marginBottom="medium" border padding="small">
        <Box backgroundColor="primaryBackgroundColor">small</Box>
      </Box>
      <Box style={{ backgroundColor: "var(--color-sky-selected)" }} marginBottom="medium" border padding="medium">
        <Box backgroundColor="primaryBackgroundColor">medium</Box>
      </Box>
      <Box style={{ backgroundColor: "var(--color-sky-selected)" }} marginBottom="medium" border padding="large">
        <Box backgroundColor="primaryBackgroundColor">large</Box>
      </Box>
      <Divider withoutMargin />
      <Box style={{ backgroundColor: "var(--color-sky-selected)" }} marginBottom="medium" border padding="xl">
        <Box backgroundColor="primaryBackgroundColor">xl</Box>
      </Box>
      <Box style={{ backgroundColor: "var(--color-sky-selected)" }} marginBottom="medium" border padding="xxl">
        <Box backgroundColor="primaryBackgroundColor">xxl</Box>
      </Box>
      <Box style={{ backgroundColor: "var(--color-sky-selected)" }} marginBottom="medium" border padding="xxxl">
        <Box backgroundColor="primaryBackgroundColor">xxxl</Box>
      </Box>
    </>
  )
};

export const Disabled = {
  render: () => (
    <Box backgroundColor="allgreyBackgroundColor" border disabled padding="large" marginBottom="medium">
      disabled
    </Box>
  )
};
