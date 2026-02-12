import React from "react";
import { shift } from "@floating-ui/react-dom";
import { createStoryMetaSettingsDecorator } from "../../../utils/createStoryMetaSettingsDecorator";
import { Button, Flex, DialogContentContainer, IconButton, Skeleton, useSwitch } from "@vibe/core";
import { Dialog, type DialogTriggerEvent, type DialogProps } from "@vibe/core/next";
import { Info } from "@vibe/icons";

// Floating UI middleware to prevent dialog from shifting along the main axis while scrolling
const preventMainAxisShift = [shift({ mainAxis: false })];
import {
  closeTriggersInteractionSuite,
  CLICK_OUTSIDE_DIALOG,
  CLICK_OUTSIDE_DIALOG_BUTTON,
  CONTEXT_MENU_DIALOG,
  HIDE_TRIGGERS_CONTAINER
} from "./Dialog.interactions";

const metaSettings = createStoryMetaSettingsDecorator({
  component: Dialog
});

const dialogTriggerEvents: DialogTriggerEvent[] = [
  "click",
  "clickoutside",
  "esckey",
  "tab",
  "mouseenter",
  "mouseleave",
  "enter",
  "mousedown",
  "focus",
  "blur",
  "onContentClick",
  "contextmenu"
];

const showHideArgTypes = {
  options: dialogTriggerEvents,
  control: {
    type: "multi-select"
  },
  table: {
    type: {
      summary: dialogTriggerEvents.join(" | ")
    }
  }
};

export default {
  title: "Components/Dialog",
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
        scope: { useSwitch, shift, preventMainAxisShift }
      }
    }
  }
};

