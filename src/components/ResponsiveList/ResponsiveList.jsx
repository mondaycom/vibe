import cx from "classnames";
import React, { forwardRef, useMemo, useRef } from "react";
import PropTypes from "prop-types";
import useMergeRefs from "../../hooks/useMergeRefs";
import MenuButton from "../MenuButton/MenuButton";
import useElementsOverflowingIndex from "../../hooks/useElementsOverflowingIndex";
import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
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
      resizeDebounceTime,
      menuButtonAriaLabel,
      menuButtonProps,
      dataTestId
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
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
        className={cx(styles.responsiveListRoot, "responsive-list--root", rootClassName)}
        id={id}
        data-testid={dataTestId || getTestId(ELEMENT_TYPES.RESPONSIVE_LIST, id)}
      >
        {index !== null && (
          <div className={cx(styles.responsiveListWrapper, "responsive-list--wrapper", className)}>
            {directChildren}
            {!!menuChildren.length && (
              <MenuButton
                componentClassName={cx(
                  styles.responsiveListMenuButton,
                  "responsive-list-menu-button",
                  menuButtonClassName
                )}
                size={menuButtonSize}
                openDialogComponentClassName={cx(
                  styles.responsiveListMenuButtonDialog,
                  "responsive-list--menu-button-dialog",
                  dialogClassName
                )}
                zIndex={dialogZIndex}
                ariaLabel={menuButtonAriaLabel}
                {...menuButtonProps}
              >
                <div className={cx(styles.responsiveListMenuWrapperFlex, "responsive-list-menu-wrapper-flex")}>
                  {menuChildren}
                </div>
              </MenuButton>
            )}
          </div>
        )}
        <div
          ref={mergedRef}
          className={cx(
            styles.responsiveListWrapper,
            "responsive-list--wrapper",
            styles.responsiveListDummy,
            "responsive-list--dummy",
            className
          )}
        >
          {hiddenChildren}
          <MenuButton
            componentClassName={cx(styles.responsiveListMenuButton, "responsive-list-menu-button", menuButtonClassName)}
            size={menuButtonSize}
            openDialogComponentClassName={cx(
              styles.responsiveListMenuButtonDialog,
              "responsive-list--menu-button-dialog",
              dialogClassName
            )}
            zIndex={dialogZIndex}
            ariaLabel={menuButtonAriaLabel}
            {...menuButtonProps}
          >
            <div className={cx(styles.responsiveListMenuWrapperFlex, "responsive-list-menu-wrapper-flex")} />
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
  rootClassName: "",
  menuButtonAriaLabel: "More Actions",
  menuButtonProps: {},
  menuButtonSize: ResponsiveList.menuButtonSizes.SMALL,
  paddingSize: DEFAULT_MINIMAL_MARGIN,
  dialogZIndex: 9999,
  resizeDebounceTime: 0
};

export default ResponsiveList;
