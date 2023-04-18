import React, { useRef, useCallback, useMemo, forwardRef } from "react";
import cx from "classnames";
import { ColorStyle, contentColors } from "../../../../utils/colors-vars-map";
import ColorUtils from "../../../../utils/colors-utils";
import "./ColorPickerItemComponent.scss";
import Icon from "../../../Icon/Icon";
import Tooltip from "../../../Tooltip/Tooltip";
import Clickable from "../../../Clickable/Clickable";
import { ColorShapes, ColorPickerValueOnly } from "../../ColorPickerConstants";
import { getTestId } from "../../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../../tests/constants";
import { SubIcon, VibeComponent, VibeComponentProps, ElementContent } from "../../../../types";
import { BaseSizes } from "../../../../constants";

export interface ColorPickerItemComponentProps extends VibeComponentProps {
  color: ColorPickerValueOnly;
  onColorClicked: (color: ColorPickerValueOnly) => void;
  colorStyle: ColorStyle;
  shouldRenderIndicatorWithoutBackground: boolean;
  ColorIndicatorIcon: SubIcon;
  SelectedIndicatorIcon: SubIcon;
  isSelected: boolean;
  colorSize: BaseSizes;
  tooltipContent: ElementContent;
  isActive: boolean;
  colorShape: ColorShapes;
  ["data-testid"]?: string;
}

const ColorPickerItemComponent: VibeComponent<ColorPickerItemComponentProps> = forwardRef(
  (
    {
      color,
      onColorClicked,
      colorStyle = ColorStyle.REGULAR,
      shouldRenderIndicatorWithoutBackground,
      ColorIndicatorIcon,
      SelectedIndicatorIcon,
      isSelected,
      colorSize,
      tooltipContent,
      isActive,
      colorShape,
      "data-testid": dataTestId
    },
    _ref
  ) => {
    const isMondayColor = useMemo(() => (contentColors as readonly string[]).includes(color), [color]); // casting to any since color can be one of the system content colors but can also be a custom one
    const colorAsStyle = isMondayColor ? ColorUtils.getMondayColorAsStyle(color, colorStyle) : color;
    const itemRef = useRef<HTMLDivElement>(null);

    const onClick = useCallback(() => onColorClicked(color), [onColorClicked, color]);

    const setHoverColor = (e: React.MouseEvent<HTMLDivElement>) => {
      if (colorStyle === ColorStyle.SELECTED) {
        (e.target as HTMLDivElement).style.background = ColorUtils.getMondayColorAsStyle(color, ColorStyle.REGULAR);
      } else {
        (e.target as HTMLDivElement).style.background = ColorUtils.getMondayColorAsStyle(color, ColorStyle.HOVER);
      }
    };
    const restoreToOriginalColor = (e: React.MouseEvent<HTMLDivElement>) => {
      (e.target as HTMLDivElement).style.background = colorAsStyle;
    };

    const shouldRenderIcon = isSelected || ColorIndicatorIcon;
    const colorIndicatorWrapperStyle = shouldRenderIndicatorWithoutBackground ? { color: colorAsStyle } : {};
    return (
      <Tooltip content={tooltipContent}>
        <li
          className={cx("monday-style-color-item-wrapper", {
            "selected-color": isSelected,
            active: isActive,
            circle: colorShape === ColorShapes.CIRCLE
          })}
          data-testid={dataTestId || getTestId(ComponentDefaultTestId.COLOR_PICKER_ITEM, color)}
        >
          <div className="feedback-indicator" />
          <Clickable
            ref={itemRef}
            ariaLabel={color}
            className={cx("color-item", `color-item-size-${colorSize}`, {
              "color-item-text-mode": shouldRenderIndicatorWithoutBackground
            })}
            style={{ background: shouldRenderIndicatorWithoutBackground ? "transparent" : colorAsStyle }}
            onClick={onClick}
            tabIndex="-1"
            onMouseDown={e => e.preventDefault()} // this is for quill to not lose the selection
            onMouseEnter={setHoverColor}
            onMouseLeave={restoreToOriginalColor}
          >
            <div className="color-indicator-wrapper" style={colorIndicatorWrapperStyle}>
              {shouldRenderIcon && (
                <Icon
                  icon={isSelected ? SelectedIndicatorIcon : ColorIndicatorIcon}
                  className={cx({ "color-icon-white": !shouldRenderIndicatorWithoutBackground })}
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
