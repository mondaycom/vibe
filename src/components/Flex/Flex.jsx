import React, { useRef, forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import { FLEX_POSITIONS } from "./FlexConstants";
import { BASE_SIZES } from "../../constants/sizes";
import classes from "./Flex.module.scss";

const Flex = forwardRef(
  (
    {
      className,
      id,
      vertical,
      wrap,
      children,
      horizontalPosition,
      verticalPosition,
      horizontalSpacingSize,
      verticalSpacingSize
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    return (
      <div
        ref={mergedRef}
        className={cx(
          classes["flex-container"],
          classes[`horizontal-position-${horizontalPosition}`],
          classes[`vertical-position-${verticalPosition}`],
          classes[`vertical-spacing-size-${veri}`],
          className,
          {
            [classes["vertical-flex-container"]]: vertical,
            [classes["wrap-flex-container"]]: wrap
          }
        )}
        id={id}
      >
        {children}
      </div>
    );
  }
);

Flex.horizontalPositions = FLEX_POSITIONS;
Flex.verticalPositions = FLEX_POSITIONS;
Flex.verticalSpacingSizes = BASE_SIZES;
Flex.horizontalSpacingSizes = BASE_SIZES;
Flex.propTypes = {
  /**
   * class name to be add to the wrapper
   */
  className: PropTypes.string,
  /**
   * id to be add to the wrapper
   */
  id: PropTypes.string,
  vertical: PropTypes.bool,
  wrap: PropTypes.bool,
  children: PropTypes.element,
  horizontalPosition: PropTypes.oneOf([
    Flex.horizontalPositions.START,
    Flex.horizontalPositions.CENTER,
    Flex.horizontalPositions.END,
    Flex.horizontalPositions.SPACE_BETWEEN,
    Flex.horizontalPositions.SPACE_AROUND
  ]),
  verticalPosition: PropTypes.oneOf([
    Flex.verticalPositions.START,
    Flex.verticalPositions.CENTER,
    Flex.verticalPositions.END,
    Flex.verticalPositions.SPACE_BETWEEN,
    Flex.verticalPositions.SPACE_AROUND
  ]),
  verticalSpacingSize:
    PropTypes.oneOf[
      (Flex.verticalSpacingSizes.SMALL, Flex.verticalSpacingSizes.MEDIUM, Flex.verticalSpacingSizes.LARGE)
    ]
};

Flex.defaultProps = {
  className: "",
  id: undefined,
  vertical: false,
  wrap: false,
  children: undefined
};

export default Flex;
