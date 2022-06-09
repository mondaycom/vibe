import React, {useRef, forwardRef} from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "hooks/useMergeRefs";
import {
    OPACITY,
    OVERFLOW,
    OVERFLOW_X,
    OVERFLOW_Y,
    BORDER,
    BORDER_TOP,
    BORDER_END,
    BORDER_BOTTOM,
    BORDER_START,
    BORDER_COLOR,
    ROUNDED,
    ROUNDED_TOP,
    ROUNDED_END,
    ROUNDED_BOTTOM,
    ROUNDED_START,
    SHADOW,
    MARGIN,
    MARGIN_X,
    MARGIN_Y,
    MARGIN_TOP,
    MARGIN_END,
    MARGIN_BOTTOM,
    MARGIN_START,
    MARGIN_NEGATIVE,
    MARGIN_NEGATIVE_X,
    MARGIN_NEGATIVE_Y,
    MARGIN_NEGATIVE_TOP,
    MARGIN_NEGATIVE_END,
    MARGIN_NEGATIVE_BOTTOM,
    MARGIN_NEGATIVE_START,
    PADDING,
    PADDING_X,
    PADDING_Y,
    PADDING_TOP,
    PADDING_END,
    PADDING_BOTTOM,
    PADDING_START,
    TEXT_ALIGN,
    TEXT_TRANSFORM,
    USER_SELECT,
    POINTER_EVENTS,
    VISIBILITY,
    BACKGROUND_COLORS,
    COLORS,
} from "./BoxConstants"
import styles from "./Box.module.scss";

const Box = forwardRef(
    ({
         className,
         id,
         children,
         opacity,
         overflow,
         overflowX,
         overflowY,
         border,
         borderTop,
         borderEnd,
         borderBottom,
         borderStart,
         borderColor,
         rounded,
         roundedTop,
         roundedEnd,
         roundedBottom,
         roundedStart,
         shadow,
         margin,
         marginX,
         marginY,
         marginTop,
         marginEnd,
         marginBottom,
         marginStart,
         marginNegative,
         marginNegativeX,
         marginNegativeY,
         marginNegativeTop,
         marginNegativeEnd,
         marginNegativeBottom,
         marginNegativeStart,
         padding,
         paddingX,
         paddingY,
         paddingTop,
         paddingEnd,
         paddingBottom,
         paddingStart,
         textAlign,
         textTransform,
         userSelect,
         pointerEvent,
         visibility,
         color,
         backgroundColor
     },
     ref,
    ) => {
        const componentRef = useRef(null);
        const mergedRef = useMergeRefs({refs: [ref, componentRef]});

        return (
            <div ref={mergedRef}
                 className={cx(
                     opacity,
                     overflow,
                     overflowX,
                     overflowY,
                     border,
                     borderTop,
                     borderEnd,
                     borderBottom,
                     borderStart,
                     borderColor,
                     rounded,
                     roundedTop,
                     roundedEnd,
                     roundedBottom,
                     roundedStart,
                     shadow,
                     margin,
                     marginX,
                     marginY,
                     marginTop,
                     marginEnd,
                     marginBottom,
                     marginStart,
                     marginNegative,
                     marginNegativeX,
                     marginNegativeY,
                     marginNegativeTop,
                     marginNegativeEnd,
                     marginNegativeBottom,
                     marginNegativeStart,
                     padding,
                     paddingX,
                     paddingY,
                     paddingTop,
                     paddingEnd,
                     paddingBottom,
                     paddingStart,
                     textAlign,
                     textTransform,
                     userSelect,
                     pointerEvent,
                     visibility,
                     color,
                     backgroundColor
                 )}
                 id={id}>{children}</div>
        );
    });

