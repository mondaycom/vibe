import React, { useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import useIsOverflowing from "../../../hooks/useIsOverflowing";
import Tooltip from "../../../components/Tooltip/Tooltip";
import { backwardCompatibilityForProperties } from "../../../helpers/backwardCompatibilityForProperties";
import { BreadcrumbContent } from "./BreadcrumbContent/BreadcrumbContent";
import "./BreadcrumbItem.scss";

const MOUSEENTER = ["mouseenter"];
const MOUSELEAVE = ["mouseleave"];

const BreadcrumbItem = ({
  className,
  text,
  disabled,
  // Backward compatibility for props naming
  isDisabled,
  isClickable,
  link,
  onClick,
  isCurrent,
  icon
}) => {
  const overrideDisabled = backwardCompatibilityForProperties([disabled, isDisabled], false);
  const componentRef = useRef(null);
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
        className={classNames(
          "breadcrumbItem--wrapper",
          className,
          { clickable: isClickable },
          { current: isCurrent },
          { disabled: overrideDisabled }
        )}
      >
        <BreadcrumbContent
          className={classNames(
            "breadcrumb-content",
            { clickable: isClickable },
            { current: isCurrent },
            { disabled: overrideDisabled }
          )}
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

BreadcrumbItem.propTypes = {
  className: PropTypes.string,
  /** The display text. */
  text: PropTypes.string,
  /** Should item be disabled. */
  disabled: PropTypes.bool,
  /** Should item be clickable - this should be recieved from the breadcrumbsBar ( Navigation/Indication bar ). */
  isClickable: PropTypes.bool,
  /** If the item is clickable and the type of navigation is a link, this is the link */
  link: PropTypes.string,
  /** If the item is clickable and the type of navigation is a function, this is the function */
  onClick: PropTypes.func,
  /** Should be the current Item - mainly effects the item`s style. */
  isCurrent: PropTypes.bool,
  /** An Icon - If no icon needed then should be left empty. */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

BreadcrumbItem.defaultProps = {
  className: "",
  text: "",
  disabled: undefined,
  isClickable: false,
  link: undefined,
  onClick: undefined,
  isCurrent: false,
  icon: undefined
};

export default BreadcrumbItem;
