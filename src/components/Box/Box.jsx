import React, {useRef, forwardRef} from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "hooks/useMergeRefs";
import {
    BACKGROUND_COLORS,
    COLORS,
    ROUNDED,
    ROUNDED_TOP,
    ROUNDED_END,
    ROUNDED_BOTTOM,
    ROUNDED_START,
    SHADOW,
} from "./BoxConstants"
import styles from "./Box.module.scss";

const Box = forwardRef(
    ({
         className,
         id,
         color,
         bgColor,
         rounded,
         roundedTop,
         roundedEnd,
         roundedBottom,
         roundedStart,
         shadow,
     },
     ref,
    ) => {
        const componentRef = useRef(null);
        const mergedRef = useMergeRefs({refs: [ref, componentRef]});

        return (
            <div ref={mergedRef}
                 className={cx(
                     styles.box,
                     color,
                     bgColor,
                     rounded,
                     roundedTop,
                     roundedEnd,
                     roundedBottom,
                     roundedStart,
                     shadow
                 )}
                 id={id}>test</div>
        );
    });

Box.bgColor = BACKGROUND_COLORS;
Box.color = COLORS;
Box.rounded = ROUNDED;
Box.roundedTop = ROUNDED_TOP;
Box.roundedEnd = ROUNDED_END;
Box.roundedBottom = ROUNDED_BOTTOM;
Box.roundedStart = ROUNDED_START;
Box.shadow = SHADOW;

Box.propTypes = {
    /**
     * class name to be add to the wrapper
     */
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
    className: PropTypes.string,
    /**
     * id to be add to the wrapper
     */
    id: PropTypes.string
};
Box.defaultProps = {
    className: "",
    color: undefined,
    bgColor: undefined,
    rounded: undefined,
    roundedTop: undefined,
    roundedEnd: undefined,
    roundedBottom: undefined,
    roundedStart: undefined,
    shadow: undefined,
    id: undefined
};

export default Box;
