import React, { useMemo } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import "./Label.scss";
import { LABEL_COLORS, LABEL_TYPES } from "./LabelConstants";
import Leg from "./Leg";

const Label = ({ wrapperClassName, kind, color, text = "" }) => {
  const classNames = useMemo(
    () => cx("monday-style-label", `monday-style-label--kind-${kind}`, `monday-style-label--color-${color}`),
    [kind, color]
  );
  return (
    <span className={wrapperClassName}>
      <div className={classNames}>
        <span>{text}</span>
        <span className="monday-style-label__leg-wrapper">
          <Leg />
        </span>
      </div>
    </span>
  );
};

Label.propTypes = {
  wrapperClassName: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.oneOf([LABEL_COLORS.PRIMARY, LABEL_COLORS.DARK, LABEL_COLORS.POSITIVE, LABEL_COLORS.NEGATIVE]),
  kind: PropTypes.oneOf([LABEL_TYPES.FILL, LABEL_TYPES.LINE])
};
Label.defaultProps = {
  wrapperClassName: "",
  text: "",
  color: LABEL_COLORS.PRIMARY,
  kind: LABEL_TYPES.FILL
};

Label.colors = LABEL_COLORS;
Label.kinds = LABEL_TYPES;

export default Label;
