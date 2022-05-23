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
    TEXT_DECORATION,
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
         textDecoration,
         textTransform,
         userSelect,
         pointerEvents,
         visibility,
         color,
         bgColor
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
                     textDecoration,
                     textTransform,
                     userSelect,
                     pointerEvents,
                     visibility,
                     color,
                     bgColor
                 )}
                 id={id}>{children}</div>
        );
    });

Box.opacity = OPACITY;
Box.overflow = OVERFLOW;
Box.overflowX = OVERFLOW_X;
Box.overflowY = OVERFLOW_Y;
Box.border = BORDER;
Box.borderTop = BORDER_TOP;
Box.borderEnd = BORDER_END;
Box.borderBottom = BORDER_BOTTOM;
Box.borderStart = BORDER_START;
Box.borderColor = BORDER_COLOR;
Box.rounded = ROUNDED;
Box.roundedTop = ROUNDED_TOP;
Box.roundedEnd = ROUNDED_END;
Box.roundedBottom = ROUNDED_BOTTOM;
Box.roundedStart = ROUNDED_START;
Box.shadow = SHADOW;
Box.margin = MARGIN;
Box.marginX = MARGIN_X;
Box.marginY = MARGIN_Y;
Box.marginTop = MARGIN_TOP;
Box.marginEnd = MARGIN_END;
Box.marginBottom = MARGIN_BOTTOM;
Box.marginStart = MARGIN_START;
Box.marginNegative = MARGIN_NEGATIVE;
Box.marginNegativeX = MARGIN_NEGATIVE_X;
Box.marginNegativeY = MARGIN_NEGATIVE_Y;
Box.marginNegativeTop = MARGIN_NEGATIVE_TOP;
Box.marginNegativeEnd = MARGIN_NEGATIVE_END;
Box.marginNegativeBottom = MARGIN_NEGATIVE_BOTTOM;
Box.marginNegativeStart = MARGIN_NEGATIVE_START;
Box.padding = PADDING;
Box.paddingX = PADDING_X;
Box.paddingY = PADDING_Y;
Box.paddingTop = PADDING_TOP;
Box.paddingEnd = PADDING_END;
Box.paddingBottom = PADDING_BOTTOM;
Box.paddingStart = PADDING_START;
Box.textAlign = TEXT_ALIGN;
Box.textDecoration = TEXT_DECORATION;
Box.textTransform = TEXT_TRANSFORM;
Box.userSelect = USER_SELECT;
Box.pointerEvents = POINTER_EVENTS;
Box.visibility = VISIBILITY;
Box.bgColor = BACKGROUND_COLORS;
Box.color = COLORS;

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
            Box.opacity.DISABLED,
        ]
    ),
    overflow: PropTypes.oneOf(
        [
            Box.overflow.AUTO,
            Box.overflow.HIDDEN,
            Box.overflow.VISIBLE,
            Box.overflow.SCROLL,
        ]
    ),
    overflowX: PropTypes.oneOf(
        [
            Box.overflowX.AUTO,
            Box.overflowX.HIDDEN,
            Box.overflowX.VISIBLE,
            Box.overflowX.SCROLL,
        ]
    ),
    overflowY: PropTypes.oneOf(
        [
            Box.overflowY.AUTO,
            Box.overflowY.HIDDEN,
            Box.overflowY.VISIBLE,
            Box.overflowY.SCROLL,
        ]
    ),
    border: PropTypes.oneOf(
        [
            Box.border.NONE,
            Box.border.DEFAULT,
        ]
    ),
    borderTop: PropTypes.oneOf(
        [
            Box.borderTop.NONE,
            Box.borderTop.DEFAULT,
        ]
    ),
    borderEnd: PropTypes.oneOf(
        [
            Box.borderEnd.NONE,
            Box.borderEnd.DEFAULT,
        ]
    ),
    borderBottom: PropTypes.oneOf(
        [
            Box.borderBottom.NONE,
            Box.borderBottom.DEFAULT,
        ]
    ),
    borderStart: PropTypes.oneOf(
        [
            Box.borderStart.NONE,
            Box.borderStart.DEFAULT,
        ]
    ),
    borderColor: PropTypes.oneOf(
        [
            Box.borderColor.UI_BORDER_COLOR,
            Box.borderColor.LAYOUT_BORDER_COLOR,
        ]
    ),
    rounded: PropTypes.oneOf(
        [
            Box.rounded.NONE,
            Box.rounded.SMALL,
            Box.rounded.MEDIUM,
            Box.rounded.BIG,
        ]
    ),
    roundedTop: PropTypes.oneOf(
        [
            Box.roundedTop.NONE,
            Box.roundedTop.SMALL,
            Box.roundedTop.MEDIUM,
            Box.roundedTop.BIG,
        ]
    ),
    roundedEnd: PropTypes.oneOf(
        [
            Box.roundedEnd.NONE,
            Box.roundedEnd.SMALL,
            Box.roundedEnd.MEDIUM,
            Box.roundedEnd.BIG,
        ]
    ),
    roundedBottom: PropTypes.oneOf(
        [
            Box.roundedBottom.NONE,
            Box.roundedBottom.SMALL,
            Box.roundedBottom.MEDIUM,
            Box.roundedBottom.BIG,
        ]
    ),
    roundedStart: PropTypes.oneOf(
        [
            Box.roundedStart.NONE,
            Box.roundedStart.SMALL,
            Box.roundedStart.MEDIUM,
            Box.roundedStart.BIG,
        ]
    ),
    shadow: PropTypes.oneOf(
        [
            Box.shadow.SMALL,
            Box.shadow.MEDIUM,
            Box.shadow.LARGE,
        ]
    ),
    margin: PropTypes.oneOf(
        [
            Box.margin.XS,
            Box.margin.SMALL,
            Box.margin.MEDIUM,
            Box.margin.LARGE,
            Box.margin.XL,
            Box.margin.XXL,
            Box.margin.XXXL,
        ]
    ),
    marginX: PropTypes.oneOf(
        [
            Box.marginX.XS,
            Box.marginX.SMALL,
            Box.marginX.MEDIUM,
            Box.marginX.LARGE,
            Box.marginX.XL,
            Box.marginX.XXL,
            Box.marginX.XXXL,
        ]
    ),
    marginY: PropTypes.oneOf(
        [
            Box.marginY.XS,
            Box.marginY.SMALL,
            Box.marginY.MEDIUM,
            Box.marginY.LARGE,
            Box.marginY.XL,
            Box.marginY.XXL,
            Box.marginY.XXXL,
        ]
    ),
    marginTop: PropTypes.oneOf(
        [
            Box.marginTop.XS,
            Box.marginTop.SMALL,
            Box.marginTop.MEDIUM,
            Box.marginTop.LARGE,
            Box.marginTop.XL,
            Box.marginTop.XXL,
            Box.marginTop.XXXL,
        ]
    ),
    marginEnd: PropTypes.oneOf(
        [
            Box.marginEnd.XS,
            Box.marginEnd.SMALL,
            Box.marginEnd.MEDIUM,
            Box.marginEnd.LARGE,
            Box.marginEnd.XL,
            Box.marginEnd.XXL,
            Box.marginEnd.XXXL,
        ]
    ),
    marginBottom: PropTypes.oneOf(
        [
            Box.marginBottom.XS,
            Box.marginBottom.SMALL,
            Box.marginBottom.MEDIUM,
            Box.marginBottom.LARGE,
            Box.marginBottom.XL,
            Box.marginBottom.XXL,
            Box.marginBottom.XXXL,
        ]
    ),
    marginStart: PropTypes.oneOf(
        [
            Box.marginStart.XS,
            Box.marginStart.SMALL,
            Box.marginStart.MEDIUM,
            Box.marginStart.LARGE,
            Box.marginStart.XL,
            Box.marginStart.XXL,
            Box.marginStart.XXXL,
        ]
    ),
    padding: PropTypes.oneOf(
        [
            Box.padding.XS,
            Box.padding.SMALL,
            Box.padding.MEDIUM,
            Box.padding.LARGE,
            Box.padding.XL,
            Box.padding.XXL,
            Box.padding.XXXL,
        ]
    ),
    paddingX: PropTypes.oneOf(
        [
            Box.paddingX.XS,
            Box.paddingX.SMALL,
            Box.paddingX.MEDIUM,
            Box.paddingX.LARGE,
            Box.paddingX.XL,
            Box.paddingX.XXL,
            Box.paddingX.XXXL,
        ]
    ),
    paddingY: PropTypes.oneOf(
        [
            Box.paddingY.XS,
            Box.paddingY.SMALL,
            Box.paddingY.MEDIUM,
            Box.paddingY.LARGE,
            Box.paddingY.XL,
            Box.paddingY.XXL,
            Box.paddingY.XXXL,
        ]
    ),
    paddingTop: PropTypes.oneOf(
        [
            Box.paddingTop.XS,
            Box.paddingTop.SMALL,
            Box.paddingTop.MEDIUM,
            Box.paddingTop.LARGE,
            Box.paddingTop.XL,
            Box.paddingTop.XXL,
            Box.paddingTop.XXXL,
        ]
    ),
    paddingEnd: PropTypes.oneOf(
        [
            Box.paddingEnd.XS,
            Box.paddingEnd.SMALL,
            Box.paddingEnd.MEDIUM,
            Box.paddingEnd.LARGE,
            Box.paddingEnd.XL,
            Box.paddingEnd.XXL,
            Box.paddingEnd.XXXL,
        ]
    ),
    paddingBottom: PropTypes.oneOf(
        [
            Box.paddingBottom.XS,
            Box.paddingBottom.SMALL,
            Box.paddingBottom.MEDIUM,
            Box.paddingBottom.LARGE,
            Box.paddingBottom.XL,
            Box.paddingBottom.XXL,
            Box.paddingBottom.XXXL,
        ]
    ),
    textAlign: PropTypes.oneOf(
        [
            Box.textAlign.START,
            Box.textAlign.END,
            Box.textAlign.CENTER,
        ]
    ),
    textDecoration: PropTypes.oneOf(
        [
            Box.textDecoration.NONE,
            Box.textDecoration.UNDERLINE,
            Box.textDecoration.LINE_THROUGH,
        ]
    ),
    userSelect: PropTypes.oneOf(
        [
            Box.userSelect.ALL,
            Box.userSelect.AUTO,
            Box.userSelect.NONE,
        ]
    ),
    pointerEvents: PropTypes.oneOf(
        [
            Box.pointerEvents.NONE,
            Box.pointerEvents.AUTO,
        ]
    ),
    color: PropTypes.oneOf(
        [
            Box.color.PRIMARY_COLOR,
            Box.color.PRIMARY_HOVER_COLOR,
            Box.color.PRIMARY_TEXT_COLOR,
            Box.color.PRIMARY_TECT_COLOR_ON_PRIMARY,
            Box.color.PRIMARY_COLOR_ON_INVERTED,
            Box.color.TEXT_COLOR_ON_PRIMARY,
            Box.color.TEXT_COLOR_ON_INVERTED,
            Box.color.SECONDARY_TEXT_COLOR,
            Box.color.PLACEHOLDER_COLOR,
            Box.color.ICON_COLOR,
            Box.color.LINK_COLOR,
            Box.color.DISABLED_TEXT_COLOR,
        ]
    ),
    bgColor: PropTypes.oneOf(
        [
            Box.bgColor.PRIMARY_BACKGROUND_COLOR,
            Box.bgColor.PRIMARY_HOVER_BACKGROUND_COLOR,
            Box.bgColor.SECONDARY_BACKGROUND_COLOR,
            Box.bgColor.GREY_BACKGROUND_COLOR,
            Box.bgColor.ALL_GREY_BACKGROUND_COLOR,
            Box.bgColor.INVERTED_COLOR_BACKGROUND,
            Box.bgColor.DISABLED_BACKGROUND_COLOR,
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
    textDecoration: undefined,
    textTransform: undefined,
    userSelect: undefined,
    pointerEvents: undefined,
    visibility: undefined,
    color: undefined,
    bgColor: undefined,
    id: undefined
};

export default Box;
