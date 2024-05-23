/* eslint-disable react/jsx-props-no-spreading */
import { camelCase } from "lodash-es";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import cx from "classnames";
// Libraries import
import React, { FC, ReactElement, useCallback, useMemo, useRef, useState } from "react";
// Constants import
import {
  DEFAULT_DIALOG_HIDE_TRIGGER,
  DEFAULT_DIALOG_SHOW_TRIGGER,
  DIALOG_MOVE_BY,
  EMPTY_ARR,
  ENTER_KEYS,
  SECONDARY_BUTTON_ARIA_LABEL,
  SECONDARY_BUTTON_WRAPPER_CLASSNAME,
  SplitButtonSecondaryContentPosition
} from "./SplitButtonConstants";
import { withStaticProps } from "../../types";
import { AnimationType, DialogPosition } from "../../constants";
import { HideShowEvent } from "../Dialog/consts/dialog-show-hide-event";
// Utils import
import { NOOP } from "../../utils/function-utils";
import { isInsideClass } from "../../utils/dom-utils";
// Hooks import
import useKeyEvent from "../../hooks/useKeyEvent";
import useEventListener from "../../hooks/useEventListener";
// Components import
import Button, { ButtonProps } from "../Button/Button";
import Dialog, { DialogEvent } from "../Dialog/Dialog";
import DropdownChevronDown from "../Icon/Icons/components/DropdownChevronDown";
import DialogContentContainer from "../DialogContentContainer/DialogContentContainer";
import styles from "./SplitButton.module.scss";

export interface SplitButtonProps extends ButtonProps {
  /*
   * The element or renderer which display inside the dialog which open by clicking on the split button's secondary button.
   */
  secondaryDialogContent?: ReactElement | (() => string | ReactElement);
  onSecondaryDialogDidShow?: () => void;
  onSecondaryDialogDidHide?: () => void;
  zIndex?: number;
  /*
   * Class name to provide the element which wraps the popover/modal/dialog
   */
  secondaryDialogClassName?: string;
  // TODO in next major remove type DialogPosition
  secondaryDialogPosition?: DialogPosition | SplitButtonSecondaryContentPosition;
  /*
    Popover Container padding size
   */
  dialogPaddingSize?: (typeof DialogContentContainer.sizes)[keyof typeof DialogContentContainer.sizes];
  /**
   * the container selector in which to append the dialog
   * for examples: "body" , ".my-class", "#my-id"
   */
  dialogContainerSelector?: string;
  shouldCloseOnClickInsideDialog?: boolean;
}

