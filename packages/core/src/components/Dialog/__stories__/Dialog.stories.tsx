import React from "react";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { Button, Dialog, DialogContentContainer, Flex, IconButton } from "../../../components";
import { ExampleContent } from "./helpers";
import { Info } from "../../Icon/Icons";
import { closeTriggersInteractionSuite } from "../__tests__/Dialog.interactions";
import {
  CLICK_OUTSIDE_DIALOG,
  CLICK_OUTSIDE_DIALOG_BUTTON,
  CONTEXT_MENU_DIALOG,
  HIDE_TRIGGERS_CONTAINER
} from "../__tests__/DialogDataTestIds";
import useSwitch from "../../../hooks/useSwitch";
import "./Dialog.stories.scss";
import { HideShowEvent } from "../../../constants/dialog";
import { DialogProps } from "../Dialog";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Dialog,
  enumPropNamesArray: [], // List enum props here
  iconPropNamesArray: [], // List props that are typed as icons here
  actionPropsArray: [] // List the component's actions here
});

const showHideArgTypes = {
  options: Object.values(HideShowEvent),
  control: {
    type: "multi-select"
  },
  table: {
    type: {
      summary: Object.values(HideShowEvent).join(" | ")
    }
  }
};

export default {
  title: "Popover/Dialog",
  component: Dialog,
  argTypes: {
    ...metaSettings.argTypes,
    hideTrigger: showHideArgTypes,
    showTrigger: showHideArgTypes
  },
  decorators: metaSettings.decorators,
  parameters: {
    docs: {
      liveEdit: {
        scope: { useSwitch, ExampleContent }
      }
    }
  }
};

const dialogTemplate = ({
  showTrigger,
  hideTrigger,
  shouldShowOnMount = true,
  position,
  ...dialogProps
}: DialogProps) => {
  // for prevent dialog to move while scrolling
  const modifiers = [
    {
      name: "preventOverflow",
      options: {
        mainAxis: false
      }
    }
  ];
  return (
    <div className="monday-storybook-dialog--story-padding">
      <Dialog
        modifiers={modifiers}
        shouldShowOnMount={shouldShowOnMount}
        {...dialogProps}
        showTrigger={showTrigger || [Dialog.hideShowTriggers.CLICK]}
        hideTrigger={hideTrigger || [Dialog.hideShowTriggers.CLICK]}
        position={position || Dialog.positions.RIGHT}
        content={
          <DialogContentContainer>
            <ExampleContent />
          </DialogContentContainer>
        }
      >
        <IconButton icon={Info} active kind={IconButton.kinds.SECONDARY} />
      </Dialog>
    </div>
  );
};

export const Overview = {
  render: dialogTemplate.bind({}),
  name: "Overview",
  parameters: {
    docs: {
      liveEdit: { isEnabled: false }
    }
  }
};

export const Positions = {
  render:
    // for prevent dialog to move while scrolling
    () => {
      // For maintain active state of each button according to the dialog open state (this hooks is available for your usage)
      const { isChecked: checkedTop, onChange: onChangeTop } = useSwitch({
        defaultChecked: false
      });

      const { isChecked: checkedBottom, onChange: onChangeBottom } = useSwitch({
        defaultChecked: false
      });

      const { isChecked: checkedRight, onChange: onChangeRight } = useSwitch({
        defaultChecked: false
      });

      const { isChecked: checkedLeft, onChange: onChangeLeft } = useSwitch({
        defaultChecked: false
      });

      const modifiers = [
        {
          name: "preventOverflow",
          options: {
            mainAxis: false
          }
        }
      ];

      return (
        <Flex className="monday-storybook-dialog--story-padding" gap={Flex.gaps.MEDIUM}>
          <Dialog
            modifiers={modifiers}
            open={checkedTop}
            position={Dialog.positions.TOP}
            showTrigger={[]}
            hideTrigger={[]}
            content={
              <DialogContentContainer>
                <ExampleContent />
              </DialogContentContainer>
            }
          >
            <Button kind={Button.kinds.SECONDARY} onClick={onChangeTop} active={checkedTop}>
              Top
            </Button>
          </Dialog>
          <Dialog
            modifiers={modifiers}
            position={Dialog.positions.BOTTOM}
            showTrigger={[]}
            hideTrigger={[]}
            open={checkedBottom}
            content={
              <DialogContentContainer>
                <ExampleContent />
              </DialogContentContainer>
            }
          >
            <Button kind={Button.kinds.SECONDARY} onClick={onChangeBottom} active={checkedBottom}>
              Bottom
            </Button>
          </Dialog>
          <Dialog
            modifiers={modifiers}
            showTrigger={[]}
            hideTrigger={[]}
            position={Dialog.positions.RIGHT}
            open={checkedRight}
            content={
              <DialogContentContainer>
                <ExampleContent />
              </DialogContentContainer>
            }
          >
            <Button kind={Button.kinds.SECONDARY} onClick={onChangeRight} active={checkedRight}>
              Right
            </Button>
          </Dialog>
          <Dialog
            modifiers={modifiers}
            position={Dialog.positions.LEFT}
            showTrigger={[]}
            hideTrigger={[]}
            open={checkedLeft}
            content={
              <DialogContentContainer>
                <ExampleContent />
              </DialogContentContainer>
            }
          >
            <Button kind={Button.kinds.SECONDARY} onClick={onChangeLeft} active={checkedLeft}>
              Left
            </Button>
          </Dialog>
        </Flex>
      );
    },

  name: "Positions"
};