export const Overview = {
  render: (args: DialogProps) => {
    return (
      <div style={{ padding: "80px var(--sb-spacing-small)" }}>
        <Dialog
          id="overview-dialog"
          aria-label="Overview dialog"
          middleware={preventMainAxisShift}
          shouldShowOnMount
          showTrigger={["click"]}
          hideTrigger={["click"]}
          position={"right"}
          content={
            <DialogContentContainer>
              <Flex
                direction="column"
                align="start"
                gap="small"
                style={{ width: "150px", padding: "var(--sb-spacing-small)" }}
              >
                <Skeleton type="text" size="h1" fullWidth />
                {Array.from({ length: 3 }, (_value, index: number) => (
                  <Flex key={index} gap="small" style={{ width: "100%" }}>
                    <Skeleton type="circle" width={20} height={20} />
                    <Skeleton type="text" size="small" fullWidth />
                  </Flex>
                ))}
              </Flex>
            </DialogContentContainer>
          }
          {...args}
        >
          <IconButton
            id="overview-dialog-trigger"
            ariaLabel="Open information dialog"
            icon={Info}
            active
            kind="secondary"
          />
        </Dialog>
      </div>
    );
  },
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

      return (
        <Flex style={{ padding: "80px var(--sb-spacing-small)" }} gap="medium">
          <Dialog
            id="positions-top-dialog"
            aria-label="Top positioned dialog"
            middleware={preventMainAxisShift}
            open={checkedTop}
            position="top"
            showTrigger={[]}
            hideTrigger={[]}
            content={
              <DialogContentContainer>
                <Flex
                  direction="column"
                  align="start"
                  gap="small"
                  style={{ width: "150px", padding: "var(--sb-spacing-small)" }}
                >
                  <Skeleton type="text" size="h1" fullWidth />
                  {Array.from({ length: 3 }, (_value, index: number) => (
                    <Flex key={index} gap="small" style={{ width: "100%" }}>
                      <Skeleton type="circle" width={20} height={20} />
                      <Skeleton type="text" size="small" fullWidth />
                    </Flex>
                  ))}
                </Flex>
              </DialogContentContainer>
            }
          >
            <Button
              id="positions-top-button"
              ariaLabel="Toggle top dialog"
              kind="secondary"
              onClick={onChangeTop}
              active={checkedTop}
            >
              Top
            </Button>
          </Dialog>
          <Dialog
            id="positions-bottom-dialog"
            aria-label="Bottom positioned dialog"
            middleware={preventMainAxisShift}
            position="bottom"
            showTrigger={[]}
            hideTrigger={[]}
            open={checkedBottom}
            content={
              <DialogContentContainer>
                <Flex
                  direction="column"
                  align="start"
                  gap="small"
                  style={{ width: "150px", padding: "var(--sb-spacing-small)" }}
                >
                  <Skeleton type="text" size="h1" fullWidth />
                  {Array.from({ length: 3 }, (_value, index: number) => (
                    <Flex key={index} gap="small" style={{ width: "100%" }}>
                      <Skeleton type="circle" width={20} height={20} />
                      <Skeleton type="text" size="small" fullWidth />
                    </Flex>
                  ))}
                </Flex>
              </DialogContentContainer>
            }
          >
            <Button
              id="positions-bottom-button"
              ariaLabel="Toggle bottom dialog"
              kind="secondary"
              onClick={onChangeBottom}
              active={checkedBottom}
            >
              Bottom
            </Button>
          </Dialog>
          <Dialog
            id="positions-right-dialog"
            aria-label="Right positioned dialog"
            middleware={preventMainAxisShift}
            showTrigger={[]}
            hideTrigger={[]}
            position="right"
            open={checkedRight}
            content={
              <DialogContentContainer>
                <Flex
                  direction="column"
                  align="start"
                  gap="small"
                  style={{ width: "150px", padding: "var(--sb-spacing-small)" }}
                >
                  <Skeleton type="text" size="h1" fullWidth />
                  {Array.from({ length: 3 }, (_value, index: number) => (
                    <Flex key={index} gap="small" style={{ width: "100%" }}>
                      <Skeleton type="circle" width={20} height={20} />
                      <Skeleton type="text" size="small" fullWidth />
                    </Flex>
                  ))}
                </Flex>
              </DialogContentContainer>
            }
          >
            <Button
              id="positions-right-button"
              ariaLabel="Toggle right dialog"
              kind="secondary"
              onClick={onChangeRight}
              active={checkedRight}
            >
              Right
            </Button>
          </Dialog>
          <Dialog
            id="positions-left-dialog"
            aria-label="Left positioned dialog"
            middleware={preventMainAxisShift}
            position="left"
            showTrigger={[]}
            hideTrigger={[]}
            open={checkedLeft}
            content={
              <DialogContentContainer>
                <Flex
                  direction="column"
                  align="start"
                  gap="small"
                  style={{ width: "150px", padding: "var(--sb-spacing-small)" }}
                >
                  <Skeleton type="text" size="h1" fullWidth />
                  {Array.from({ length: 3 }, (_value, index: number) => (
                    <Flex key={index} gap="small" style={{ width: "100%" }}>
                      <Skeleton type="circle" width={20} height={20} />
                      <Skeleton type="text" size="small" fullWidth />
                    </Flex>
                  ))}
                </Flex>
              </DialogContentContainer>
            }
          >
            <Button
              id="positions-left-button"
              ariaLabel="Toggle left dialog"
              kind="secondary"
              onClick={onChangeLeft}
              active={checkedLeft}
            >
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

    return (
      <Flex style={{ padding: "80px var(--sb-spacing-small)" }} gap="medium">
        <Dialog
          middleware={preventMainAxisShift}
          showTrigger={["click"]}
          hideTrigger={["click"]}
          content={
            <DialogContentContainer>
              <Flex
                direction="column"
                align="start"
                gap="small"
                style={{ width: "150px", padding: "var(--sb-spacing-small)" }}
              >
                <Skeleton type="text" size="h1" fullWidth />
                {Array.from({ length: 3 }, (_value, index: number) => (
                  <Flex key={index} gap="small" style={{ width: "100%" }}>
                    <Skeleton type="circle" width={20} height={20} />
                    <Skeleton type="text" size="small" fullWidth />
                  </Flex>
                ))}
              </Flex>
            </DialogContentContainer>
          }
        >
          <Button kind="secondary" active={clickButtonActive} onClick={onClickClickButton}>
            On click
          </Button>
        </Dialog>
        <Dialog
          middleware={preventMainAxisShift}
          showTrigger={["mouseenter"]}
          hideTrigger={["mouseleave"]}
          content={
            <DialogContentContainer>
              <Flex
                direction="column"
                align="start"
                gap="small"
                style={{ width: "150px", padding: "var(--sb-spacing-small)" }}
              >
                <Skeleton type="text" size="h1" fullWidth />
                {Array.from({ length: 3 }, (_value, index: number) => (
                  <Flex key={index} gap="small" style={{ width: "100%" }}>
                    <Skeleton type="circle" width={20} height={20} />
                    <Skeleton type="text" size="small" fullWidth />
                  </Flex>
                ))}
              </Flex>
            </DialogContentContainer>
          }
        >
          <div onMouseEnter={onHoverButton} onMouseLeave={onHoverButton}>
            <Button kind="secondary" active={hoverButtonActive}>
              On mouse enter
            </Button>
          </div>
        </Dialog>
        <Dialog
          middleware={preventMainAxisShift}
          showTrigger={["focus"]}
          hideTrigger={["blur"]}
          content={
            <DialogContentContainer>
              <Flex
                direction="column"
                align="start"
                gap="small"
                style={{ width: "150px", padding: "var(--sb-spacing-small)" }}
              >
                <Skeleton type="text" size="h1" fullWidth />
                {Array.from({ length: 3 }, (_value, index: number) => (
                  <Flex key={index} gap="small" style={{ width: "100%" }}>
                    <Skeleton type="circle" width={20} height={20} />
                    <Skeleton type="text" size="small" fullWidth />
                  </Flex>
                ))}
              </Flex>
            </DialogContentContainer>
          }
        >
          <Button onFocus={onFocusButton} onBlur={onFocusButton} kind="secondary" active={focusButtonActive}>
            On focus
          </Button>
        </Dialog>
        <Dialog
          middleware={preventMainAxisShift}
          shouldShowOnMount
          showTrigger={[]}
          hideTrigger={[]}
          position="right"
          content={
            <DialogContentContainer>
              <Flex
                direction="column"
                align="start"
                gap="small"
                style={{ width: "150px", padding: "var(--sb-spacing-small)" }}
              >
                <Skeleton type="text" size="h1" fullWidth />
                {Array.from({ length: 3 }, (_value, index: number) => (
                  <Flex key={index} gap="small" style={{ width: "100%" }}>
                    <Skeleton type="circle" width={20} height={20} />
                    <Skeleton type="text" size="small" fullWidth />
                  </Flex>
                ))}
              </Flex>
            </DialogContentContainer>
          }
        >
          <Button kind="secondary" active>
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

    return (
      <Flex
        data-testid={HIDE_TRIGGERS_CONTAINER}
        id={HIDE_TRIGGERS_CONTAINER}
        style={{ paddingInline: "var(--sb-spacing-small)" }}
        wrap
        direction="column"
        justify="start"
        align="start"
      >
        <Dialog
          middleware={preventMainAxisShift}
          shouldShowOnMount
          containerSelector={`#${HIDE_TRIGGERS_CONTAINER}`}
          onClickOutside={switchClickOutsideActive}
          position="right"
          showTrigger={["click"]}
          hideTrigger={["clickoutside"]}
          content={
            <DialogContentContainer data-testid={CLICK_OUTSIDE_DIALOG}>
              <Flex
                direction="column"
                align="start"
                gap="small"
                style={{ width: "150px", padding: "var(--sb-spacing-small)" }}
              >
                <Skeleton type="text" size="h1" fullWidth />
                <Flex gap="small" style={{ width: "100%" }}>
                  <Skeleton type="circle" width={20} height={20} />
                  <Skeleton type="text" size="small" fullWidth />
                </Flex>
              </Flex>
            </DialogContentContainer>
          }
        >
          <Button
            data-testid={CLICK_OUTSIDE_DIALOG_BUTTON}
            kind="secondary"
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
          middleware={preventMainAxisShift}
          shouldShowOnMount
          position="right"
          showTrigger={["click"]}
          hideTrigger={["click"]}
          content={
            <DialogContentContainer>
              <Flex
                direction="column"
                align="start"
                gap="small"
                style={{ width: "150px", padding: "var(--sb-spacing-small)" }}
              >
                <Skeleton type="text" size="h1" fullWidth />
                <Flex gap="small" style={{ width: "100%" }}>
                  <Skeleton type="circle" width={20} height={20} />
                  <Skeleton type="text" size="small" fullWidth />
                </Flex>
              </Flex>
            </DialogContentContainer>
          }
        >
          <Button
            kind="secondary"
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
          middleware={preventMainAxisShift}
          shouldShowOnMount
          position="right"
          showTrigger={["focus", "click"]}
          hideTrigger={["blur"]}
          content={
            <DialogContentContainer>
              <Flex
                direction="column"
                align="start"
                gap="small"
                style={{ width: "150px", padding: "var(--sb-spacing-small)" }}
              >
                <Skeleton type="text" size="h1" fullWidth />
                <Flex gap="small" style={{ width: "100%" }}>
                  <Skeleton type="circle" width={20} height={20} />
                  <Skeleton type="text" size="small" fullWidth />
                </Flex>
              </Flex>
            </DialogContentContainer>
          }
        >
          <Button
            kind="secondary"
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
          middleware={preventMainAxisShift}
          shouldShowOnMount
          position="right"
          showTrigger={["click"]}
          hideTrigger={["onContentClick"]}
          onContentClick={switchContentClickActive}
          content={
            <DialogContentContainer>
              <Flex
                direction="column"
                align="start"
                gap="small"
                style={{ width: "150px", padding: "var(--sb-spacing-small)" }}
              >
                <Skeleton type="text" size="h1" fullWidth />
                <Flex gap="small" style={{ width: "100%" }}>
                  <Skeleton type="circle" width={20} height={20} />
                  <Skeleton type="text" size="small" fullWidth />
                </Flex>
              </Flex>
            </DialogContentContainer>
          }
        >
          <Button
            kind="secondary"
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
          middleware={preventMainAxisShift}
          shouldShowOnMount
          showTrigger={["mouseenter"]}
          hideTrigger={["mouseleave"]}
          position="right"
          onDialogDidHide={switchMouseLeaveActive}
          onDialogDidShow={switchMouseLeaveActive}
          content={
            <DialogContentContainer>
              <Flex
                direction="column"
                align="start"
                gap="small"
                style={{ width: "150px", padding: "var(--sb-spacing-small)" }}
              >
                <Skeleton type="text" size="h1" fullWidth />
                <Flex gap="small" style={{ width: "100%" }}>
                  <Skeleton type="circle" width={20} height={20} />
                  <Skeleton type="text" size="small" fullWidth />
                </Flex>
              </Flex>
            </DialogContentContainer>
          }
        >
          <Button
            kind="secondary"
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
          middleware={preventMainAxisShift}
          shouldShowOnMount
          showTrigger={["click"]}
          hideTrigger={["contextmenu"]}
          position="right"
          containerSelector={`#${HIDE_TRIGGERS_CONTAINER}`}
          onDialogDidHide={switchContextMenuActive}
          onDialogDidShow={switchContextMenuActive}
          content={
            <DialogContentContainer data-testid={CONTEXT_MENU_DIALOG}>
              <Flex
                direction="column"
                align="start"
                gap="small"
                style={{ width: "150px", padding: "var(--sb-spacing-small)" }}
              >
                <Skeleton type="text" size="h1" fullWidth />
                <Flex gap="small" style={{ width: "100%" }}>
                  <Skeleton type="circle" width={20} height={20} />
                  <Skeleton type="text" size="small" fullWidth />
                </Flex>
              </Flex>
            </DialogContentContainer>
          }
        >
          <Button
            kind="secondary"
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
                kind="secondary"
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
  render: () => {
    return (
      <div style={{ padding: "80px var(--sb-spacing-small)" }}>
        <Dialog
          tooltip
          middleware={preventMainAxisShift}
          shouldShowOnMount
          showTrigger={["click"]}
          hideTrigger={["click"]}
          position="right"
          content={
            <DialogContentContainer>
              <Flex
                direction="column"
                align="start"
                gap="small"
                style={{ width: "150px", padding: "var(--sb-spacing-small)" }}
              >
                <Skeleton type="text" size="h1" fullWidth />
                {Array.from({ length: 3 }, (_value, index: number) => (
                  <Flex key={index} gap="small" style={{ width: "100%" }}>
                    <Skeleton type="circle" width={20} height={20} />
                    <Skeleton type="text" size="small" fullWidth />
                  </Flex>
                ))}
              </Flex>
            </DialogContentContainer>
          }
        >
          <IconButton icon={Info} active kind="secondary" />
        </Dialog>
      </div>
    );
  },

  name: "Dialog with tooltip",
  parameters: {
    docs: {
      liveEdit: {
        scope: { Info, shift, preventMainAxisShift }
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
      <Flex style={{ padding: "80px var(--sb-spacing-small)" }} gap="medium">
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
              position="left"
              showTrigger={[]}
              hideTrigger={[]}
              containerSelector={".scrollable"}
              disableContainerScroll
              content={
                <DialogContentContainer>
                  <Flex
                    direction="column"
                    align="start"
                    gap="small"
                    style={{ width: "150px", padding: "var(--sb-spacing-small)" }}
                  >
                    <Skeleton type="text" size="h1" fullWidth />
                    {Array.from({ length: 3 }, (_value, index: number) => (
                      <Flex key={index} gap="small" style={{ width: "100%" }}>
                        <Skeleton type="circle" width={20} height={20} />
                        <Skeleton type="text" size="small" fullWidth />
                      </Flex>
                    ))}
                  </Flex>
                </DialogContentContainer>
              }
            >
              <Button kind="secondary" onClick={onChangeTop} active={checkedTop}>
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
