import React, { useRef, forwardRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import styles from "./Box.module.scss";
import {
  DISABLED,
  BORDER,
  BORDER_COLOR,
  ROUNDED,
  SHADOW,
  MARGIN,
  MARGIN_X,
  MARGIN_Y,
  MARGIN_TOP,
  MARGIN_END,
  MARGIN_BOTTOM,
  MARGIN_START,
  PADDING,
  PADDING_X,
  PADDING_Y,
  PADDING_TOP,
  PADDING_END,
  PADDING_BOTTOM,
  PADDING_START,
  BACKGROUND_COLORS,
  COLORS
} from "./BoxConstants";

const Box = forwardRef(
  (
    {
      className,
      id,
      elementType,
      children,
      disabled,
      border,
      borderColor,
      rounded,
      shadow,
      margin,
      marginX,
      marginY,
      marginTop,
      marginEnd,
      marginBottom,
      marginStart,
      padding,
      paddingX,
      paddingY,
      paddingTop,
      paddingEnd,
      paddingBottom,
      paddingStart,
      textColor,
      backgroundColor
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
    const Element = elementType;
    return (
      <Element
        ref={mergedRef}
        className={cx(
          styles.box,
          className,
          { [DISABLED.DISABLED]: disabled },
          border,
          borderColor,
          rounded,
          shadow,
          margin,
          marginX,
          marginY,
          marginTop,
          marginEnd,
          marginBottom,
          marginStart,
          padding,
          paddingX,
          paddingY,
          paddingTop,
          paddingEnd,
          paddingBottom,
          paddingStart,
          textColor,
          backgroundColor
        )}
        id={id}
      >
        {children}
      </Element>
    );
  }
);

Box.borders = BORDER;
Box.borderColors = BORDER_COLOR;
Box.roundeds = ROUNDED;
Box.shadows = SHADOW;
Box.margins = MARGIN;
Box.marginXs = MARGIN_X;
Box.marginYs = MARGIN_Y;
Box.marginTops = MARGIN_TOP;
Box.marginEnds = MARGIN_END;
Box.marginBottoms = MARGIN_BOTTOM;
Box.marginStarts = MARGIN_START;
Box.paddings = PADDING;
Box.paddingXs = PADDING_X;
Box.paddingYs = PADDING_Y;
Box.paddingTops = PADDING_TOP;
Box.paddingEnds = PADDING_END;
Box.paddingBottoms = PADDING_BOTTOM;
Box.paddingStarts = PADDING_START;
Box.backgroundColors = BACKGROUND_COLORS;
Box.textColors = COLORS;

Box.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  elementType: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element)
  ]),
  disabled: PropTypes.bool,
  border: PropTypes.oneOf([Box.borders.DEFAULT]),
  borderColor: PropTypes.oneOf([Box.borderColors.UI_BORDER_COLOR, Box.borderColors.LAYOUT_BORDER_COLOR]),
  rounded: PropTypes.oneOf([Box.roundeds.SMALL, Box.roundeds.MEDIUM, Box.roundeds.BIG]),
  shadow: PropTypes.oneOf([Box.shadows.XS, Box.shadows.SMALL, Box.shadows.MEDIUM, Box.shadows.LARGE]),
  margin: PropTypes.oneOf([
    Box.margins.AUTO,
    Box.margins.XS,
    Box.margins.SMALL,
    Box.margins.MEDIUM,
    Box.margins.LARGE,
    Box.margins.XL,
    Box.margins.XXL,
    Box.margins.XXXL
  ]),
  marginX: PropTypes.oneOf([
    Box.marginXs.AUTO,
    Box.marginXs.XS,
    Box.marginXs.SMALL,
    Box.marginXs.MEDIUM,
    Box.marginXs.LARGE,
    Box.marginXs.XL,
    Box.marginXs.XXL,
    Box.marginXs.XXXL
  ]),
  marginY: PropTypes.oneOf([
    Box.marginYs.AUTO,
    Box.marginYs.XS,
    Box.marginYs.SMALL,
    Box.marginYs.MEDIUM,
    Box.marginYs.LARGE,
    Box.marginYs.XL,
    Box.marginYs.XXL,
    Box.marginYs.XXXL
  ]),
  marginTop: PropTypes.oneOf([
    Box.marginTops.AUTO,
    Box.marginTops.XS,
    Box.marginTops.SMALL,
    Box.marginTops.MEDIUM,
    Box.marginTops.LARGE,
    Box.marginTops.XL,
    Box.marginTops.XXL,
    Box.marginTops.XXXL
  ]),
  marginEnd: PropTypes.oneOf([
    Box.marginEnds.AUTO,
    Box.marginEnds.XS,
    Box.marginEnds.SMALL,
    Box.marginEnds.MEDIUM,
    Box.marginEnds.LARGE,
    Box.marginEnds.XL,
    Box.marginEnds.XXL,
    Box.marginEnds.XXXL
  ]),
  marginBottom: PropTypes.oneOf([
    Box.marginBottoms.AUTO,
    Box.marginBottoms.XS,
    Box.marginBottoms.SMALL,
    Box.marginBottoms.MEDIUM,
    Box.marginBottoms.LARGE,
    Box.marginBottoms.XL,
    Box.marginBottoms.XXL,
    Box.marginBottoms.XXXL
  ]),
  marginStart: PropTypes.oneOf([
    Box.marginStarts.AUTO,
    Box.marginStarts.XS,
    Box.marginStarts.SMALL,
    Box.marginStarts.MEDIUM,
    Box.marginStarts.LARGE,
    Box.marginStarts.XL,
    Box.marginStarts.XXL,
    Box.marginStarts.XXXL
  ]),
  padding: PropTypes.oneOf([
    Box.paddings.XS,
    Box.paddings.SMALL,
    Box.paddings.MEDIUM,
    Box.paddings.LARGE,
    Box.paddings.XL,
    Box.paddings.XXL,
    Box.paddings.XXXL
  ]),
  paddingX: PropTypes.oneOf([
    Box.paddingXs.XS,
    Box.paddingXs.SMALL,
    Box.paddingXs.MEDIUM,
    Box.paddingXs.LARGE,
    Box.paddingXs.XL,
    Box.paddingXs.XXL,
    Box.paddingXs.XXXL
  ]),
  paddingY: PropTypes.oneOf([
    Box.paddingYs.XS,
    Box.paddingYs.SMALL,
    Box.paddingYs.MEDIUM,
    Box.paddingYs.LARGE,
    Box.paddingYs.XL,
    Box.paddingYs.XXL,
    Box.paddingYs.XXXL
  ]),
  paddingTop: PropTypes.oneOf([
    Box.paddingTops.XS,
    Box.paddingTops.SMALL,
    Box.paddingTops.MEDIUM,
    Box.paddingTops.LARGE,
    Box.paddingTops.XL,
    Box.paddingTops.XXL,
    Box.paddingTops.XXXL
  ]),
  paddingEnd: PropTypes.oneOf([
    Box.paddingEnds.XS,
    Box.paddingEnds.SMALL,
    Box.paddingEnds.MEDIUM,
    Box.paddingEnds.LARGE,
    Box.paddingEnds.XL,
    Box.paddingEnds.XXL,
    Box.paddingEnds.XXXL
  ]),
  paddingBottom: PropTypes.oneOf([
    Box.paddingBottoms.XS,
    Box.paddingBottoms.SMALL,
    Box.paddingBottoms.MEDIUM,
    Box.paddingBottoms.LARGE,
    Box.paddingBottoms.XL,
    Box.paddingBottoms.XXL,
    Box.paddingBottoms.XXXL
  ]),
  paddingStart: PropTypes.oneOf([
    Box.paddingStarts.XS,
    Box.paddingStarts.SMALL,
    Box.paddingStarts.MEDIUM,
    Box.paddingStarts.LARGE,
    Box.paddingStarts.XL,
    Box.paddingStarts.XXL,
    Box.paddingStarts.XXXL
  ]),
  textColor: PropTypes.oneOf([
    Box.textColors.PRIMARY_TEXT_COLOR,
    Box.textColors.TEXT_COLOR_ON_INVERTED,
    Box.textColors.SECONDARY_TEXT_COLOR
  ]),
  backgroundColor: PropTypes.oneOf([
    Box.backgroundColors.PRIMARY_BACKGROUND_COLOR,
    Box.backgroundColors.SECONDARY_BACKGROUND_COLOR,
    Box.backgroundColors.GREY_BACKGROUND_COLOR,
    Box.backgroundColors.ALL_GREY_BACKGROUND_COLOR,
    Box.backgroundColors.INVERTED_COLOR_BACKGROUND
  ])
};
Box.defaultProps = {
  className: "",
  id: undefined,
  elementType: "div",
  children: undefined,
  disabled: undefined,
  border: undefined,
  borderColor: undefined,
  rounded: undefined,
  shadow: undefined,
  margin: undefined,
  marginX: undefined,
  marginY: undefined,
  marginTop: undefined,
  marginEnd: undefined,
  marginBottom: undefined,
  marginStart: undefined,
  padding: undefined,
  paddingX: undefined,
  paddingY: undefined,
  paddingTop: undefined,
  paddingEnd: undefined,
  paddingBottom: undefined,
  paddingStart: undefined,
  textColor: undefined,
  backgroundColor: undefined
};

export default Box;