Box.opacitys = OPACITY;
Box.overflows = OVERFLOW;
Box.overflowXs = OVERFLOW_X;
Box.overflowYs = OVERFLOW_Y;
Box.borders = BORDER;
Box.borderTops = BORDER_TOP;
Box.borderEnds = BORDER_END;
Box.borderBottoms = BORDER_BOTTOM;
Box.borderStarts = BORDER_START;
Box.borderColors = BORDER_COLOR;
Box.roundeds = ROUNDED;
Box.roundedTops = ROUNDED_TOP;
Box.roundedEnds = ROUNDED_END;
Box.roundedBottoms = ROUNDED_BOTTOM;
Box.roundedStarts = ROUNDED_START;
Box.shadows = SHADOW;
Box.margins = MARGIN;
Box.marginXs = MARGIN_X;
Box.marginYs = MARGIN_Y;
Box.marginTops = MARGIN_TOP;
Box.marginEnds = MARGIN_END;
Box.marginBottoms = MARGIN_BOTTOM;
Box.marginStarts = MARGIN_START;
Box.marginNegatives = MARGIN_NEGATIVE;
Box.marginNegativeXs = MARGIN_NEGATIVE_X;
Box.marginNegativeYs = MARGIN_NEGATIVE_Y;
Box.marginNegativeTops = MARGIN_NEGATIVE_TOP;
Box.marginNegativeEnds = MARGIN_NEGATIVE_END;
Box.marginNegativeBottoms = MARGIN_NEGATIVE_BOTTOM;
Box.marginNegativeStarts = MARGIN_NEGATIVE_START;
Box.paddings = PADDING;
Box.paddingXs = PADDING_X;
Box.paddingYs = PADDING_Y;
Box.paddingTops = PADDING_TOP;
Box.paddingEnds = PADDING_END;
Box.paddingBottoms = PADDING_BOTTOM;
Box.paddingStarts = PADDING_START;
Box.textAligns = TEXT_ALIGN;
Box.textTransforms = TEXT_TRANSFORM;
Box.userSelects = USER_SELECT;
Box.pointerEvents = POINTER_EVENTS;
Box.visibilities = VISIBILITY;
Box.backgroundColors = BACKGROUND_COLORS;
Box.colors = COLORS;

