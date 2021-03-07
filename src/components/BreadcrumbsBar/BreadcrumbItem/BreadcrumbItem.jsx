import React, { useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import useIsOverflowing from "../../../hooks/useIsOverflowing";
import Tooltip from "../../Tooltip/Tooltip";
import { BreadcrumbContent } from "./BreadcrumbContent/BreadcrumbContent";
import "./BreadcrumbItem.scss";

const MOUSEENTER = ["mouseenter"];
const MOUSELEAVE = ["mouseleave"];

const BreadcrumbItem = ({
  className,
  text,
  isDisabled,
  isClickable,
  link,
  func,
  isCurrent,
  icon
}) => {
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
          { disabled: isDisabled }
        )}
      >
        <BreadcrumbContent
          className={classNames(
            "breadcrumb-content",
            { clickable: isClickable },
            { current: isCurrent },
            { disabled: isDisabled }
          )}
          ref={componentRef}
          isClickable={isClickable}
          link={link}
          func={func}
          text={text}
          icon={icon}
        />
      </li>
    </Tooltip>
  );
};

BreadcrumbItem.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  isDisabled: PropTypes.bool,
  isClickable: PropTypes.bool,
  link: PropTypes.string,
  func: PropTypes.func,
  isCurrent: PropTypes.bool,
  icon: PropTypes.string
};

BreadcrumbItem.defaultProps = {
  className: "",
  text: "",
  isDisabled: false,
  isClickable: false,
  link: undefined,
  func: undefined,
  isCurrent: false,
  icon: undefined
};

export default BreadcrumbItem;

