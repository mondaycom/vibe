import { ComponentDefaultTestId, getTestId } from "../../../tests/test-ids-utils";
import cx from "classnames";
import React, { useRef } from "react";
import useIsOverflowing from "../../../hooks/useIsOverflowing/useIsOverflowing";
import { Tooltip } from "@vibe/tooltip";
import { BreadcrumbContent } from "./BreadcrumbContent/BreadcrumbContent";
import { type VibeComponentProps } from "../../../types";
import { type SubIcon } from "@vibe/icon";
import styles from "./BreadcrumbItem.module.scss";

export interface BreadcrumbItemProps extends VibeComponentProps {
  /**
   * The display text of the breadcrumb item.
   */
  text?: string;
  /**
   * If true, the item is disabled.
   */
  disabled?: boolean;
  /**
   * If true, the item is clickable.
   */
  isClickable?: boolean;
  /**
   * The URL the item links to if navigation is handled via a link.
   */
  link?: string;
  /**
   * Callback fired when the item is clicked.
   */
  onClick?: () => void;
  /**
   * If true, applies styling for the current page.
   */
  isCurrent?: boolean;
  /**
   * The icon displayed next to the text.
   */
  icon?: SubIcon;
  /**
   * If true, the breadcrumb text is shown.
   */
  showText?: boolean;
}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  className,
  text = "",
  disabled,
  isClickable = false,
  link,
  onClick,
  isCurrent = false,
  icon,
  id,
  showText = true,
  "data-testid": dataTestId
}) => {
  const componentRef = useRef<HTMLSpanElement>(null);
  const isOverflowing = useIsOverflowing({ ref: componentRef });

  return (
    <Tooltip
      disableDialogSlide={true}
      withoutDialog={false}
      content={(isOverflowing || !showText) && text}
      showTrigger={["mouseenter"]}
      hideTrigger={["mouseleave"]}
      addKeyboardHideShowTriggersByDefault={!showText}
    >
      <li
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.BREADCRUMB_ITEM, id)}
        className={cx(styles.breadcrumbItemWrapper, className, {
          [styles.disabled]: disabled
        })}
      >
        <BreadcrumbContent
          ref={componentRef}
          isClickable={isClickable}
          link={link}
          onClick={onClick}
          text={text}
          icon={icon}
          isCurrent={isCurrent}
          disabled={disabled}
          showText={showText}
        />
      </li>
    </Tooltip>
  );
};

export default BreadcrumbItem;
