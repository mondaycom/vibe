import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import cx from "classnames";
import React, { type CSSProperties, forwardRef, type Ref } from "react";
import useMergeRef from "../../hooks/useMergeRef";
import { IconType as IconTypeEnum } from "./IconConstants";
import { type IconType } from "./Icon.types";
import CustomSvgIcon from "./CustomSvgIcon/CustomSvgIcon";
import FontIcon from "./FontIcon/FontIcon";
import useIconProps from "./hooks/useIconProps";
import { type SubIcon, withStaticProps } from "../../types";
import { type VibeComponentProps } from "@vibe/shared";
import { ComponentVibeId } from "../../tests/constants";

export interface IconSubComponentProps {
  /**
   * Ref for the icon component.
   */
  ref?: Ref<HTMLElement>;
  /**
   * The ID of the icon component.
   */
  id?: string;
  /**
   * The size of the icon.
   */
  size?: string | number;
  /**
   * Class name applied to the icon.
   */
  className?: string;
  /**
   * Inline styles applied to the icon.
   */
  style?: CSSProperties;
  /**
   * Test ID for testing purposes.
   */
  "data-testid"?: string;
}

function renderIcon(Icon: SubIcon, props: IconSubComponentProps) {
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
  iconLabel?: string;
  /**
   * The type of the icon: `svg`, `font`, or `src` (external source).
   */
  iconType?: IconType;
  /**
   * The size of the icon.
   */
  iconSize?: number | string;
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
      iconLabel,
      iconType = "svg",
      iconSize = 16,
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
      iconLabel,
      className,
      isDecorationOnly: ariaHidden,
      ignoreFocusStyle,
      externalTabIndex: overrideExternalTabIndex
    });

    const mergedRef = useMergeRef(ref, iconRef);

    if (!icon) {
      return null;
    }

    const isFunctionType = typeof icon === "function";
    const overrideDataTestId = dataTestId || getTestId(ComponentDefaultTestId.ICON, id);

    if (iconType === "svg" || isFunctionType || typeof icon === "object") {
      return renderIcon(icon, {
        id,
        ...screenReaderAccessProps,
        ref: isFunctionType ? undefined : mergedRef,
        size: iconSize.toString(),
        className: computedClassName,
        style,
        "data-testid": overrideDataTestId
      });
    }
    if (iconType === "src") {
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

interface IconStaticProps {
  type: typeof IconTypeEnum;
}

export default withStaticProps<IconProps, IconStaticProps>(Icon, {
  type: IconTypeEnum
});
