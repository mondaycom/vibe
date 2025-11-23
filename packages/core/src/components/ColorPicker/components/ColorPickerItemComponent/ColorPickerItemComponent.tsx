import { camelCase } from "es-toolkit";
import { getStyle } from "../../../../helpers/typesciptCssModulesHelper";
import cx from "classnames";
import React, { useRef, useCallback, useMemo, forwardRef, useEffect } from "react";
import { contentColors } from "../../../../utils/colors-vars-map";
import ColorUtils from "../../../../utils/colors-utils";
import { Icon } from "@vibe/icon";
import Tooltip from "../../../Tooltip/Tooltip";
import { Clickable } from "@vibe/clickable";
import { type ColorPickerValueOnly } from "../../ColorPicker.types";
import { type ColorShapes, type ColorPickerSizes } from "../../ColorPicker.types";
import { getTestId } from "../../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../../tests/constants";
import { type VibeComponentProps, type ElementContent, type ColorStyle } from "../../../../types";
import { type SubIcon } from "@vibe/icon";
import styles from "./ColorPickerItemComponent.module.scss";

export interface ColorPickerItemComponentProps extends VibeComponentProps {
  /**
   * The color value of the item.
   */
  color: ColorPickerValueOnly;
  /**
   * Callback fired when the color is clicked.
   */
  onColorClicked: (color: ColorPickerValueOnly) => void;
  /**
   * The style applied to the color.
   */
  colorStyle: ColorStyle;
  /**
   * If true, renders the color indicator without a background.
   */
  shouldRenderIndicatorWithoutBackground: boolean;
  /**
   * Icon displayed inside the color item.
   */
  ColorIndicatorIcon: SubIcon;
  /**
   * Icon displayed when the color is selected.
   */
  SelectedIndicatorIcon: SubIcon;
  /**
   * If true, the color is marked as selected.
   */
  isSelected: boolean;
  /**
   * The size of the color item.
   */
  colorSize: ColorPickerSizes;
  /**
   * Tooltip content for the color item.
   */
  tooltipContent: ElementContent;
  /**
   * If true, the color item is currently active.
   */
  isActive: boolean;
  /**
   * The shape of the color item.
   */
  colorShape: ColorShapes;
}

const ColorPickerItemComponent = forwardRef(
  (
    {
      color,
      onColorClicked,
      colorStyle = "regular",
      shouldRenderIndicatorWithoutBackground,
      ColorIndicatorIcon,
      SelectedIndicatorIcon = ColorIndicatorIcon,
      isSelected,
      colorSize,
      tooltipContent,
      isActive,
      colorShape,
      "data-testid": dataTestId
    }: ColorPickerItemComponentProps,
    _ref: React.ForwardedRef<HTMLElement>
  ) => {
    const isMondayColor = useMemo(() => (contentColors as readonly string[]).includes(color), [color]); // casting to any since color can be one of the system content colors but can also be a custom one
    const colorAsStyle = isMondayColor ? ColorUtils.getMondayColorAsStyle(color, colorStyle) : color;
    const itemRef = useRef<HTMLDivElement>(null);

    const onClick = useCallback(() => onColorClicked(color), [onColorClicked, color]);

    useEffect(() => {
      if (!itemRef?.current || shouldRenderIndicatorWithoutBackground || !isMondayColor) return;
      const item = itemRef.current;
      const setHoverColor = (e: MouseEvent) => {
        if (colorStyle === "selected") {
          (e.target as HTMLDivElement).style.background = ColorUtils.getMondayColorAsStyle(color, "regular");
        } else {
          (e.target as HTMLDivElement).style.background = ColorUtils.getMondayColorAsStyle(color, "hover");
        }
      };
      const restoreToOriginalColor = (e: MouseEvent) => {
        (e.target as HTMLDivElement).style.background = colorAsStyle;
      };
      item.addEventListener("mouseenter", setHoverColor, false);
      item.addEventListener("mouseleave", restoreToOriginalColor, false);

      return () => {
        item.removeEventListener("mouseenter", setHoverColor, false);
        item.removeEventListener("mouseleave", restoreToOriginalColor, false);
      };
    }, [color, colorAsStyle, colorStyle, isMondayColor, itemRef, shouldRenderIndicatorWithoutBackground]);

    const shouldRenderIcon = isSelected || ColorIndicatorIcon;
    const colorIndicatorWrapperStyle = shouldRenderIndicatorWithoutBackground ? { color: colorAsStyle } : {};
    return (
      <Tooltip content={tooltipContent}>
        <li
          className={cx(styles.itemWrapper, {
            [styles.selectedColor]: isSelected,
            [styles.active]: isActive,
            [styles.circle]: colorShape === "circle"
          })}
          data-testid={dataTestId || getTestId(ComponentDefaultTestId.COLOR_PICKER_ITEM, color)}
        >
          <div className={cx(styles.feedbackIndicator)} />
          <Clickable
            ref={itemRef}
            ariaLabel={color}
            className={cx(styles.colorItem, getStyle(styles, camelCase("color-item-size-" + colorSize)), {
              [styles.colorItemTextMode]: shouldRenderIndicatorWithoutBackground
            })}
            style={{ background: shouldRenderIndicatorWithoutBackground ? "transparent" : colorAsStyle }}
            onClick={onClick}
            tabIndex="-1"
            onMouseDown={e => e.preventDefault()} // this is for quill to not lose the selection
          >
            <div className={cx(styles.colorIndicatorWrapper)} style={colorIndicatorWrapperStyle}>
              {shouldRenderIcon && (
                <Icon
                  icon={isSelected ? SelectedIndicatorIcon : ColorIndicatorIcon}
                  className={cx({
                    [styles.colorIconWhite]: !shouldRenderIndicatorWithoutBackground
                  })}
                  ignoreFocusStyle
                />
              )}
            </div>
          </Clickable>
        </li>
      </Tooltip>
    );
  }
);

export default ColorPickerItemComponent;
