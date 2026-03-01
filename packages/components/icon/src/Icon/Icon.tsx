import cx from "classnames";
import React, { forwardRef } from "react";
import { type VibeComponentProps, ComponentDefaultTestId, getTestId, ComponentVibeId, useMergeRef } from "@vibe/shared";
import CustomSvgIcon from "./CustomSvgIcon/CustomSvgIcon";
import FontIcon from "./FontIcon/FontIcon";
import useIconProps from "./hooks/useIconProps";
import { type SubIcon, type IconSubComponentProps, type IconType } from "./types";

function renderIcon(Icon: React.FC<IconSubComponentProps>, props: IconSubComponentProps) {
  const dataTestId = props["data-testid"];
  return (
    <Icon
      {...props}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.ICON, props.id)}
      data-vibe={ComponentVibeId.ICON}
    />
  );
}

export interface IconProps extends VibeComponentProps {
  /**
   * The icon name, component, or source URL.
   */
  icon: SubIcon;
  /**
   * The accessible label for the icon.
   */
  label?: string;
  /**
   * The type of the icon: `svg`, `font`, or `src` (external source).
   */
  type?: IconType;
  /**
   * The size of the icon.
   */
  size?: number | string;
  /**
   * If true, removes focus styles from the icon.
   */
  ignoreFocusStyle?: boolean;
  /**
   * The tab index of the icon for keyboard navigation.
   */
  tabindex?: number | string;
  /**
   * If true, hides the icon from screen readers.
   */
  ariaHidden?: boolean;
  /**
   * Inline styles applied to the icon.
   */
  style?: React.CSSProperties;
  /**
   * If true, replaces `fill` property with `currentColor` when using an `src` icon.
   */
  useCurrentColor?: boolean;
  /**
   * Overrides the default color with a custom color.
   */
  customColor?: string;
}

const Icon = forwardRef(
  (
    {
      /**
       * component id
       */
      id,
      className,
      icon = "",
      label,
      type = "svg",
      size = 16,
      ignoreFocusStyle = false,
      tabindex: externalTabIndex,
      ariaHidden,
      style,
      useCurrentColor = false,
      customColor,
      "data-testid": dataTestId
    }: IconProps,
    ref: React.ForwardedRef<HTMLElement>
  ) => {
    const overrideExternalTabIndex = externalTabIndex && +externalTabIndex;
    const { screenReaderAccessProps, onClickCallback, computedClassName, iconRef } = useIconProps({
      label,
      className,
      isDecorationOnly: ariaHidden,
      ignoreFocusStyle,
      externalTabIndex: overrideExternalTabIndex || undefined
    });

    const mergedRef = useMergeRef(ref, iconRef);

    if (!icon) {
      return null;
    }

    const isFunctionType = typeof icon === "function";
    const overrideDataTestId = dataTestId || getTestId(ComponentDefaultTestId.ICON, id);

    if (type === "svg" || isFunctionType || typeof icon === "object") {
      return renderIcon(icon as React.FC<IconSubComponentProps>, {
        id,
        ...screenReaderAccessProps,
        ref: isFunctionType ? undefined : mergedRef,
        size: size.toString(),
        className: computedClassName,
        style,
        "data-testid": overrideDataTestId
      });
    }
    if (type === "src") {
      return (
        <CustomSvgIcon
          id={id}
          src={icon}
          {...screenReaderAccessProps}
          className={cx(computedClassName)}
          onClick={onClickCallback}
          replaceToCurrentColor={useCurrentColor}
          customColor={customColor}
          data-testid={overrideDataTestId}
        />
      );
    }
    return (
      <FontIcon
        id={id}
        {...screenReaderAccessProps}
        className={cx(computedClassName)}
        onClick={onClickCallback}
        ref={mergedRef}
        icon={icon}
        data-testid={overrideDataTestId}
      />
    );
  }
);

export default Icon;