export const ShowTriggers = {
  render: () => {
    const { isChecked: clickButtonActive, onChange: onClickClickButton } = useSwitch({
      defaultChecked: false
    });

    const { isChecked: hoverButtonActive, onChange: onHoverButton } = useSwitch({
      defaultChecked: false
    });

    const { isChecked: focusButtonActive, onChange: onFocusButton } = useSwitch({
      defaultChecked: false
    });

    const modifiers = [
      {
        name: "preventOverflow",
        options: {
          mainAxis: false
        }
      }
    ];

    return (
      <Flex className="monday-storybook-dialog--story-padding" gap={Flex.gaps.MEDIUM}>
        <Dialog
          modifiers={modifiers}
          showTrigger={[Dialog.hideShowTriggers.CLICK]}
          hideTrigger={[Dialog.hideShowTriggers.CLICK]}
          content={
            <DialogContentContainer>
              <ExampleContent />
            </DialogContentContainer>
          }
        >
          <Button kind={Button.kinds.SECONDARY} active={clickButtonActive} onClick={onClickClickButton}>
            On click
          </Button>
        </Dialog>
        <Dialog
          modifiers={modifiers}
          showTrigger={[Dialog.hideShowTriggers.MOUSE_ENTER]}
          hideTrigger={[Dialog.hideShowTriggers.MOUSE_LEAVE]}
          content={
            <DialogContentContainer>
              <ExampleContent />
            </DialogContentContainer>
          }
        >
          <div onMouseEnter={onHoverButton} onMouseLeave={onHoverButton}>
            <Button kind={Button.kinds.SECONDARY} active={hoverButtonActive}>
              On mouse enter
            </Button>
          </div>
        </Dialog>
        <Dialog
          modifiers={modifiers}
          showTrigger={[Dialog.hideShowTriggers.FOCUS]}
          hideTrigger={[Dialog.hideShowTriggers.BLUR]}
          content={
            <DialogContentContainer>
              <ExampleContent />
            </DialogContentContainer>
          }
        >
          <Button
            onFocus={onFocusButton}
            onBlur={onFocusButton}
            kind={Button.kinds.SECONDARY}
            active={focusButtonActive}
          >
            On focus
          </Button>
        </Dialog>
        <Dialog
          modifiers={modifiers}
          shouldShowOnMount
          showTrigger={[]}
          hideTrigger={[]}
          position={Dialog.positions.RIGHT}
          content={
            <DialogContentContainer>
              <ExampleContent />
            </DialogContentContainer>
          }
        >
          <Button kind={Button.kinds.SECONDARY} active>
            On mount
          </Button>
        </Dialog>
      </Flex>
    );
  },

  name: "Show triggers",

  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true
    }
  }
};

