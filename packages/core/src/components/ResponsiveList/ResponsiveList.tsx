import cx from "classnames";
import React, { useRef, forwardRef, useMemo } from "react";
import useMergeRef from "../../hooks/useMergeRef";
import useElementsOverflowingIndex from "../../hooks/useElementsOverflowingIndex";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import styles from "./ResponsiveList.module.scss";
import { VibeComponent, withStaticProps } from "../../types";
import MenuButton from "../MenuButton/MenuButton";
import { DEFAULT_MINIMAL_MARGIN, EMPTY_ARRAY, ResponsiveListProps } from "./ResponsiveList.types";
import { useWarnDeprecated } from "../../utils/warn-deprecated";

const ResponsiveList: VibeComponent<ResponsiveListProps> & {
  menuButtonSizes?: typeof MenuButton.sizes;
} = forwardRef<HTMLDivElement, ResponsiveListProps>(
  (
    {
      id,
      className,
      rootClassName,
      children,
      menuButtonSize = MenuButton.sizes.SMALL,
      paddingSize = DEFAULT_MINIMAL_MARGIN,
      dialogZIndex = 9999,
      dialogClassName,
      menuButtonClassName,
      menuWrapperClassName,
      resizeDebounceTime = 0,
      menuButtonAriaLabel = "More Actions",
      menuButtonProps = {},
      "data-testid": dataTestId
    },
    ref
  ) => {
    useWarnDeprecated({
      component: "ResponsiveList",
      message:
        "The component is deprecated and will be removed in the next major version. Please consider using alternative solutions"
    });

    const componentRef = useRef<HTMLDivElement>(null);
    const mergedRef = useMergeRef<HTMLDivElement>(ref, componentRef);
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
      const childrenArray = React.Children.toArray(children) as React.ReactElement[];

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
                className={cx(styles.listMenuButton, menuButtonClassName)}
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
            className={cx(styles.listMenuButton, menuButtonClassName)}
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

export default withStaticProps(ResponsiveList, { menuButtonSizes: MenuButton.sizes });
