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
    <Box border={Box.borders.DEFAULT} rounded={Box.roundeds.MEDIUM} {...args}>
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
      <Box backgroundColor={Box.backgroundColors.PRIMARY_BACKGROUND_COLOR}>
        Box.backgroundColors.PRIMARY_BACKGROUND_COLOR
      </Box>
      <Box backgroundColor={Box.backgroundColors.SECONDARY_BACKGROUND_COLOR}>
        Box.backgroundColors.SECONDARY_BACKGROUND_COLOR
      </Box>
      <Box backgroundColor={Box.backgroundColors.GREY_BACKGROUND_COLOR}>Box.backgroundColors.GREY_BACKGROUND_COLOR</Box>
      <Box backgroundColor={Box.backgroundColors.ALL_GREY_BACKGROUND_COLOR}>
        Box.backgroundColors.ALL_GREY_BACKGROUND_COLOR
      </Box>
      <Box
        textColor={Box.textColors.TEXT_COLOR_ON_INVERTED}
        backgroundColor={Box.backgroundColors.INVERTED_COLOR_BACKGROUND}
      >
        Box.backgroundColors.INVERTED_COLOR_BACKGROUND
      </Box>
    </div>
  ),

  name: "Background colors"
};

export const TextColors = {
  render: () => (
    <div className={styles.boxWrapper}>
      <Box textColor={Box.textColors.PRIMARY_TEXT_COLOR}>Box.textColors.PRIMARY_TEXT_COLOR</Box>
      <Box
        backgroundColor={Box.backgroundColors.INVERTED_COLOR_BACKGROUND}
        textColor={Box.textColors.TEXT_COLOR_ON_INVERTED}
      >
        Box.textColors.TEXT_COLOR_ON_INVERTED
      </Box>
      <Box textColor={Box.textColors.SECONDARY_TEXT_COLOR}>Box.textColors.SECONDARY_TEXT_COLOR</Box>
    </div>
  ),

  name: "Text Colors"
};

export const Border = {
  render: () => (
    <div className={styles.boxWrapper}>
      <Box border={Box.borders.DEFAULT}>Box.borders.DEFAULT</Box>
    </div>
  ),

  name: "Border"
};

export const BorderColor = {
  render: () => (
    <div className={styles.boxWrapper}>
      <Box border={Box.borders.DEFAULT} borderColor={Box.borderColors.UI_BORDER_COLOR}>
        Box.borderColors.UI_BORDER_COLOR
      </Box>
      <Box border={Box.borders.DEFAULT} borderColor={Box.borderColors.LAYOUT_BORDER_COLOR}>
        Box.borderColors.LAYOUT_BORDER_COLOR
      </Box>
    </div>
  ),

  name: "Border Color"
};

export const RoundCorners = {
  render: () => (
    <div className={styles.boxWrapper}>
      <Box border={Box.borders.DEFAULT} rounded={Box.roundeds.SMALL}>
        Box.roundeds.SMALL
      </Box>
      <Box border={Box.borders.DEFAULT} rounded={Box.roundeds.MEDIUM}>
        Box.roundeds.MEDIUM
      </Box>
      <Box border={Box.borders.DEFAULT} rounded={Box.roundeds.BIG}>
        Box.roundeds.BIG
      </Box>
    </div>
  ),

  name: "Round Corners"
};

export const Shadow = {
  render: () => (
    <div className={styles.boxWrapper}>
      <Box shadow={Box.shadows.XS}>Box.shadows.XS</Box>
      <Box shadow={Box.shadows.SMALL}>Box.shadows.SMALL</Box>
      <Box shadow={Box.shadows.MEDIUM}>Box.shadows.MEDIUM</Box>
      <Box shadow={Box.shadows.LARGE}>Box.shadows.LARGE</Box>
    </div>
  ),

  name: "Shadow"
};

