import React, { useRef, forwardRef, useMemo } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import MenuButton from "../MenuButton/MenuButton";
import "./ResponsiveList.scss";
import useElementsOverflowingIndex from "../../hooks/useElementsOverflowingIndex";

const DEFAULT_MINIMAL_MARGIN = 32;
const EMPTY_ARRAY = [];

const ResponsiveList = forwardRef(
  (
    {
      id,
      className,
      children,
      menuButtonSize,
      paddingSize,
      dialogZIndex,
      dialogClassName,
      menuButtonClassName,
      resizeDebounceTime,
      menuButtonProps
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
    const index = useElementsOverflowingIndex({ ref: componentRef, children, paddingSize, resizeDebounceTime });

    const directChildren = useMemo(() => {
      if (index === -1) {
        return children;
      }
      const childrenArray = React.Children.toArray(children);
      return childrenArray.slice(0, index);
    }, [children, index]);

    const menuChildren = useMemo(() => {
      if (index === -1) {
        return EMPTY_ARRAY;
      }
      const childrenArray = React.Children.toArray(children);

      return childrenArray.slice(index, childrenArray.length);
    }, [children, index]);

    return (
      <div ref={mergedRef} className={cx("responsive-list--wrapper", className)} id={id}>
        {directChildren}
        {!!menuChildren.length && (
          <MenuButton
            componentClassName={cx("responsive-list-menu-button", menuButtonClassName)}
            size={menuButtonSize}
            openDialogComponentClassName={cx("responsive-list--menu-button-dialog", dialogClassName)}
            zIndex={dialogZIndex}
            {...menuButtonProps}
          >
            <div className="responsive-list-menu-wrapper-flex">{menuChildren}</div>
          </MenuButton>
        )}
      </div>
    );
  }
);

ResponsiveList.menuButtonSizes = MenuButton.sizes;

ResponsiveList.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  menuButtonClassName: PropTypes.string,
  /**
   These attributes will be passed to the MenuButton
   */
  menuButtonProps: PropTypes.object,
  dialogClassName: PropTypes.string,
  menuButtonSize: PropTypes.oneOf(Object.keys(ResponsiveList.menuButtonSizes)),
  /**
  Amount of space to save between the menu button and the content
   */
  paddingSize: PropTypes.number,
  dialogZIndex: PropTypes.number,
  /**
   *  we use resize observer behind the scene to update the size, debounce the amount of callbacks (each callback may cause a reflow)
   */
  resizeDebounceTime: PropTypes.number
};
ResponsiveList.defaultProps = {
  id: "",
  className: "",
  dialogClassName: "",
  menuButtonClassName: "",
  menuButtonProps: {},
  menuButtonSize: ResponsiveList.menuButtonSizes.SMALL,
  paddingSize: DEFAULT_MINIMAL_MARGIN,
  dialogZIndex: 9999,
  resizeDebounceTime: 0
};

export default ResponsiveList;