const SplitButton: FC<SplitButtonProps> & {
  secondaryPositions?: typeof SplitButtonSecondaryContentPosition;
  secondaryDialogPositions?: typeof SplitButtonSecondaryContentPosition;
  sizes?: typeof Button.sizes;
  colors?: typeof Button.colors;
  kinds?: typeof Button.kinds;
  inputTags?: typeof Button.inputTags;
  dialogPaddingSizes?: typeof DialogContentContainer.sizes;
} = ({
  secondaryDialogContent,
  onSecondaryDialogDidShow = NOOP,
  onSecondaryDialogDidHide = NOOP,
  shouldCloseOnClickInsideDialog,
  zIndex = null,
  secondaryDialogClassName,
  secondaryDialogPosition = SplitButtonSecondaryContentPosition.BOTTOM_START,
  dialogContainerSelector,
  dialogPaddingSize = DialogContentContainer.sizes.MEDIUM,
  disabled,
  // success mode not working right now, need to fix it in different pr
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  success,
  loading,
  kind,
  color,
  className,
  leftIcon,
  rightIcon,
  onClick,
  children,
  marginLeft,
  marginRight,
  active,
  id,
  "data-testid": dataTestId,
  ...buttonProps
}) => {
  // State //
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isHovered, setIsHover] = useState(false);
  const [isActive, setIsActive] = useState(false);

  // Refs //
  const ref = useRef(null);
  const secondaryButtonRef = useRef(null);

  // Callbacks //
  const setHovered = useCallback(() => setIsHover(true), [setIsHover]);
  const setNotHovered = useCallback(() => setIsHover(false), [setIsHover]);

  const shouldSetActive = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if (disabled) return false;
      return !isInsideClass(e.target as HTMLElement, SECONDARY_BUTTON_WRAPPER_CLASSNAME);
    },
    [disabled]
  );

  const setActive = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if (!shouldSetActive(e)) return;
      setIsActive(true);
    },
    [setIsActive, shouldSetActive]
  );
  const setNotActive = useCallback(() => setIsActive(false), [setIsActive]);
  const setActiveOnEnter = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if (!shouldSetActive(e)) return;
      setIsActive(true);
    },
    [setIsActive, shouldSetActive]
  );

  const showDialog = useCallback(() => {
    setDialogOpen(true);
    onSecondaryDialogDidShow();
  }, [setDialogOpen, onSecondaryDialogDidShow]);

  const hideDialog = useCallback(
    (_: DialogEvent, eventName: HideShowEvent) => {
      setDialogOpen(false);
      onSecondaryDialogDidHide();
      if (eventName === HideShowEvent.ESCAPE_KEY) {
        secondaryButtonRef.current.focus();
      }
    },
    [setDialogOpen, onSecondaryDialogDidHide]
  );

  // Event listeners //

  // Used to set both buttons as hovered no matter what button was hovered
  useEventListener({ eventName: "mouseenter", callback: setHovered, ref });
  useEventListener({ eventName: "mouseleave", callback: setNotHovered, ref });

  useEventListener({ eventName: "mousedown", callback: setActive, ref });
  useEventListener({ eventName: "mouseup", callback: setNotActive, ref });

  // Used to finish active transition if clicked on enter
  useEventListener({ eventName: "transitionend", callback: setNotActive, ref });

  // Key events
  useKeyEvent({ keys: ENTER_KEYS, ref, callback: setActiveOnEnter });

  const classNames = useMemo(
    () =>
      cx(
        styles.button,
        getStyle(styles, camelCase("kind-" + kind)),
        getStyle(styles, camelCase("color-" + color)),
        {
          [styles.mainActive]: active,
          [styles.active]: isActive,
          [styles.splitContentOpen]: isDialogOpen,
          [styles.hovered]: isHovered,
          [styles.disabled]: disabled
        },
        className
      ),
    [className, kind, color, active, isActive, isDialogOpen, isHovered, disabled]
  );

  const dialogShowTrigger = useMemo(
    () => (disabled ? (EMPTY_ARR as HideShowEvent[]) : DEFAULT_DIALOG_SHOW_TRIGGER),
    [disabled]
  );

  const dialogHideTrigger = useMemo(() => {
    if (shouldCloseOnClickInsideDialog) return [...DEFAULT_DIALOG_HIDE_TRIGGER, HideShowEvent.CONTENT_CLICK];
    return DEFAULT_DIALOG_HIDE_TRIGGER;
  }, [shouldCloseOnClickInsideDialog]);

  const actionsContent = useCallback(() => {
    const content = typeof secondaryDialogContent === "function" ? secondaryDialogContent() : secondaryDialogContent;
    return (
      <DialogContentContainer type={DialogContentContainer.types.POPOVER} size={dialogPaddingSize}>
        {content}
      </DialogContentContainer>
    );
  }, [secondaryDialogContent, dialogPaddingSize]);

  const animationEdgePosition = useMemo(() => {
    if (secondaryDialogPosition === SplitButtonSecondaryContentPosition.BOTTOM_MIDDLE) {
      return "";
    }
    if (secondaryDialogPosition === SplitButtonSecondaryContentPosition.BOTTOM_START) {
      return "bottom";
    }

    return "top";
  }, [secondaryDialogPosition]);

  return (
    <div
      className={classNames}
      ref={ref}
      id={id}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.SPLIT_BUTTON, id)}
    >
      <Button
        {
          ...buttonProps /* We are enriching button with other props so we must use spreading */
        }
        preventClickAnimation
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        rightFlat
        color={color}
        kind={kind}
        active={active}
        onClick={onClick}
        className={styles.mainButton}
        marginLeft={marginLeft}
        onFocus={setHovered}
        onBlur={setNotHovered}
        disabled={disabled}
        loading={loading}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.SPLIT_BUTTON_PRIMARY_BUTTON, id)}
      >
        {children}
      </Button>
      <div className={styles.secondaryButtonWrapper}>
        <Dialog
          wrapperClassName={secondaryDialogClassName}
          zIndex={zIndex}
          content={actionsContent}
          position={secondaryDialogPosition as DialogPosition}
          containerSelector={dialogContainerSelector}
          startingEdge={animationEdgePosition}
          animationType={AnimationType.EXPAND}
          moveBy={DIALOG_MOVE_BY}
          onDialogDidShow={showDialog}
          onDialogDidHide={hideDialog}
          showTrigger={dialogShowTrigger}
          hideTrigger={dialogHideTrigger}
        >
          <Button
            {...buttonProps}
            ref={secondaryButtonRef}
            preventClickAnimation
            leftFlat
            noSidePadding
            color={color}
            kind={kind}
            className={styles.secondaryButton}
            active={isDialogOpen}
            marginRight={marginRight}
            onFocus={setHovered}
            onBlur={setNotHovered}
            disabled={disabled}
            ariaLabel={SECONDARY_BUTTON_ARIA_LABEL}
            ariaHasPopup
            ariaExpanded={isDialogOpen}
            data-testid={dataTestId || getTestId(ComponentDefaultTestId.SPLIT_BUTTON_SECONDARY_BUTTON, id)}
          >
            <div className={styles.secondaryButtonIconWrapper}>
              <DropdownChevronDown aria-hidden="true" />
            </div>
          </Button>
        </Dialog>
      </div>
    </div>
  );
};

SplitButton.defaultProps = {
  ...Button.defaultProps,
  onSecondaryDialogDidShow: NOOP,
  onSecondaryDialogDidHide: NOOP,
  zIndex: null,
  secondaryDialogClassName: "",
  secondaryDialogPosition: DialogPosition.BOTTOM_START,
  dialogPaddingSize: DialogContentContainer.sizes.MEDIUM
};

export default withStaticProps(SplitButton, {
  // Backward compatibility for enum naming
  secondaryPositions: SplitButtonSecondaryContentPosition,
  secondaryDialogPositions: SplitButtonSecondaryContentPosition,
  sizes: Button.sizes,
  colors: Button.colors,
  kinds: Button.kinds,
  inputTags: Button.inputTags,
  dialogPaddingSizes: DialogContentContainer.sizes
});