export const Margin = {
  render: () => (
    <div className={styles.boxWrapper}>
      <div className={styles.boxMarginWrapper}>
        <Box
          backgroundColor={Box.backgroundColors.PRIMARY_BACKGROUND_COLOR}
          border={Box.borders.DEFAULT}
          margin={Box.margins.XS}
        >
          <div className={styles.boxPaddingInner}>Box.margins.XS</div>
        </Box>
      </div>
      <div className={styles.boxMarginWrapper}>
        <Box
          backgroundColor={Box.backgroundColors.PRIMARY_BACKGROUND_COLOR}
          border={Box.borders.DEFAULT}
          margin={Box.margins.SMALL}
        >
          <div className={styles.boxPaddingInner}>Box.margins.SMALL</div>
        </Box>
      </div>
      <div className={styles.boxMarginWrapper}>
        <Box
          backgroundColor={Box.backgroundColors.PRIMARY_BACKGROUND_COLOR}
          border={Box.borders.DEFAULT}
          margin={Box.margins.MEDIUM}
        >
          <div className={styles.boxPaddingInner}>Box.margins.MEDIUM</div>
        </Box>
      </div>
      <div className={styles.boxMarginWrapper}>
        <Box
          backgroundColor={Box.backgroundColors.PRIMARY_BACKGROUND_COLOR}
          border={Box.borders.DEFAULT}
          margin={Box.margins.LARGE}
        >
          <div className={styles.boxPaddingInner}>Box.margins.LARGE</div>
        </Box>
      </div>
      <div className={styles.boxMarginWrapper}>
        <Box
          backgroundColor={Box.backgroundColors.PRIMARY_BACKGROUND_COLOR}
          border={Box.borders.DEFAULT}
          margin={Box.margins.XL}
        >
          <div className={styles.boxPaddingInner}>Box.margins.XL</div>
        </Box>
      </div>
      <div className={styles.boxMarginWrapper}>
        <Box
          backgroundColor={Box.backgroundColors.PRIMARY_BACKGROUND_COLOR}
          border={Box.borders.DEFAULT}
          margin={Box.margins.XXL}
        >
          <div className={styles.boxPaddingInner}>Box.margins.XXL</div>
        </Box>
      </div>
      <div className={styles.boxMarginWrapper}>
        <Box border={Box.borders.DEFAULT} margin={Box.margins.XXXL}>
          <div className={styles.boxPaddingInner}>Box.margins.XXXL</div>
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
        <Box border={Box.borders.DEFAULT} padding={Box.paddings.XS}>
          <div className={styles.boxPaddingInner}>Box.paddings.XS</div>
        </Box>
      </div>
      <div className={styles.boxPaddingWrapper}>
        <Box border={Box.borders.DEFAULT} padding={Box.paddings.SMALL}>
          <div className={styles.boxPaddingInner}>Box.paddings.SMALL</div>
        </Box>
      </div>
      <div className={styles.boxPaddingWrapper}>
        <Box border={Box.borders.DEFAULT} padding={Box.paddings.MEDIUM}>
          <div className={styles.boxPaddingInner}>Box.paddings.MEDIUM</div>
        </Box>
      </div>
      <div className={styles.boxPaddingWrapper}>
        <Box border={Box.borders.DEFAULT} padding={Box.paddings.LARGE}>
          <div className={styles.boxPaddingInner}>Box.paddings.LARGE</div>
        </Box>
      </div>
      <div className={styles.boxPaddingWrapper}>
        <Box border={Box.borders.DEFAULT} padding={Box.paddings.XL}>
          <div className={styles.boxPaddingInner}>Box.paddings.XL</div>
        </Box>
      </div>
      <div className={styles.boxPaddingWrapper}>
        <Box border={Box.borders.DEFAULT} padding={Box.paddings.XXL}>
          <div className={styles.boxPaddingInner}>Box.paddings.XXL</div>
        </Box>
      </div>
      <div className={styles.boxPaddingWrapper}>
        <Box border={Box.borders.DEFAULT} padding={Box.paddings.XXXL}>
          <div className={styles.boxPaddingInner}>Box.paddings.XXXL</div>
        </Box>
      </div>
    </div>
  ),

  name: "Padding"
};

export const Disabled = {
  render: () => (
    <div className={styles.boxWrapper}>
      <Box backgroundColor={Box.backgroundColors.ALL_GREY_BACKGROUND_COLOR} border={Box.borders.DEFAULT} disabled>
        Box.disabled.DISABLED
      </Box>
    </div>
  ),

  name: "Disabled"
};
