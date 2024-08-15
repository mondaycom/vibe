import React from "react";
import Box, { BoxProps } from "../Box";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import styles from "./Box.stories.module.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Box,
  enumPropNamesArray: [
    "className",
    "id",
    "children",
    "disabled",
    "border",
    "borderColor",
    "rounded",
    "shadow",
    "margin",
    "marginX",
    "marginY",
    "marginTop",
    "marginEnd",
    "marginBottom",
    "marginStart",
    "padding",
    "paddingX",
    "paddingY",
    "paddingTop",
    "paddingEnd",
    "paddingBottom",
    "paddingStart",
    "backgroundColor",
    "textColor"
  ]
});

export default {
  title: "Layout/Box",
  component: Box,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const boxTemplate = (args: BoxProps) => (
  <div className={styles.boxWrapper}>
    <Box border rounded="medium" {...args}>
      Box composite component
    </Box>
  </div>
);

export const Overview = {
  render: boxTemplate.bind({}),

  name: "Overview"
};

export const BackgroundColors = {
  render: () => (
    <div className={styles.boxWrapper}>
      <Box backgroundColor="bgPrimaryBackgroundColor">bgPrimaryBackgroundColor</Box>
      <Box backgroundColor="bgSecondaryBackgroundColor">bgSecondaryBackgroundColor</Box>
      <Box backgroundColor="bgGreyBackgroundColor">bgGreyBackgroundColor</Box>
      <Box backgroundColor="bgAllgreyBackgroundColor">bgAllgreyBackgroundColor</Box>
      <Box textColor="textTextColorOnInverted" backgroundColor="bgInvertedColorBackground">
        bgInvertedColorBackground
      </Box>
    </div>
  ),

  name: "Background colors"
};

export const TextColors = {
  render: () => (
    <div className={styles.boxWrapper}>
      <Box textColor="textPrimaryTextColor">textPrimaryTextColor</Box>
      <Box backgroundColor="bgInvertedColorBackground" textColor="textTextColorOnInverted">
        textTextColorOnInverted
      </Box>
      <Box textColor="textSecondaryTextColor">textSecondaryTextColor</Box>
    </div>
  ),

  name: "Text Colors"
};

export const Border = {
  render: () => (
    <div className={styles.boxWrapper}>
      <Box border>default</Box>
    </div>
  ),

  name: "Border"
};

export const BorderColor = {
  render: () => (
    <div className={styles.boxWrapper}>
      <Box border borderColor="borderColorUiBorderColor">
        borderColorUiBorderColor
      </Box>
      <Box border borderColor="borderColorLayoutBorderColor">
        borderColorLayoutBorderColor
      </Box>
    </div>
  ),

  name: "Border Color"
};

export const RoundCorners = {
  render: () => (
    <div className={styles.boxWrapper}>
      <Box border rounded="small">
        roundedSmall
      </Box>
      <Box border rounded="medium">
        roundedMedium
      </Box>
      <Box border rounded="big">
        roundedBig
      </Box>
    </div>
  ),

  name: "Round Corners"
};

export const Shadow = {
  render: () => (
    <div className={styles.boxWrapper}>
      <Box shadow="xs">shadowXs</Box>
      <Box shadow="small">shadowSmall</Box>
      <Box shadow="medium">shadowMedium</Box>
      <Box shadow="large">shadowLarge</Box>
    </div>
  ),

  name: "Shadow"
};

export const Margin = {
  render: () => (
    <div className={styles.boxWrapper}>
      <div className={styles.boxMarginWrapper}>
        <Box backgroundColor="bgPrimaryBackgroundColor" border margin="xs">
          <div className={styles.boxPaddingInner}>mXs</div>
        </Box>
      </div>
      <div className={styles.boxMarginWrapper}>
        <Box backgroundColor="bgPrimaryBackgroundColor" border margin="small">
          <div className={styles.boxPaddingInner}>mSmall</div>
        </Box>
      </div>
      <div className={styles.boxMarginWrapper}>
        <Box backgroundColor="bgPrimaryBackgroundColor" border margin="medium">
          <div className={styles.boxPaddingInner}>mMedium</div>
        </Box>
      </div>
      <div className={styles.boxMarginWrapper}>
        <Box backgroundColor="bgPrimaryBackgroundColor" border margin="large">
          <div className={styles.boxPaddingInner}>mLarge</div>
        </Box>
      </div>
      <div className={styles.boxMarginWrapper}>
        <Box backgroundColor="bgPrimaryBackgroundColor" border margin="xl">
          <div className={styles.boxPaddingInner}>mXl</div>
        </Box>
      </div>
      <div className={styles.boxMarginWrapper}>
        <Box backgroundColor="bgPrimaryBackgroundColor" border margin="xxl">
          <div className={styles.boxPaddingInner}>mXxl</div>
        </Box>
      </div>
      <div className={styles.boxMarginWrapper}>
        <Box border margin="xxl">
          <div className={styles.boxPaddingInner}>mXxxl</div>
        </Box>
      </div>
    </div>
  ),

  name: "Margin"
};

export const Padding = {
  render: () => (
    <div className={styles.boxWrapper}>
      <div className={styles.boxPaddingWrapper}>
        <Box border padding="xs">
          <div className={styles.boxPaddingInner}>pXs</div>
        </Box>
      </div>
      <div className={styles.boxPaddingWrapper}>
        <Box border padding="small">
          <div className={styles.boxPaddingInner}>pSmall</div>
        </Box>
      </div>
      <div className={styles.boxPaddingWrapper}>
        <Box border padding="medium">
          <div className={styles.boxPaddingInner}>pMedium</div>
        </Box>
      </div>
      <div className={styles.boxPaddingWrapper}>
        <Box border padding="large">
          <div className={styles.boxPaddingInner}>pLarge</div>
        </Box>
      </div>
      <div className={styles.boxPaddingWrapper}>
        <Box border padding="xl">
          <div className={styles.boxPaddingInner}>pXl</div>
        </Box>
      </div>
      <div className={styles.boxPaddingWrapper}>
        <Box border padding="xxl">
          <div className={styles.boxPaddingInner}>pXxl</div>
        </Box>
      </div>
      <div className={styles.boxPaddingWrapper}>
        <Box border padding="xxl">
          <div className={styles.boxPaddingInner}>pXxxl</div>
        </Box>
      </div>
    </div>
  ),

  name: "Padding"
};

export const Disabled = {
  render: () => (
    <div className={styles.boxWrapper}>
      <Box backgroundColor="bgAllgreyBackgroundColor" border disabled>
        disabled
      </Box>
    </div>
  ),

  name: "Disabled"
};