export const HideTriggers = {
  render: () => {
    // For maintain active state of each button according to the dialog open state (this hooks is available for your usage)
    const { isChecked: clickButtonActive, onChange: switchClickButtonActive } = useSwitch({
      defaultChecked: true
    });

    const { isChecked: clickOutsideButtonActive, onChange: switchClickOutsideActive } = useSwitch({
      defaultChecked: true
    });

    const { isChecked: mouseLeaveButtonActive, onChange: switchMouseLeaveActive } = useSwitch({
      defaultChecked: true
    });

    const { isChecked: blurButtonActive, onChange: switchBlurButtonActive } = useSwitch({
      defaultChecked: true
    });

    const { isChecked: contentClickButtonActive, onChange: switchContentClickActive } = useSwitch({
      defaultChecked: true
    });

    const { isChecked: contextMenuButtonActive, onChange: switchContextMenuActive } = useSwitch({
      defaultChecked: true
    });

    // for prevent dialog to move while scrolling
    const modifiers = [
      {
        name: "preventOverflow",
        options: {
          mainAxis: false
        }
      }
    ];

    return (
      <Flex
        data-testid={HIDE_TRIGGERS_CONTAINER}
        id={HIDE_TRIGGERS_CONTAINER}
        className="monday-storybook-dialog_hide-triggers-story"
        wrap
        direction={Flex.directions.COLUMN}
        justify={Flex.justify.START}
        align={Flex.align.START}
      >
        <Dialog
          modifiers={modifiers}
          shouldShowOnMount
          containerSelector={`#${HIDE_TRIGGERS_CONTAINER}`}
          onClickOutside={switchClickOutsideActive}
          position={Dialog.positions.RIGHT}
          showTrigger={[Dialog.hideShowTriggers.CLICK]}
          hideTrigger={[Dialog.hideShowTriggers.CLICK_OUTSIDE]}
          content={
            <DialogContentContainer data-testid={CLICK_OUTSIDE_DIALOG}>
              <ExampleContent rowsCount={1} />
            </DialogContentContainer>
          }
        >
          <Button
            data-testid={CLICK_OUTSIDE_DIALOG_BUTTON}
            kind={Button.kinds.SECONDARY}
            active={clickOutsideButtonActive}
            onClick={switchClickOutsideActive}
            style={{
              marginBlock: "54px"
            }}
          >
            On click outside
          </Button>
        </Dialog>
        <Dialog
          modifiers={modifiers}
          shouldShowOnMount
          position={Dialog.positions.RIGHT}
          showTrigger={[Dialog.hideShowTriggers.CLICK]}
          hideTrigger={[Dialog.hideShowTriggers.CLICK]}
          content={
            <DialogContentContainer>
              <ExampleContent rowsCount={1} />
            </DialogContentContainer>
          }
        >
          <Button
            kind={Button.kinds.SECONDARY}
            active={clickButtonActive}
            onClick={switchClickButtonActive}
            style={{
              marginBlock: "54px"
            }}
          >
            On click
          </Button>
        </Dialog>
        <Dialog
          modifiers={modifiers}
          shouldShowOnMount
          position={Dialog.positions.RIGHT}
          showTrigger={[Dialog.hideShowTriggers.FOCUS, Dialog.hideShowTriggers.CLICK]}
          hideTrigger={[Dialog.hideShowTriggers.BLUR]}
          content={
            <DialogContentContainer>
              <ExampleContent rowsCount={1} />
            </DialogContentContainer>
          }
        >
          <Button
            kind={Button.kinds.SECONDARY}
            active={blurButtonActive}
            onClick={switchBlurButtonActive}
            style={{
              marginBlock: "54px"
            }}
          >
            On blur
          </Button>
        </Dialog>
        <Dialog
          modifiers={modifiers}
          shouldShowOnMount
          position={Dialog.positions.RIGHT}
          showTrigger={[Dialog.hideShowTriggers.CLICK]}
          hideTrigger={[Dialog.hideShowTriggers.CONTENT_CLICK]}
          onContentClick={switchContentClickActive}
          content={
            <DialogContentContainer>
              <ExampleContent rowsCount={1} />
            </DialogContentContainer>
          }
        >
          <Button
            kind={Button.kinds.SECONDARY}
            active={contentClickButtonActive}
            onClick={switchContentClickActive}
            style={{
              marginBlock: "54px"
            }}
          >
            On content click
          </Button>
        </Dialog>
        <Dialog
          modifiers={modifiers}
          shouldShowOnMount
          showTrigger={[Dialog.hideShowTriggers.MOUSE_ENTER]}
          hideTrigger={[Dialog.hideShowTriggers.MOUSE_LEAVE]}
          position={Dialog.positions.RIGHT}
          onDialogDidHide={switchMouseLeaveActive}
          onDialogDidShow={switchMouseLeaveActive}
          content={
            <DialogContentContainer>
              <ExampleContent rowsCount={1} />
            </DialogContentContainer>
          }
        >
          <Button
            kind={Button.kinds.SECONDARY}
            active={mouseLeaveButtonActive}
            onClick={switchMouseLeaveActive}
            style={{
              marginBlock: "54px"
            }}
          >
            On mouse leave
          </Button>
        </Dialog>
        <Dialog
          modifiers={modifiers}
          shouldShowOnMount
          showTrigger={[Dialog.hideShowTriggers.CLICK]}
          hideTrigger={[Dialog.hideShowTriggers.CONTEXT_MENU]}
          position={Dialog.positions.RIGHT}
          containerSelector={`#${HIDE_TRIGGERS_CONTAINER}`}
          onDialogDidHide={switchContextMenuActive}
          onDialogDidShow={switchContextMenuActive}
          content={
            <DialogContentContainer data-testid={CONTEXT_MENU_DIALOG}>
              <ExampleContent rowsCount={1} />
            </DialogContentContainer>
          }
        >
          <Button
            kind={Button.kinds.SECONDARY}
            active={contextMenuButtonActive}
            style={{
              marginBlock: "54px"
            }}
          >
            On right click
          </Button>
        </Dialog>
      </Flex>
    );
  },

  name: "Hide triggers",

  play: closeTriggersInteractionSuite,

  parameters: {
    chromatic: {
      pauseAnimationAtEnd: true
    },
    docs: {
      liveEdit: {
        scope: {
          HIDE_TRIGGERS_CONTAINER,
          CLICK_OUTSIDE_DIALOG,
          CLICK_OUTSIDE_DIALOG_BUTTON,
          CONTEXT_MENU_DIALOG
        }
      }
    }
  }
};

