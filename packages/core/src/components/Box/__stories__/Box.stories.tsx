import React from "react";
import Box, { BoxProps } from "../Box";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import styles from "./Box.stories.module.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Box
});

export default {
  title: "Layout/Box",
  component: Box,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators,
  parameters: {
    docs: {
      liveEdit: {
        scope: { styles }
      }
    }
  }
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
    <div className={styles.boxWrapper}>
      <Box backgroundColor="primaryBackgroundColor">primaryBackgroundColor</Box>
      <Box backgroundColor="secondaryBackgroundColor">secondaryBackgroundColor</Box>
      <Box backgroundColor="greyBackgroundColor">greyBackgroundColor</Box>
      <Box backgroundColor="allgreyBackgroundColor">allgreyBackgroundColor</Box>
      <Box textColor="textColorOnInverted" backgroundColor="invertedColorBackground">
        invertedColorBackground
      </Box>
    </div>
  )
};

export const TextColors = {
  render: () => (
    <div className={styles.boxWrapper}>
      <Box textColor="primaryTextColor">textPrimaryTextColor</Box>
      <Box backgroundColor="invertedColorBackground" textColor="textColorOnInverted">
        textColorOnInverted
      </Box>
      <Box textColor="secondaryTextColor">secondaryTextColor</Box>
    </div>
  )
};

export const Border = {
  render: () => (
    <div className={styles.boxWrapper}>
      <Box border>default</Box>
    </div>
  )
};

export const BorderColor = {
  render: () => (
    <div className={styles.boxWrapper}>
      <Box border borderColor="uiBorderColor">
        uiBorderColor
      </Box>
      <Box border borderColor="layoutBorderColor">
        layoutBorderColor
      </Box>
    </div>
  )
};

export const RoundCorners = {
  render: () => (
    <div className={styles.boxWrapper}>
      <Box border rounded="small">
        small
      </Box>
      <Box border rounded="medium">
        medium
      </Box>
      <Box border rounded="big">
        big
      </Box>
    </div>
  )
};

export const Shadow = {
  render: () => (
    <div className={styles.boxWrapper}>
      <Box shadow="xs">xs</Box>
      <Box shadow="small">small</Box>
      <Box shadow="medium">medium</Box>
      <Box shadow="large">large</Box>
    </div>
  )
};

export const Margin = {
  render: () => (
    <div className={styles.boxWrapper}>
      <div className={styles.boxMarginWrapper}>
        <Box backgroundColor="primaryBackgroundColor" border margin="xs">
          <div className={styles.boxPaddingInner}>xs</div>
        </Box>
      </div>
      <div className={styles.boxMarginWrapper}>
        <Box backgroundColor="primaryBackgroundColor" border margin="small">
          <div className={styles.boxPaddingInner}>small</div>
        </Box>
      </div>
      <div className={styles.boxMarginWrapper}>
        <Box backgroundColor="primaryBackgroundColor" border margin="medium">
          <div className={styles.boxPaddingInner}>medium</div>
        </Box>
      </div>
      <div className={styles.boxMarginWrapper}>
        <Box backgroundColor="primaryBackgroundColor" border margin="large">
          <div className={styles.boxPaddingInner}>large</div>
        </Box>
      </div>
      <div className={styles.boxMarginWrapper}>
        <Box backgroundColor="primaryBackgroundColor" border margin="xl">
          <div className={styles.boxPaddingInner}>xl</div>
        </Box>
      </div>
      <div className={styles.boxMarginWrapper}>
        <Box backgroundColor="primaryBackgroundColor" border margin="xxl">
          <div className={styles.boxPaddingInner}>xxl</div>
        </Box>
      </div>
      <div className={styles.boxMarginWrapper}>
        <Box border margin="xxxl">
          <div className={styles.boxPaddingInner}>xxxl</div>
        </Box>
      </div>
    </div>
  )
};

export const Padding = {
  render: () => (
    <div className={styles.boxWrapper}>
      <div className={styles.boxPaddingWrapper}>
        <Box border padding="xs">
          <div className={styles.boxPaddingInner}>xs</div>
        </Box>
      </div>
      <div className={styles.boxPaddingWrapper}>
        <Box border padding="small">
          <div className={styles.boxPaddingInner}>small</div>
        </Box>
      </div>
      <div className={styles.boxPaddingWrapper}>
        <Box border padding="medium">
          <div className={styles.boxPaddingInner}>medium</div>
        </Box>
      </div>
      <div className={styles.boxPaddingWrapper}>
        <Box border padding="large">
          <div className={styles.boxPaddingInner}>large</div>
        </Box>
      </div>
      <div className={styles.boxPaddingWrapper}>
        <Box border padding="xl">
          <div className={styles.boxPaddingInner}>xl</div>
        </Box>
      </div>
      <div className={styles.boxPaddingWrapper}>
        <Box border padding="xxl">
          <div className={styles.boxPaddingInner}>xxl</div>
        </Box>
      </div>
      <div className={styles.boxPaddingWrapper}>
        <Box border padding="xxxl">
          <div className={styles.boxPaddingInner}>xxxl</div>
        </Box>
      </div>
    </div>
  )
};

export const Disabled = {
  render: () => (
    <div className={styles.boxWrapper}>
      <Box backgroundColor="allgreyBackgroundColor" border disabled>
        disabled
      </Box>
    </div>
  )
};
