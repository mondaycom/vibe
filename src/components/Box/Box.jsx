import React, {useRef, forwardRef} from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "hooks/useMergeRefs";
import styles from "./Box.module.scss";

const Box = forwardRef(({className, id}, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({refs: [ref, componentRef]});

    return (
        <div ref={mergedRef} className={cx(styles.box, className)} id={id}>
            <div className={`${styles.boxInner} ${styles.roundedSmall}`}>rounded small</div>
            <div className={`${styles.boxInner} ${styles.roundedMedium}`}>rounded medium</div>
            <div className={`${styles.boxInner} ${styles.roundedBig}`}>rounded big</div>
            <div className={`${styles.boxInner} ${styles.shadowSmall}`}>shadow small</div>
            <div className={`${styles.boxInner} ${styles.shadowMedium}`}>shadow medium</div>
            <div className={`${styles.boxInner} ${styles.shadowLarge}`}>shadow large</div>
            <div className={`${styles.boxInner} ${styles.bgPrimaryBackgroundColor} ${styles.textPrimaryColor} ${styles.pSpacingXl}`}>bgPrimaryBackgroundColor textPrimaryColor pSpacingXl</div>
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
