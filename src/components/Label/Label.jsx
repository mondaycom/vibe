import { camelCase } from "lodash";
import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import cx from "classnames";
import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import { LABEL_COLORS, LABEL_TYPES } from "./LabelConstants";
import Leg from "./Leg";
import styles from "./Label.module.scss";

const Label = ({
  // Backward compatibility for enum naming
  className,
  wrapperClassName,
  kind,
  color,
  text = "",
  isAnimationDisabled,
  isLegIncluded,
  "data-testid": dataTestId,
  id
}) => {
  const overrideClassName = backwardCompatibilityForProperties([className, wrapperClassName]);
  const classNames = useMemo(
    () =>
      cx(
        styles.label,
        "monday-style-label",
        styles[`${camelCase("kind-" + kind)}`],
        `monday-style-label--kind-${kind}`,
        styles[`${camelCase("color-" + color)}`],
        `monday-style-label--color-${color}`,
        {
          [styles.withAnimation]: !isAnimationDisabled,
          ["monday-style-label--with-animation"]: !isAnimationDisabled,
          [styles.withLeg]: isLegIncluded,
          ["monday-style-label--with-leg"]: isLegIncluded
        }
      ),
    [kind, color, isAnimationDisabled, isLegIncluded]
  );
  return (
    <span className={overrideClassName} data-testid={dataTestId || getTestId(ELEMENT_TYPES.LABEL, id)}>
      <div className={classNames}>
        <span>{text}</span>
        <span className={cx(styles.legWrapper, "monday-style-label__leg-wrapper")}>
          {isLegIncluded ? <Leg /> : null}
        </span>
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
