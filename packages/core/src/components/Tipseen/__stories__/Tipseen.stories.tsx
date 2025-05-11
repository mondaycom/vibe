import React, { useCallback, useState } from "react";
import Tipseen, { TipseenProps } from "../Tipseen";
import TipseenContent, { TipseenContentProps } from "../TipseenContent";
import TipseenWizard from "../TipseenWizard";
import TipseenImage from "../TipseenImage";
import TipseenMedia from "../TipseenMedia/TipseenMedia";
import { picture, video } from "./assets";
import { modifiers } from "./Tipseen.stories.helpers";
import { createStoryMetaSettingsDecorator } from "../../../storybook/functions/createStoryMetaSettingsDecorator";
import "./Tipseen.stories.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Tipseen
});

export default {
  title: "Components/Tipseen",
  component: Tipseen,
  subcomponents: {
    TipseenMedia,
    TipseenImage,
    TipseenContent,
    TipseenWizard
  },
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators,
  parameters: {
    docs: {
      liveEdit: {
        scope: { modifiers }
      }
    }
  }
};

const tipseenTemplate = ({
  hideDismiss,
  title,
  children,
  position,
  ...otherArgs
}: TipseenProps & TipseenContentProps) => {
  return (
    <Tipseen
      // The modifier's purpose is to prevent the tipseen from being displayed when the user scrolls the story upwards / downwards.
      // Therefore, there is no need to move this prop in your implementations.
      modifiers={modifiers}
      position={position}
      content={
        <TipseenContent hideDismiss={hideDismiss} title={title}>
          {children}
        </TipseenContent>
      }
      {...otherArgs}
    >
      <div className="monday-storybook-tipseen_container" />
    </Tipseen>
  );
};

export const Overview = {
  render: tipseenTemplate.bind({}),
  name: "Overview",

  args: {
    title: "Title",
    children: "Message for the user will appear here, to give more information about the feature.",
    position: "right",
    hideDismiss: false
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const Colors = {
  // The modifier's purpose is to prevent the tipseen from being displayed when the user scrolls the story upwards / downwards.
  render:
    // Therefore, there is no need to move this prop in your implementations.
    () => {
      return (
        <>
          <div className="monday-storybook-tipseen_small-box">
            <Tipseen
              modifiers={modifiers}
              position="right"
              content={
                <TipseenContent title="This is a title" hideDismiss>
                  Message for the user will appear here, to give more information about the feature.
                </TipseenContent>
              }
            >
              <div className="monday-storybook-tipseen_container" />
            </Tipseen>
          </div>
          <div className="monday-storybook-tipseen_small-box">
            <Tipseen
              modifiers={modifiers}
              position="right"
              color="primary"
              content={
                <TipseenContent title="This is a title" hideDismiss>
                  Message for the user will appear here, to give more information about the feature.
                </TipseenContent>
              }
            >
              <div className="monday-storybook-tipseen_container" />
            </Tipseen>
          </div>
        </>
      );
    },

  name: "Colors"
};

export const TipseenWithAWizard = {
  // The modifier's purpose is to prevent the tipseen from being displayed when the user scrolls the story upwards / downwards.
  render:
    // Therefore, there is no need to move this prop in your implementations.
    () => {
      const content = [
        <div>Popover message №1 will appear here</div>,
        <div>Popover message №2 will appear here</div>,
        <div>Popover message №3 will appear here</div>,
        <div>Popover message №4 will appear here</div>,
        <div>Popover message №5 will appear here</div>
      ];

      const [activeStepIndex, setActiveStepIndex] = useState(2);

      const onChangeActiveStep = useCallback((_e: any, stepIndex: React.SetStateAction<number>) => {
        setActiveStepIndex(stepIndex);
      }, []);

      return (
        <Tipseen
          modifiers={modifiers}
          position="right"
          content={
            <TipseenWizard
              title="This is a title"
              steps={content}
              activeStepIndex={activeStepIndex}
              onChangeActiveStep={onChangeActiveStep}
              onFinish={() => {}}
            />
          }
        >
          <div className="monday-storybook-tipseen_container" />
        </Tipseen>
      );
    },

  name: "Tipseen with a wizard"
};

export const TipseenWithImage = {
  // The modifier's purpose is to prevent the tipseen from being displayed when the user scrolls the story upwards / downwards.
  render:
    // Therefore, there is no need to move this prop in your implementations.
    () => {
      const content = [
        <div>Message for the user will appear here, to give more information about the feature.</div>,
        <div>Message for the user will appear here, to give more information about the feature.</div>,
        <div>Message for the user will appear here, to give more information about the feature.</div>,
        <div>Message for the user will appear here, to give more information about the feature.</div>,
        <div>Message for the user will appear here, to give more information about the feature.</div>
      ];

      return (
        <Tipseen
          position="right"
          modifiers={modifiers}
          closeButtonTheme="dark"
          content={
            <>
              <TipseenImage className="monday-storybook-tipseen_image" src={picture} />
              <TipseenWizard title="This is a title" steps={content} activeStepIndex={2} />
            </>
          }
        >
          <div className="monday-storybook-tipseen_big-container" />
        </Tipseen>
      );
    },
  parameters: {
    docs: {
      liveEdit: {
        scope: { picture }
      }
    }
  },

  name: "Tipseen with image"
};

export const TipseenWithCustomMedia = {
  // The modifier's purpose is to prevent the tipseen from being displayed when the user scrolls the story upwards / downwards.
  render:
    // Therefore, there is no need to move this prop in your implementations.
    () => {
      return (
        <Tipseen
          position="right"
          modifiers={modifiers}
          closeButtonTheme="dark"
          content={
            <>
              <TipseenMedia>
                <video
                  autoPlay
                  muted
                  loop
                  src={video}
                  style={{
                    width: "100%"
                  }}
                />
              </TipseenMedia>
              <TipseenContent title="This is a title">
                Message for the user will appear here, to give more information about the feature.
              </TipseenContent>
            </>
          }
        >
          <div className="monday-storybook-tipseen_big-container" />
        </Tipseen>
      );
    },
  parameters: {
    docs: {
      liveEdit: {
        scope: { video }
      }
    }
  },

  name: "Tipseen with custom media"
};

export const FloatingTipseen = {
  // You do not have to use containerSelector, in current use this is for story only
  render: () => {
    return (
      <Tipseen
        closeButtonTheme="dark"
        floating
        content={
          <>
            <TipseenImage className="monday-storybook-tipseen_image" src={picture} />
            <TipseenContent title="This is a Floating Tipseen">
              Message for the user will appear here, to give more information about the feature.
            </TipseenContent>
          </>
        }
        containerSelector="#story--components-tipseen--floating-tipseen"
      />
    );
  },
  parameters: {
    docs: {
      liveEdit: {
        scope: { picture }
      }
    }
  },
  name: "Floating Tipseen"
};