export const ControlledDialog = {
  render: () => {
    const { isChecked: isOpen, onChange: setIsOpen } = useSwitch({
      defaultChecked: false
    });

    return (
      <Dialog
        //disable default triggers
        showTrigger={[]}
        // manage the opening state in the app level
        open={isOpen}
        content={
          <DialogContentContainer>
            <DialogContentContainer>
              <Button
                kind={Button.kinds.SECONDARY}
                // @ts-ignore
                onClick={() => setIsOpen(false)}
              >
                This will close as well
              </Button>
            </DialogContentContainer>
          </DialogContentContainer>
        }
      >
        <Button
          // @ts-ignore
          onClick={() => setIsOpen(!isOpen)}
        >
          Click me to toggle the Dialog
        </Button>
      </Dialog>
    );
  },

  name: "Controlled Dialog"
};

export const DialogWithTooltip = {
  // for prevent dialog to move while scrolling
  render: () => {
    const modifiers = [
      {
        name: "preventOverflow",
        options: {
          mainAxis: false
        }
      }
    ];

    return (
      <div className="monday-storybook-dialog--story-padding">
        <Dialog
          tooltip
          modifiers={modifiers}
          shouldShowOnMount
          showTrigger={[Dialog.hideShowTriggers.CLICK]}
          hideTrigger={[Dialog.hideShowTriggers.CLICK]}
          position={Dialog.positions.RIGHT}
          content={
            <DialogContentContainer>
              <ExampleContent />
            </DialogContentContainer>
          }
        >
          <IconButton icon={Info} active kind={IconButton.kinds.SECONDARY} />
        </Dialog>
      </div>
    );
  },

  name: "Dialog with tooltip",
  parameters: {
    docs: {
      liveEdit: {
        scope: { Info }
      }
    }
  }
};

export const DisableScrollWhenDialogOpen = {
  render: () => {
    // For maintain active state of each button according to the dialog open state (this hooks is available for your usage)
    const { isChecked: checkedTop, onChange: onChangeTop } = useSwitch({
      defaultChecked: false
    });

    return (
      <Flex className="monday-storybook-dialog--story-padding" gap={Flex.gaps.MEDIUM}>
        <div
          className={"scrollable"}
          style={{
            height: "300px",
            width: "400px",
            overflow: "auto"
          }}
        >
          <div
            style={{
              height: "800px"
            }}
          >
            <Dialog
              open={checkedTop}
              position={Dialog.positions.LEFT}
              showTrigger={[]}
              hideTrigger={[]}
              containerSelector={".scrollable"}
              disableContainerScroll
              content={
                <DialogContentContainer>
                  <ExampleContent />
                </DialogContentContainer>
              }
            >
              <Button kind={Button.kinds.SECONDARY} onClick={onChangeTop} active={checkedTop}>
                Click
              </Button>
            </Dialog>
          </div>
        </div>
      </Flex>
    );
  },

  name: "Disable scroll when dialog open"
};
