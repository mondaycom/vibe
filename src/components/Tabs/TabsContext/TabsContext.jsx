import React, { useRef, forwardRef, useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../../hooks/useMergeRefs";
import usePrevious from "../../../hooks/usePrevious";
import "./TabsContext.scss";

const TabsContext = forwardRef(({ className, id, activeTabId, children }, ref) => {
  const componentRef = useRef(null);
  const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

  const [previousActiveTabIdState, setPreviousActiveTabIdState] = useState(activeTabId);
  const [activeTabIdState, setActiveTabIdState] = useState(activeTabId);
  const prevActiveTabIdProp = usePrevious(activeTabId);

  useEffect(() => {
    // Update active tab if changed from props
    if (activeTabId !== prevActiveTabIdProp && activeTabId !== activeTabIdState) {
      setPreviousActiveTabIdState(activeTabIdState);
      setActiveTabIdState(activeTabId);
    }
  }, [activeTabId, prevActiveTabIdProp, activeTabIdState, setPreviousActiveTabIdState, setActiveTabIdState]);

  const onTabClick = useCallback(
    tabId => {
      setPreviousActiveTabIdState(activeTabIdState);
      setActiveTabIdState(tabId);
    },
    [setPreviousActiveTabIdState, activeTabIdState, setActiveTabIdState]
  );

  return (
    <div ref={mergedRef} className={cx("tabs-context--wrapper", className)} id={id}>
      {React.Children.map(children, child => {
        if (child.type.isTabList) {
          return React.cloneElement(child, { activeTabId: activeTabIdState, onTabChange: onTabClick });
        }
        if (child.type.isTabPanels) {
          const animationDirection = previousActiveTabIdState < activeTabIdState ? "ltr" : "rtl";
          return React.cloneElement(child, { activeTabId: activeTabIdState, animationDirection });
        }
        return child;
      })}
    </div>
  );
});

TabsContext.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  activeTabId: PropTypes.number
};
TabsContext.defaultProps = {
  className: "",
  id: "",
  activeTabId: 0
};

export default TabsContext;
