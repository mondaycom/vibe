import React, { useMemo } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import { LABEL_COLORS, LABEL_TYPES } from "./LabelConstants";
import Leg from "./Leg";
import "./Label.scss";

const Label = ({
  // Backward compatibility for enum naming
  className,
  wrapperClassName,
  kind,
  color,
  text = "",
  isAnimationDisabled,
  isLegIncluded
}) => {
  const overrideClassName = backwardCompatibilityForProperties([className, wrapperClassName]);
  const classNames = useMemo(
    () =>
      cx("monday-style-label", `monday-style-label--kind-${kind}`, `monday-style-label--color-${color}`, {
        "monday-style-label--with-animation": !isAnimationDisabled,
        "monday-style-label--with-leg": isLegIncluded
      }),
    [kind, color, isAnimationDisabled, isLegIncluded]
  );
  return (
    <span className={overrideClassName}>
      <div className={classNames}>
        <span>{text}</span>
        <span className="monday-style-label__leg-wrapper">{isLegIncluded ? <Leg /> : null}</span>
      </div>
    </span>
  );
};

Label.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.oneOf([LABEL_COLORS.PRIMARY, LABEL_COLORS.DARK, LABEL_COLORS.POSITIVE, LABEL_COLORS.NEGATIVE]),
  kind: PropTypes.oneOf([LABEL_TYPES.FILL, LABEL_TYPES.LINE]),
  isAnimationDisabled: PropTypes.bool,
  isLegIncluded: PropTypes.bool
};
Label.defaultProps = {
  className: undefined,
  text: "",
  color: LABEL_COLORS.PRIMARY,
  kind: LABEL_TYPES.FILL,
  isAnimationDisabled: false,
  isLegIncluded: false
};

Label.colors = LABEL_COLORS;
Label.kinds = LABEL_TYPES;

export default Label;
