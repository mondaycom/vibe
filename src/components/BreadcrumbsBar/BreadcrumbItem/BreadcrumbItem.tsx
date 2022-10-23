import { ELEMENT_TYPES, getTestId } from "../../../utils/test-utils";
import cx from "classnames";
import React, { useRef } from "react";
import useIsOverflowing from "../../../hooks/useIsOverflowing";
import Tooltip from "../../../components/Tooltip/Tooltip";
import { backwardCompatibilityForProperties } from "../../../helpers/backwardCompatibilityForProperties";
import { BreadcrumbContent } from "./BreadcrumbContent/BreadcrumbContent";
import VibeComponentProps from "../../../types/VibeComponentProps";
import { IconSubComponentProps } from "../../Icon/Icon";
import { HideShowEvent } from "../../../constants";
import styles from "./BreadcrumbItem.module.scss";

const MOUSEENTER = [HideShowEvent.MOUSE_ENTER];
const MOUSELEAVE = [HideShowEvent.MOUSE_LEAVE];

export interface BreadcrumbItemProps extends VibeComponentProps {
  /** The display text. */
  text?: string;
  /** Should item be disabled. */
  disabled?: boolean;
  /** Backward compatibility for props naming */
  isDisabled?: boolean;
  /** Should item be clickable - this should be recieved from the breadcrumbsBar ( Navigation/Indication bar ). */
  isClickable?: boolean;
  /** If the item is clickable and the type of navigation is a link, this is the link */
  link?: string;
  /** If the item is clickable and the type of navigation is a function, this is the function */
  onClick?: () => void;
  /** Should be the current Item - mainly effects the item`s style. */
  isCurrent?: boolean;
  /** An Icon - If no icon needed then should be left empty. */
  // TODO TS-migration fix icon type?
  icon?: string | React.FunctionComponent<IconSubComponentProps> | null;
}

const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
  className,
  text = "",
  disabled,
  // Backward compatibility for props naming
  isDisabled,
  isClickable = false,
  link,
  onClick,
  isCurrent = false,
  icon,
  id,
  "data-testid": dataTestId
}) => {
  const overrideDisabled = backwardCompatibilityForProperties([disabled, isDisabled], false) as boolean;
  const componentRef = useRef<HTMLSpanElement>(null);
  const isOverflowing = useIsOverflowing({ ref: componentRef });

  return (
    <Tooltip
      disableDialogSlide={true}
      withoutDialog={false}
      content={isOverflowing && text}
      showTrigger={MOUSEENTER}
      hideTrigger={MOUSELEAVE}
    >
      <li
        id={id}
        data-testid={dataTestId || getTestId(ELEMENT_TYPES.BREADCRUMB_ITEM, id)}
        className={cx(styles.wrapper, "breadcrumbItem--wrapper", className, {
          [styles.clickable]: isClickable,
          ["clickable"]: isClickable,
          [styles.disabled]: overrideDisabled,
          ["disabled"]: overrideDisabled
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
          disabled={overrideDisabled}
        />
      </li>
    </Tooltip>
  );
};

export default BreadcrumbItem;
