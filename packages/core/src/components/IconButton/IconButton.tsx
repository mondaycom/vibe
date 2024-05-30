import React, { AriaAttributes, forwardRef, Fragment, useMemo, useRef } from "react";
import cx from "classnames";
import { noop as NOOP } from "lodash-es";
import useMergeRef from "../../hooks/useMergeRef";
import Tooltip, { TooltipProps } from "../Tooltip/Tooltip";
import Icon from "../Icon/Icon";
import AddSmall from "../Icon/Icons/components/AddSmall";
import { getWidthHeight, Size } from "./services/IconButton-helpers";
import { SubIcon, VibeComponent, VibeComponentProps, withStaticProps } from "../../types";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import Button from "../Button/Button";
import { BUTTON_ICON_SIZE, ButtonColor, ButtonType } from "../Button/ButtonConstants";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import styles from "./IconButton.module.scss";

export interface IconButtonProps extends VibeComponentProps {
  /**
   * id to be added to the element
   */
  id?: string;
  /**
   * callback function when clicking the icon button
   */
  onClick?: (event: React.MouseEvent) => void;
  /**
   * the class name of the button wrapper
   */
  wrapperClassName?: string;
  /**
   * the class name of the button icon
   */
  iconClassName?: string;
  /**
   * Icon to be rendered
   */
  icon?: SubIcon;
  /**
   * element id to describe the button accordingly
   * */
  ariaLabeledBy?: string;
  /**
   * a11y property to be added, used for screen reader to know what kind of button it is
   */
  ariaLabel?: string;
  /**
   * aria for a button popup
   */
  ariaHasPopup?: React.HTMLProps<HTMLButtonElement>["aria-haspopup"];
  /**
   * a11y property to be added, used for screen reader to know if the button is expanded
   */
  ariaExpanded?: boolean;
  /**
   * aria controls - receives id for the controlled region
   */
  ariaControls?: string;
  "aria-describedby"?: AriaAttributes["aria-describedby"];
  /**
   * a11y property to be added, used for screen reader to know if the button is hidden
   */
  "aria-hidden"?: AriaAttributes["aria-hidden"];
  /**
   * Size of the icon
   */
  size?: Size;
  /**
   * Whether the tooltip should be displayed or not
   */
  hideTooltip?: boolean;
  /**
   * Props for Tooltip component
   */
  tooltipProps?: Partial<TooltipProps>;
  /**
   * Tooltip wraps the button icon, it will display in the tooltip, if not present the aria label will be shown
   */
  tooltipContent?: string;
  /**
   * Kind of button - like <Button />
   */
  kind?: ButtonType;
  active?: boolean;
  /** The button's color  */
  color?: ButtonColor;
  /**
   * disabled state
   */
  disabled?: boolean;
  /**
   * if disabled - this will be shown in the tooltip
   */
  disabledReason?: string;
  /**
   * @deprecated - use "data-testid" instead
   */
  dataTestId?: string;
  /** Change the focus indicator from around the button to within it */
  insetFocus?: boolean;
  /** Specifies the tab order of an element */
  tabIndex?: number;
  /** Show a loader instead of the icon  */
  loading?: boolean;
}

const IconButton: VibeComponent<IconButtonProps> & {
  sizes?: typeof Button.sizes;
  kinds?: typeof Button.kinds;
  colors?: typeof Button.colors;
} = forwardRef(
  (
    {
      className,
      wrapperClassName,
      iconClassName,
      id,
      icon = AddSmall,
      size = IconButton.sizes.MEDIUM,
      tooltipProps = {} as TooltipProps,
      tooltipContent,
      ariaLabeledBy,
      ariaLabel,
      ariaHasPopup,
      ariaExpanded,
      ariaControls,
      "aria-describedby": ariaDescribedBy,
      "aria-hidden": ariaHidden,
      hideTooltip = false,
      kind = IconButton.kinds.TERTIARY,
      active,
      disabled = false,
      disabledReason,
      onClick = NOOP,
      color,
      dataTestId: backwardCompatabilityDataTestId,
      "data-testid": dataTestId,
      insetFocus = false,
      tabIndex,
      loading = false
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);

    const overrideDataTestId = backwardCompatibilityForProperties([dataTestId, backwardCompatabilityDataTestId]);
    const overrideTooltipContent = useMemo(
      () => tooltipProps?.content || tooltipContent,
      [tooltipProps?.content, tooltipContent]
    );

    const buttonAriaLabel = useMemo(() => {
      if (ariaLabel) return ariaLabel;
      if (typeof overrideTooltipContent === "string") return overrideTooltipContent;
      return undefined;
    }, [ariaLabel, overrideTooltipContent]);

    const iconSize = useMemo(() => {
      switch (size) {
        case IconButton.sizes.XXS:
        case IconButton.sizes.XS:
          return 16;
        case IconButton.sizes.SMALL:
        case IconButton.sizes.MEDIUM:
        case IconButton.sizes.LARGE:
          return BUTTON_ICON_SIZE;
        default:
          return 24;
      }
    }, [size]);

    const overrideStyle = useMemo(() => {
      let style = {
        justifyContent: "center",
        alignItems: "center",
        padding: 0
      } as React.CSSProperties;

      if (size) {
        style = { ...style, ...getWidthHeight(size) };
      }
      return style;
    }, [size]);

    const calculatedTooltipContent = useMemo(() => {
      if (hideTooltip) return null;
      if (disabled && disabledReason) return disabledReason;
      if (overrideTooltipContent) return overrideTooltipContent as never;
      return ariaLabel;
    }, [hideTooltip, disabled, disabledReason, overrideTooltipContent, ariaLabel]);

    const IconButtonWrapper = wrapperClassName ? "div" : Fragment;
    const iconButtonWrapperProps = useMemo(() => {
      return wrapperClassName ? { className: cx(wrapperClassName, styles.wrapper) } : {};
    }, [wrapperClassName]);

    return (
      <IconButtonWrapper {...iconButtonWrapperProps}>
        <Tooltip
          {...tooltipProps}
          content={calculatedTooltipContent}
          referenceWrapperClassName={styles.referenceWrapper}
        >
          <Button
            onClick={onClick}
            disabled={disabled}
            color={color}
            kind={kind}
            ariaLabeledBy={ariaLabeledBy}
            ariaLabel={buttonAriaLabel}
            ariaHasPopup={ariaHasPopup}
            ariaExpanded={ariaExpanded}
            ariaControls={ariaControls}
            aria-describedby={ariaDescribedBy}
            aria-hidden={ariaHidden}
            ref={mergedRef}
            id={id}
            data-testid={overrideDataTestId || getTestId(ComponentDefaultTestId.ICON_BUTTON, id)}
            noSidePadding
            active={active}
            className={className}
            style={overrideStyle}
            insetFocus={insetFocus}
            tabIndex={tabIndex}
            loading={loading}
            loaderClassName={cx(styles.loader, getStyle(styles, size))}
          >
            <Icon
              icon={icon}
              iconType={Icon.type.SVG}
              iconSize={iconSize}
              ignoreFocusStyle
              className={iconClassName}
              clickable={false}
            />
          </Button>
        </Tooltip>
      </IconButtonWrapper>
    );
  }
);

export default withStaticProps(IconButton, {
  sizes: Button.sizes,
  kinds: Button.kinds,
  colors: Button.colors
});
