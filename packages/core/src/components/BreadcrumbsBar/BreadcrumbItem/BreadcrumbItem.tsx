import { ComponentDefaultTestId, getTestId } from "../../../tests/test-ids-utils";
import cx from "classnames";
import React, { useRef } from "react";
import useIsOverflowing from "../../../hooks/useIsOverflowing/useIsOverflowing";
import Tooltip from "../../../components/Tooltip/Tooltip";
import { BreadcrumbContent } from "./BreadcrumbContent/BreadcrumbContent";
import { SubIcon, VibeComponentProps } from "../../../types";
import styles from "./BreadcrumbItem.module.scss";

export interface BreadcrumbItemProps extends VibeComponentProps {
  /** The display text. */
  text?: string;
  /** Should item be disabled. */
  disabled?: boolean;
  /** Should item be clickable - this should be recieved from the breadcrumbsBar ( Navigation/Indication bar ). */
  isClickable?: boolean;
  /** If the item is clickable and the type of navigation is a link, this is the link */
  link?: string;
  /** If the item is clickable and the type of navigation is a function, this is the function */
  onClick?: () => void;
  /** Should be the current Item - mainly effects the item`s style. */
  isCurrent?: boolean;
  /** An Icon - If no icon needed then should be left empty. */
  icon?: SubIcon;
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
