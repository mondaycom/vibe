import Tooltip, { TooltipProps } from "../../Tooltip/Tooltip";
import cx from "classnames";
import styles from "../Chips.module.scss";

const showTriggers = [Tooltip.hideShowTriggers.MOUSE_ENTER, Tooltip.hideShowTriggers.FOCUS];
const hideTriggers = [Tooltip.hideShowTriggers.MOUSE_LEAVE, Tooltip.hideShowTriggers.BLUR];

type HookResult = {
  wrapperProps: {
    tabIndex?: number;
    className?: string;
  };
  tooltipProps: Partial<TooltipProps> & { content: string };
};

export default function useChipOverflowTooltip({
  isOverflowing,
  wrapperClassName,
  clickableClassName,
  label
}: {
  isOverflowing: boolean;
  wrapperClassName: string;
  clickableClassName: string;
  label: string;
}): HookResult {
  if (isOverflowing) {
    return {
      wrapperProps: {
        tabIndex: 0,
        className: cx(wrapperClassName, {
          [clickableClassName]: isOverflowing,
          [styles.defaultCursor]: isOverflowing
        })
      },
      tooltipProps: {
        content: label,
        showTrigger: showTriggers,
        hideTrigger: hideTriggers
      }
    };
  }

  return { wrapperProps: {}, tooltipProps: { content: null } };
}
