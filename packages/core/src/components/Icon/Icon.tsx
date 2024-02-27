import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import cx from "classnames";
import React, { CSSProperties, forwardRef, Ref } from "react";
import useMergeRef from "../../hooks/useMergeRef";
import { IconType } from "./IconConstants";
import CustomSvgIcon from "./CustomSvgIcon/CustomSvgIcon";
import FontIcon from "./FontIcon/FontIcon";
import useIconProps from "./hooks/useIconProps";
import { VibeComponentProps, VibeComponent, MouseEventCallBack, SubIcon, withStaticProps } from "../../types";

// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
const CLICK_NOOP = (_event: React.MouseEvent) => {};

export interface IconSubComponentProps {
  ref?: Ref<HTMLElement>;
  id?: string;
  size?: string | number;
  onClick?: MouseEventCallBack;
  className?: string;
  style?: CSSProperties;
  "data-testid"?: string;
}

function renderIcon(Icon: SubIcon, props: IconSubComponentProps) {
  const dataTestId = props["data-testid"];
  return <Icon {...props} data-testid={dataTestId || getTestId(ComponentDefaultTestId.ICON, props.id)} />;
}

export interface IconProps extends VibeComponentProps {
  // eslint-disable-next-line no-unused-vars
  onClick?: (event: React.MouseEvent) => void;
  /**
   * We support three types of icons - SVG, FONT and SRC (classname) so this prop is either the name of the icon or the component
   */
  icon: SubIcon;
  /**
   * Is icon is a button
   */
  clickable?: boolean;
  /**
mo   * Icon aria label [aria label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label)
   */
  iconLabel?: string;
  /**
   *  The type of the component - svg, font or custom svg (using [`react-inlinesvg`](https://github.com/gilbarbara/react-inlinesvg#readme))
   */
  iconType?: IconType;
  /**
   * Size for font icon
   */
  iconSize?: number | string;
  /**
   * Remove focus style
   */
  ignoreFocusStyle?: boolean;
  tabindex?: number | string;
  /**
   * Hide icon asset from screen reader. No need to set value for this prop when `clickable` is false
   */
  ariaHidden?: boolean;
  style?: React.CSSProperties;
  /**
   * When using svg from src (Icon.type.SRC) this boolean will transform the "fill" property to "currentColor"
   */
  useCurrentColor?: boolean;
  /**
   * Override the default color with a custom one
   */
  customColor?: string;
}

const Icon: VibeComponent<IconProps, HTMLElement> & { type?: typeof IconType } = forwardRef(
  (
    {
      /**
       * component id
       */
      id,
      onClick = CLICK_NOOP,
      className,
      icon = "",
      clickable = true,
      iconLabel,
      iconType = IconType.SVG,
      iconSize = 16,
      ignoreFocusStyle = false,
      tabindex: externalTabIndex,
      ariaHidden,
      style,
      useCurrentColor = false,
      customColor,
      "data-testid": dataTestId
    },
    ref
  ) => {
    const overrideExternalTabIndex = externalTabIndex && +externalTabIndex;
    const { screenReaderAccessProps, onClickCallback, computedClassName, iconRef } = useIconProps({
      onClick,
      iconLabel,
      clickable,
      className,
      isDecorationOnly: ariaHidden,
      ignoreFocusStyle,
      externalTabIndex: overrideExternalTabIndex
    });

    const mergedRef = useMergeRef(ref, iconRef);

    if (!icon) {
      return null;
    }

    // Replace in major version change with more accurate check
    const isFunctionType = typeof icon === "function";

    const overrideDataTestId = dataTestId || getTestId(ComponentDefaultTestId.ICON, id);

    // Replace in major version change with more accurate check
    if (iconType === IconType.SVG || isFunctionType || typeof icon === "object") {
      return renderIcon(icon, {
        id,
        ...screenReaderAccessProps,
        ref: isFunctionType ? undefined : mergedRef,
        size: iconSize.toString(),
        onClick,
        className: computedClassName,
        style,
        "data-testid": overrideDataTestId
      });
    }
    if (iconType === IconType.SRC) {
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

export default withStaticProps(Icon, {
  type: IconType
});
