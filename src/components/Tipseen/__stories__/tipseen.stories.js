import { useCallback, useState } from "@storybook/addons";
import { Tip } from "vibe-storybook-components";
import Tipseen from "../Tipseen";
import TipseenContent from "../TipseenContent";
import TipseenWizard from "../TipseenWizard";
import TipseenImage from "../TipseenImage";
import TipseenMedia from "../TipseenMedia/TipseenMedia";
import { picture, video } from "./assets";
import { modifiers } from "./tipseen.stories.helpers";
import { createStoryMetaSettingsDecorator } from "../../../storybook/functions/createStoryMetaSettingsDecorator";
import "./tipseen.stories.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Tipseen,
  enumPropNamesArray: ["position", "animationType", "justify", "closeButtonTheme"]
});

export default {
  title: "Popover/Tipseen",
  component: Tipseen,
  subcomponents: {
    TipseenMedia,
    TipseenImage,
    TipseenContent,
    TipseenWizard
  },
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const tipseenTemplate = ({ isDismissHidden, title, children, position, ...otherArgs }) => {
  return (
    <Tipseen
      // The modifier's purpose is to prevent the tipseen from being displayed when the user scrolls the story upwards / downwards.
      // Therefore, there is no need to move this prop in your implementations.
      modifiers={modifiers}
      position={position}
      content={
        <TipseenContent isDismissHidden={isDismissHidden} title={title}>
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
    children: "Popover message will appear here loremipsum dolor samet…",
    position: Tipseen.positions.RIGHT,
    isDismissHidden: false
  }
};

export const Default = {
  // The modifier's purpose is to prevent the tipseen from being displayed when the user scrolls the story upwards / downwards.
  render:
    // Therefore, there is no need to move this prop in your implementations.
    () => {
      return (
        <Tipseen
          modifiers={modifiers}
          position={Tipseen.positions.RIGHT}
          content={
            <TipseenContent title="This is a title" hideDismiss>
              Popover message will appear here loremipsum dolor samet…
            </TipseenContent>
          }
        >
          <div className="monday-storybook-tipseen_container" />
        </Tipseen>
      );
    },

  name: "Default"
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

      const onChangeActiveStep = useCallback((_e, stepIndex) => {
        setActiveStepIndex(stepIndex);
      }, []);

      return (
        <Tipseen
          modifiers={modifiers}
          position={Tipseen.positions.RIGHT}
          content={
            <TipseenWizard
              title="This is a title"
              steps={content}
              activeStepIndex={activeStepIndex}
              onChangeActiveStep={onChangeActiveStep}
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
        <div>Popover message will appear here lorem ipsum dolor samet…</div>,
        <div>Popover message will appear here lorem ipsum dolor samet…</div>,
        <div>Popover message will appear here lorem ipsum dolor samet…</div>,
        <div>Popover message will appear here lorem ipsum dolor samet…</div>,
        <div>Popover message will appear here lorem ipsum dolor samet…</div>
      ];

      return (
        <Tipseen
          position={Tipseen.positions.RIGHT}
          modifiers={modifiers}
          closeButtonTheme={Tipseen.closeButtonThemes.DARK}
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

  name: "Tipseen with image"
};

export const TipseenWithCustomMedia = {
  // The modifier's purpose is to prevent the tipseen from being displayed when the user scrolls the story upwards / downwards.
  render:
    // Therefore, there is no need to move this prop in your implementations.
    () => {
      return (
        <Tipseen
          position={Tipseen.positions.RIGHT}
          modifiers={modifiers}
          closeButtonTheme={Tipseen.closeButtonThemes.DARK}
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
                Popover message will appear here lorem ipsum dolor samet…
              </TipseenContent>
            </>
          }
        >
          <div className="monday-storybook-tipseen_big-container" />
        </Tipseen>
      );
    },

  name: "Tipseen with custom media"
};

// TODO storybook 7 migration: story is under maintenance - issues with positioning on new storybook layout
export const FloatingTipseen = {
  // You do not have to use containerSelector, in current use this is for story only
  render: () => {
    return (
      <Tip emoji={"🔨"} title={"Story is under maintenance"} type={Tip.types.WARNING}>
        We will fix the story as soon as possible! Sorry for the inconvenience.
      </Tip>
    );
    // return (
    //   <Tipseen
    //     closeButtonTheme={Tipseen.closeButtonThemes.DARK}
    //     floating
    //     content={
    //       <>
    //         <TipseenImage className="monday-storybook-tipseen_image" src={picture} />
    //         <TipseenContent title="This is a Floating Tipseen">
    //           Popover message will appear here lorem ipsum dolor samet…
    //         </TipseenContent>
    //       </>
    //     }
    //     containerSelector="#story--popover-tipseen--floating-tipseen"
    //   />
    // );
  },

  name: "Floating Tipseen",
  height: "500px"
};
