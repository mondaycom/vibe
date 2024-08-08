import React from "react";
import { createComponentTemplate, StoryDescription } from "vibe-storybook-components";
import Loader from "../Loader";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { Button, DialogContentContainer, Flex, Search } from "../..";
import { useCallback, useState } from "react";
import "./Loader.stories.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Loader,
  enumPropNamesArray: ["size", "color"]
});

export default {
  title: "Feedback/Loader",
  component: Loader,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const loaderTemplate = createComponentTemplate(Loader);

export const Overview = {
  render: loaderTemplate.bind({}),
  name: "Overview",
  args: {
    size: "medium"
  }
};

export const SizeVariants = {
  render: () => (
    <Flex direction="row" gap="small">
      <StoryDescription description="Xs" vertical align={StoryDescription.align.START}>
        <div className="monday-storybook-loader_size-variants_container">
          <Loader size="xs" />
        </div>
      </StoryDescription>
      <StoryDescription description="Small" vertical align={StoryDescription.align.START}>
        <div className="monday-storybook-loader_size-variants_container">
          <Loader size="small" />
        </div>
      </StoryDescription>
      <StoryDescription description="Medium" vertical align={StoryDescription.align.START}>
        <div className="monday-storybook-loader_size-variants_container">
          <Loader size="medium" />
        </div>
      </StoryDescription>
      <StoryDescription description="Large" vertical align={StoryDescription.align.START}>
        <div className="monday-storybook-loader_size-variants_container">
          <Loader size="large" />
        </div>
      </StoryDescription>
    </Flex>
  ),

  name: "Size variants"
};

export const ColorVariants = {
  render: () => (
    <Flex direction="row" gap="small">
      <StoryDescription description="Primary" vertical align={StoryDescription.align.START}>
        <Loader size="medium" color="primary" />
      </StoryDescription>
      <StoryDescription description="Secondary" vertical align={StoryDescription.align.START}>
        <Loader size="medium" color="secondary" />
      </StoryDescription>
      <StoryDescription description="Dark" vertical align={StoryDescription.align.START}>
        <Loader size="medium" color="dark" />
      </StoryDescription>
      <StoryDescription description="OnPrimary" vertical align={StoryDescription.align.START}>
        <Flex direction="row">
          <div className="monday-storybook-loader_color-variants_on-primary--color-black">
            <Loader size="medium" color="onPrimary" />
          </div>
          <div className="monday-storybook-loader_color-variants_on-primary--color-negative">
            <Loader size="medium" color="onPrimary" />
          </div>
          <div className="monday-storybook-loader_color-variants_on-primary--color-positive">
            <Loader size="medium" color="onPrimary" />
          </div>
          <div className="monday-storybook-loader_color-variants_on-primary--color-primary">
            <Loader size="medium" color="onPrimary" />
          </div>
        </Flex>
      </StoryDescription>
    </Flex>
  ),

  name: "Color variants"
};

export const CustomColors = {
  render: () => (
    <div
      style={{
        color: "var(--color-dark-red)"
      }}
    >
      <Loader size="medium" />
    </div>
  ),

  name: "Custom colors"
};

export const VisualVariants = {
  render: () => (
    <Flex direction="row" gap="small">
      <StoryDescription description="Casual" vertical align={StoryDescription.align.START}>
        <div>
          <Loader size="medium" />
        </div>
      </StoryDescription>
      <StoryDescription
        description="With background"
        vertical
        align={StoryDescription.align.START}
        headerStyle={{
          width: "fitContent"
        }}
      >
        <div>
          <Loader size="medium" hasBackground />
        </div>
      </StoryDescription>
    </Flex>
  ),

  name: "Visual variants"
};

export const LoaderInTextField = {
  render: () => (
    <DialogContentContainer>
      <Search loading placeholder="Board name" />
    </DialogContentContainer>
  ),
  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true
    }
  },

  name: "Loader in text field"
};

export const LoaderInButton = {
  render: () => {
    const [loading, setLoading] = useState(false);

    const onClick = useCallback(() => {
      setLoading(true);
    }, [setLoading]);

    return (
      <Button loading={loading} onClick={onClick}>
        Click here for loading
      </Button>
    );
  },

  name: "Loader in button"
};
