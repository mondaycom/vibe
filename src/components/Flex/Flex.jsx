import React, { useRef, forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import { FLEX_POSITIONS, FLEX_SPACING_SIZES } from "./FlexConstants";
import classes from "./Flex.module.scss";
import { BASE_POSITIONS } from "../../constants/positions";

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
      verticalSpacingSize,
      style
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    return (
      <div
        id={id}
        ref={mergedRef}
        className={cx(
          classes["flex-container"],
          classes[`horizontal-position-${horizontalPosition}`],
          classes[`horizontal-spacing-size-${horizontalSpacingSize}`],
          classes[`vertical-position-${verticalPosition}`],
          classes[`vertical-spacing-size-${verticalSpacingSize}`],
          className,
          {
            [classes["vertical-flex-container"]]: vertical,
            [classes["wrap"]]: wrap
          }
        )}
        style={style}
      >
        {children}
      </div>
    );
  }
);

Flex.horizontalPositions = FLEX_POSITIONS;
Flex.verticalPositions = BASE_POSITIONS;
Flex.verticalSpacingSizes = FLEX_SPACING_SIZES;
Flex.horizontalSpacingSizes = FLEX_SPACING_SIZES;
console.log(Flex);

Flex.propTypes = {
  /**
   * class name to be add to the wrapper
   */
  className: PropTypes.string,
  /**
   * id to be add to the wrapper
   */
  id: PropTypes.string,
  style: PropTypes.object,
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
  horizontalSpacingSize:
    PropTypes.oneOf[
      (Flex.verticalSpacingSizes.SMALL, Flex.verticalSpacingSizes.MEDIUM, Flex.verticalSpacingSizes.LARGE)
    ],
  verticalSpacingSize:
    PropTypes.oneOf[
      (Flex.verticalSpacingSizes.SMALL, Flex.verticalSpacingSizes.MEDIUM, Flex.verticalSpacingSizes.LARGE)
    ]
};

Flex.defaultProps = {
  className: "",
  id: undefined,
  vertical: false,
  style: undefined,
  wrap: false,
  children: undefined,
  horizontalPosition: Flex.horizontalPositions.START,
  horizontalSpacingSize: Flex.horizontalSpacingSizes.SMALL,
  verticalPosition: Flex.verticalPositions.CENTER,
  verticalSpacingSize: Flex.verticalSpacingSizes.NONE
};

export default Flex;
