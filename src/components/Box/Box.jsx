import React, {useRef, forwardRef} from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "hooks/useMergeRefs";
import styles from "./Box.module.scss";

const Box = forwardRef(({className, id}, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({refs: [ref, componentRef]});
    return (
        <div ref={mergedRef} className={cx("box", className)} id={id}>
            <div className={styles.red}>1</div>
            <div className={styles.blue}>2</div>
        </div>
    );
});

Box.propTypes = {
    /**
     * class name to be add to the wrapper
     */
    className: PropTypes.string,
    /**
     * id to be add to the wrapper
     */
    id: PropTypes.string
};
Box.defaultProps = {
    className: "",
    id: undefined
};

export default Box;