Box.propTypes = {
    /**
     * class name to be add to the wrapper
     */
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element)
    ]),
    opacity: PropTypes.oneOf(
        [
            Box.opacitys.DISABLED,
        ]
    ),
    overflow: PropTypes.oneOf(
        [
            Box.overflows.AUTO,
            Box.overflows.HIDDEN,
            Box.overflows.VISIBLE,
            Box.overflows.SCROLL,
        ]
    ),
    overflowX: PropTypes.oneOf(
        [
            Box.overflowXs.AUTO,
            Box.overflowXs.HIDDEN,
            Box.overflowXs.VISIBLE,
            Box.overflowXs.SCROLL,
        ]
    ),
    overflowY: PropTypes.oneOf(
        [
            Box.overflowYs.AUTO,
            Box.overflowYs.HIDDEN,
            Box.overflowYs.VISIBLE,
            Box.overflowYs.SCROLL,
        ]
    ),
    border: PropTypes.oneOf(
        [
            Box.borders.NONE,
            Box.borders.DEFAULT,
        ]
    ),
    borderTop: PropTypes.oneOf(
        [
            Box.borderTops.NONE,
            Box.borderTops.DEFAULT,
        ]
    ),
    borderEnd: PropTypes.oneOf(
        [
            Box.borderEnds.NONE,
            Box.borderEnds.DEFAULT,
        ]
    ),
    borderBottom: PropTypes.oneOf(
        [
            Box.borderBottoms.NONE,
            Box.borderBottoms.DEFAULT,
        ]
    ),
    borderStart: PropTypes.oneOf(
        [
            Box.borderStarts.NONE,
            Box.borderStarts.DEFAULT,
        ]
    ),
    borderColor: PropTypes.oneOf(
        [
            Box.borderColors.UI_BORDER_COLOR,
            Box.borderColors.LAYOUT_BORDER_COLOR,
        ]
    ),
    rounded: PropTypes.oneOf(
        [
            Box.roundeds.NONE,
            Box.roundeds.SMALL,
            Box.roundeds.MEDIUM,
            Box.roundeds.BIG,
        ]
    ),
    roundedTop: PropTypes.oneOf(
        [
            Box.roundedTops.NONE,
            Box.roundedTops.SMALL,
            Box.roundedTops.MEDIUM,
            Box.roundedTops.BIG,
        ]
    ),
    roundedEnd: PropTypes.oneOf(
        [
            Box.roundedEnds.NONE,
            Box.roundedEnds.SMALL,
            Box.roundedEnds.MEDIUM,
            Box.roundedEnds.BIG,
        ]
    ),
    roundedBottom: PropTypes.oneOf(
        [
            Box.roundedBottoms.NONE,
            Box.roundedBottoms.SMALL,
            Box.roundedBottoms.MEDIUM,
            Box.roundedBottoms.BIG,
        ]
    ),
    roundedStart: PropTypes.oneOf(
        [
            Box.roundedStarts.NONE,
            Box.roundedStarts.SMALL,
            Box.roundedStarts.MEDIUM,
            Box.roundedStarts.BIG,
        ]
    ),
    shadow: PropTypes.oneOf(
        [
            Box.shadows.SMALL,
            Box.shadows.MEDIUM,
            Box.shadows.LARGE,
        ]
    ),
    margin: PropTypes.oneOf(
        [
            Box.margins.NONE,
            Box.margins.AUTO,
            Box.margins.XS,
            Box.margins.SMALL,
            Box.margins.MEDIUM,
            Box.margins.LARGE,
            Box.margins.XL,
            Box.margins.XXL,
            Box.margins.XXXL,
        ]
    ),
    marginX: PropTypes.oneOf(
        [
            Box.marginXs.NONE,
            Box.marginXs.AUTO,
            Box.marginXs.XS,
            Box.marginXs.SMALL,
            Box.marginXs.MEDIUM,
            Box.marginXs.LARGE,
            Box.marginXs.XL,
            Box.marginXs.XXL,
            Box.marginXs.XXXL,
        ]
    ),
    marginY: PropTypes.oneOf(
        [
            Box.marginYs.NONE,
            Box.marginYs.AUTO,
            Box.marginYs.XS,
            Box.marginYs.SMALL,
            Box.marginYs.MEDIUM,
            Box.marginYs.LARGE,
            Box.marginYs.XL,
            Box.marginYs.XXL,
            Box.marginYs.XXXL,
        ]
    ),
    marginTop: PropTypes.oneOf(
        [
            Box.marginTops.NONE,
            Box.marginTops.AUTO,
            Box.marginTops.XS,
            Box.marginTops.SMALL,
            Box.marginTops.MEDIUM,
            Box.marginTops.LARGE,
            Box.marginTops.XL,
            Box.marginTops.XXL,
            Box.marginTops.XXXL,
        ]
    ),
    marginEnd: PropTypes.oneOf(
        [
            Box.marginEnds.NONE,
            Box.marginEnds.AUTO,
            Box.marginEnds.XS,
            Box.marginEnds.SMALL,
            Box.marginEnds.MEDIUM,
            Box.marginEnds.LARGE,
            Box.marginEnds.XL,
            Box.marginEnds.XXL,
            Box.marginEnds.XXXL,
        ]
    ),
    marginBottom: PropTypes.oneOf(
        [
            Box.marginBottoms.NONE,
            Box.marginBottoms.AUTO,
            Box.marginBottoms.XS,
            Box.marginBottoms.SMALL,
            Box.marginBottoms.MEDIUM,
            Box.marginBottoms.LARGE,
            Box.marginBottoms.XL,
            Box.marginBottoms.XXL,
            Box.marginBottoms.XXXL,
        ]
    ),
    marginStart: PropTypes.oneOf(
        [
            Box.marginStarts.NONE,
            Box.marginStarts.AUTO,
            Box.marginStarts.XS,
            Box.marginStarts.SMALL,
            Box.marginStarts.MEDIUM,
            Box.marginStarts.LARGE,
            Box.marginStarts.XL,
            Box.marginStarts.XXL,
            Box.marginStarts.XXXL,
        ]
    ),
    padding: PropTypes.oneOf(
        [
            Box.paddings.NONE,
            Box.paddings.XS,
            Box.paddings.SMALL,
            Box.paddings.MEDIUM,
            Box.paddings.LARGE,
            Box.paddings.XL,
            Box.paddings.XXL,
            Box.paddings.XXXL,
        ]
    ),
    paddingX: PropTypes.oneOf(
        [
            Box.paddingXs.NONE,
            Box.paddingXs.XS,
            Box.paddingXs.SMALL,
            Box.paddingXs.MEDIUM,
            Box.paddingXs.LARGE,
            Box.paddingXs.XL,
            Box.paddingXs.XXL,
            Box.paddingXs.XXXL,
        ]
    ),
    paddingY: PropTypes.oneOf(
        [
            Box.paddingYs.NONE,
            Box.paddingYs.XS,
            Box.paddingYs.SMALL,
            Box.paddingYs.MEDIUM,
            Box.paddingYs.LARGE,
            Box.paddingYs.XL,
            Box.paddingYs.XXL,
            Box.paddingYs.XXXL,
        ]
    ),
    paddingTop: PropTypes.oneOf(
        [
            Box.paddingTops.NONE,
            Box.paddingTops.XS,
            Box.paddingTops.SMALL,
            Box.paddingTops.MEDIUM,
            Box.paddingTops.LARGE,
            Box.paddingTops.XL,
            Box.paddingTops.XXL,
            Box.paddingTops.XXXL,
        ]
    ),
    paddingEnd: PropTypes.oneOf(
        [
            Box.paddingEnds.NONE,
            Box.paddingEnds.XS,
            Box.paddingEnds.SMALL,
            Box.paddingEnds.MEDIUM,
            Box.paddingEnds.LARGE,
            Box.paddingEnds.XL,
            Box.paddingEnds.XXL,
            Box.paddingEnds.XXXL,
        ]
    ),
    paddingBottom: PropTypes.oneOf(
        [
            Box.paddingBottoms.NONE,
            Box.paddingBottoms.XS,
            Box.paddingBottoms.SMALL,
            Box.paddingBottoms.MEDIUM,
            Box.paddingBottoms.LARGE,
            Box.paddingBottoms.XL,
            Box.paddingBottoms.XXL,
            Box.paddingBottoms.XXXL,
        ]
    ),
    textAlign: PropTypes.oneOf(
        [
            Box.textAligns.START,
            Box.textAligns.END,
            Box.textAligns.CENTER,
        ]
    ),

    textTransform: PropTypes.oneOf(
        [
            Box.textTransforms.LOWERCASE,
            Box.textTransforms.UPPERCASE,
            Box.textTransforms.CAPITALIZE,
        ]
    ),
    userSelect: PropTypes.oneOf(
        [
            Box.userSelects.ALL,
            Box.userSelects.AUTO,
            Box.userSelects.NONE,
        ]
    ),
    pointerEvent: PropTypes.oneOf(
        [
            Box.pointerEvents.NONE,
            Box.pointerEvents.AUTO,
        ]
    ),
    color: PropTypes.oneOf(
        [
            Box.colors.PRIMARY_COLOR,
            Box.colors.PRIMARY_HOVER_COLOR,
            Box.colors.PRIMARY_TEXT_COLOR,
            Box.colors.TEXT_COLOR_ON_PRIMARY,
            Box.colors.TEXT_COLOR_ON_INVERTED,
            Box.colors.SECONDARY_TEXT_COLOR,
            Box.colors.PLACEHOLDER_COLOR,
            Box.colors.ICON_COLOR,
            Box.colors.LINK_COLOR,
            Box.colors.DISABLED_TEXT_COLOR,
        ]
    ),
    backgroundColor: PropTypes.oneOf(
        [
            Box.backgroundColors.PRIMARY_BACKGROUND_COLOR,
            Box.backgroundColors.PRIMARY_HOVER_BACKGROUND_COLOR,
            Box.backgroundColors.SECONDARY_BACKGROUND_COLOR,
            Box.backgroundColors.GREY_BACKGROUND_COLOR,
            Box.backgroundColors.ALL_GREY_BACKGROUND_COLOR,
            Box.backgroundColors.INVERTED_COLOR_BACKGROUND,
            Box.backgroundColors.DISABLED_BACKGROUND_COLOR,
        ]
    ),
    className: PropTypes.string,
    /**
     * id to be add to the wrapper
     */
    id: PropTypes.string
};
Box.defaultProps = {
    className: "",
    opacity: undefined,
    overflow: undefined,
    overflowX: undefined,
    overflowY: undefined,
    border: undefined,
    borderTop: undefined,
    borderEnd: undefined,
    borderBottom: undefined,
    borderStart: undefined,
    borderColor: undefined,
    rounded: undefined,
    roundedTop: undefined,
    roundedEnd: undefined,
    roundedBottom: undefined,
    roundedStart: undefined,
    shadow: undefined,
    margin: undefined,
    marginX: undefined,
    marginY: undefined,
    marginTop: undefined,
    marginEnd: undefined,
    marginBottom: undefined,
    marginStart: undefined,
    marginNegative: undefined,
    marginNegativeX: undefined,
    marginNegativeY: undefined,
    marginNegativeTop: undefined,
    marginNegativeEnd: undefined,
    marginNegativeBottom: undefined,
    marginNegativeStart: undefined,
    padding: undefined,
    paddingX: undefined,
    paddingY: undefined,
    paddingTop: undefined,
    paddingEnd: undefined,
    paddingBottom: undefined,
    paddingStart: undefined,
    textAlign: undefined,
    textTransform: undefined,
    userSelect: undefined,
    pointerEvent: undefined,
    visibility: undefined,
    color: undefined,
    backgroundColor: undefined,
    id: undefined
};

export default Box;
