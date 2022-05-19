import React, {useRef, forwardRef} from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "hooks/useMergeRefs";
import {BOX_BACKGROUND_COLORS} from "./BoxConstants"
import styles from "./Box.module.scss";

const Box = forwardRef(
    ({
         className,
         id,
         rounded,
         bgColor
     },
     ref,
    ) => {
        const componentRef = useRef(null);
        const mergedRef = useMergeRefs({refs: [ref, componentRef]});

        console.log({rounded});
        return (
            <div ref={mergedRef}
                 className={cx(
                     styles.box,
                     rounded,
                     bgColor
                 )}
                 id={id}>test</div>
        );
    });

Box.propTypes = {
    /**
     * class name to be add to the wrapper
     */
    bgColor: PropTypes.oneOf(
        [Box.bgColor.GREY_BACKGROUND]
    ),
    rounded: PropTypes.string,
    className: PropTypes.string,
    /**
     * id to be add to the wrapper
     */
    id: PropTypes.string
};
Box.defaultProps = {
    className: "",
    bgColor: undefined,
    rounded: undefined,
    id: undefined
};

export default Box;
