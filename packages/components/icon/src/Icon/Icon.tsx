import cx from "classnames";
import React, { forwardRef } from "react";
import { type VibeComponentProps, ComponentDefaultTestId, getTestId, ComponentVibeId, useMergeRef } from "@vibe/shared";
import CustomSvgIcon from "./CustomSvgIcon/CustomSvgIcon";
import FontIcon from "./FontIcon/FontIcon";
import useIconProps from "./hooks/useIconProps";
import { type SubIcon, type IconSubComponentProps } from "./types";

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

function isSrcIcon(icon: string): boolean {
  return icon.startsWith("http://") || icon.startsWith("https://") || icon.startsWith("data:");
}

export interface IconProps extends VibeComponentProps {
  /**
   * The icon to render. Can be:
   * - A React component (e.g. from `@vibe/icons`) — rendered as an SVG icon
   * - A URL string (http/https/data) — rendered via `CustomSvgIcon`
   * - A CSS class string (e.g. `"fa fa-star"`) — rendered via `FontIcon`
   *
   * The icon type is automatically detected from the value.
   */
  icon: SubIcon;
  /**
   * The accessible label for the icon.
   */
  label?: string;
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
   * If true, replaces `fill` property with `currentColor` when using a URL-based icon.
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

    const overrideDataTestId = dataTestId || getTestId(ComponentDefaultTestId.ICON, id);

    // Auto-detect icon type from value
    if (typeof icon === "function" || typeof icon === "object") {
      return renderIcon(icon as React.FC<IconSubComponentProps>, {
        id,
        ...screenReaderAccessProps,
        ref: typeof icon === "function" ? undefined : mergedRef,
        size: size.toString(),
        className: computedClassName,
        style,
        "data-testid": overrideDataTestId
      });
    }

    if (typeof icon === "string" && isSrcIcon(icon)) {
      return (
        <CustomSvgIcon
          id={id}
          src={icon}
          {...screenReaderAccessProps}
          className={cx(computedClassName)}
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
