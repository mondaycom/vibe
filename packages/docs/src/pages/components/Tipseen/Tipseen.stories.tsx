import React, { useCallback, useState } from "react";
import { type Meta, type StoryObj } from "@storybook/react";
import {
  Tipseen,
  type TipseenProps,
  TipseenContent,
  type TipseenContentProps,
  TipseenWizard,
  TipseenImage,
  TipseenMedia,
  Flex
} from "@vibe/core";
import picture from "./assets/picture.svg";
import video from "./assets/video.mp4";
import { createStoryMetaSettingsDecorator } from "../../../utils/createStoryMetaSettingsDecorator";

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
  decorators: metaSettings.decorators
} as Meta<typeof Tipseen>;

const tipseenTemplate = ({ title, children, position, ...otherArgs }: TipseenProps & TipseenContentProps) => {
  return (
    <Tipseen
      position={position}
      content={<TipseenContent title={title}>{children}</TipseenContent>}
      {...otherArgs}
    >
      <div style={{ height: "160px" }} />
    </Tipseen>
  );
};

export const Overview: StoryObj<typeof Tipseen> = {
  render: tipseenTemplate.bind({}),
  name: "Overview",
  args: {
    id: "overview-tipseen",
    title: "Title",
    children: <div>Message for the user will appear here, to give more information about the feature.</div>,
    position: "right"
  },
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const Colors: StoryObj<typeof Tipseen> = {
  render: () => {
    return (
      <Flex direction="column">
        <Tipseen
          id="colors-tipseen-1"
          position="right"
          content={
            <TipseenContent id="colors-content-1" title="This is a title">
              Message for the user will appear here, to give more information about the feature.
            </TipseenContent>
          }
        >
          <div style={{ height: "180px" }} />
        </Tipseen>
        <Tipseen
          id="colors-tipseen-2"
          position="right"
          color="primary"
          content={
            <TipseenContent id="colors-content-2" title="This is a title">
              Message for the user will appear here, to give more information about the feature.
            </TipseenContent>
          }
        >
          <div style={{ height: "180px" }} />
        </Tipseen>
      </Flex>
    );
  },
  name: "Colors"
};

export const TipseenWithAWizard: StoryObj<typeof Tipseen> = {
  render: () => {
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
        <div style={{ height: "150px" }} />
      </Tipseen>
    );
  },

  name: "Tipseen with a wizard"
};

export const TipseenWithImage: StoryObj<typeof Tipseen> = {
  render: () => {
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
        closeButtonTheme="light"
        content={
          <>
            <TipseenImage src={picture} />
            <TipseenWizard title="This is a title" steps={content} activeStepIndex={2} />
          </>
        }
      >
        <div style={{ height: "300px" }} />
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

export const TipseenWithCustomMedia: StoryObj<typeof Tipseen> = {
  render: () => {
    return (
      <Tipseen
        position="right"
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
        <div style={{ height: "280px" }} />
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

export const FloatingTipseen: StoryObj<typeof Tipseen> = {
  render: () => {
    return (
      <Tipseen
        closeButtonTheme="dark"
        floating
        content={
          <>
            <TipseenImage src={picture} />
            <TipseenContent title="This is a Floating Tipseen">
              Message for the user will appear here, to give more information about the feature.
            </TipseenContent>
          </>
        }
        // You do not have to use containerSelector, in current use this is for story only
        containerSelector="#tipseen-floating-container"
      />
    );
  },
  decorators: [
    Story => (
      <div style={{ height: "400px" }} id="tipseen-floating-container">
        <Story />
      </div>
    )
  ],
  parameters: {
    docs: {
      liveEdit: {
        scope: { picture }
      }
    }
  },
  name: "Floating Tipseen"
};
