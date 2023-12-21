import cx from "classnames";
import React, { useRef, forwardRef, useMemo } from "react";
import PropTypes from "prop-types";
import useMergeRef from "../../hooks/useMergeRef";
import MenuButton from "../MenuButton/MenuButton";
import useElementsOverflowingIndex from "../../hooks/useElementsOverflowingIndex";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import styles from "./ResponsiveList.module.scss";

const DEFAULT_MINIMAL_MARGIN = 32;
const EMPTY_ARRAY = [];

const ResponsiveList = forwardRef(
  (
    {
      id,
      className,
      rootClassName,
      children,
      menuButtonSize,
      paddingSize,
      dialogZIndex,
      dialogClassName,
      menuButtonClassName,
      menuWrapperClassName,
      resizeDebounceTime,
      menuButtonAriaLabel,
      menuButtonProps,
      "data-testid": dataTestId
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);
    const index = useElementsOverflowingIndex({
      ref: componentRef,
      children,
      paddingSize,
      resizeDebounceTime,
      ignoreLast: true
    });

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

    const hiddenChildren = useMemo(() => {
      const childrenArray = React.Children.toArray(children);

      return childrenArray.map(el => el?.props?.responsiveListPlaceholder || el);
    }, [children]);

    return (
      <div
        className={cx(styles.responsiveListRoot, rootClassName)}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.RESPONSIVE_LIST, id)}
      >
        {index !== null && (
          <div className={cx(styles.responsiveList, className)}>
            {directChildren}
            {!!menuChildren.length && (
              <MenuButton
                componentClassName={cx(styles.listMenuButton, menuButtonClassName)}
                size={menuButtonSize}
                openDialogComponentClassName={cx(styles.menuButtonDialog, dialogClassName)}
                zIndex={dialogZIndex}
                ariaLabel={menuButtonAriaLabel}
                {...menuButtonProps}
              >
                <div className={cx(styles.menuWrapperFlex, menuWrapperClassName)}>{menuChildren}</div>
              </MenuButton>
            )}
          </div>
        )}
        <div ref={mergedRef} className={cx(styles.responsiveList, styles.dummy, className)}>
          {hiddenChildren}
          <MenuButton
            componentClassName={cx(styles.listMenuButton, menuButtonClassName)}
            size={menuButtonSize}
            openDialogComponentClassName={cx(styles.menuButtonDialog, dialogClassName)}
            zIndex={dialogZIndex}
            ariaLabel={menuButtonAriaLabel}
            {...menuButtonProps}
          >
            <div className={cx(styles.menuWrapperFlex, menuWrapperClassName)} />
          </MenuButton>
        </div>
      </div>
    );
  }
);

ResponsiveList.menuButtonSizes = MenuButton.sizes;
ResponsiveList.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  menuButtonClassName: PropTypes.string,
  menuWrapperClassName: PropTypes.string,
  /**
   These attributes will be passed to the MenuButton
   */
  menuButtonProps: PropTypes.object,
  menuButtonAriaLabel: PropTypes.string,
  rootClassName: PropTypes.string,
  dialogClassName: PropTypes.string,
  menuButtonSize: PropTypes.oneOf(Object.values(ResponsiveList.menuButtonSizes)),
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
  menuWrapperClassName: "",
  rootClassName: "",
  menuButtonAriaLabel: "More Actions",
  menuButtonProps: {},
  menuButtonSize: ResponsiveList.menuButtonSizes.SMALL,
  paddingSize: DEFAULT_MINIMAL_MARGIN,
  dialogZIndex: 9999,
  resizeDebounceTime: 0
};

export default ResponsiveList;
