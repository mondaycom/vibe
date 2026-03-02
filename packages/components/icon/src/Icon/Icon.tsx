import React, { forwardRef } from "react";
import { type VibeComponentProps, ComponentDefaultTestId, getTestId, ComponentVibeId, useMergeRef } from "@vibe/shared";
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

export interface IconProps extends VibeComponentProps {
  /**
   * The icon component to render. Must be a React component (e.g. from `@vibe/icons`).
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
}

const Icon = forwardRef(
  (
    {
      /**
       * component id
       */
      id,
      className,
      icon,
      label,
      size = 16,
      ignoreFocusStyle = false,
      tabindex: externalTabIndex,
      ariaHidden,
      style,
      "data-testid": dataTestId
    }: IconProps,
    ref: React.ForwardedRef<HTMLElement>
  ) => {
    const overrideExternalTabIndex = externalTabIndex && +externalTabIndex;
    const { screenReaderAccessProps, computedClassName, iconRef } = useIconProps({
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
);

export default Icon;
