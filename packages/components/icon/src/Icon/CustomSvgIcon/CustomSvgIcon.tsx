import React, { type FunctionComponent, useCallback, type AriaRole, type Ref } from "react";
import SVG from "react-inlinesvg";
import {
  ComponentDefaultTestId,
  ComponentVibeId,
  getTestId,
  useIsMounted,
  type VibeComponentProps
} from "@vibe/shared";
import useIconScreenReaderAccessProps from "../hooks/useIconScreenReaderAccessProps";

function modifySvgCode(svg: string, color = "currentColor") {
  return svg.replace(/fill=".*?"/g, `fill="${color}"`);
}

export interface CustomSvgIconProps extends VibeComponentProps {
  /**
   * Callback fired when the icon is clicked.
   */
  onClick?: (event: React.MouseEvent) => void;
  /**
   * The source URL or object of the SVG icon.
   */
  src: string | object;
  /**
   * The accessible label for the icon.
   */
  ariaLabel?: string;
  /**
   * The tab index of the icon for keyboard navigation.
   */
  tabIndex?: number;
  /**
   * The ARIA role of the icon.
   */
  role?: AriaRole;
  /**
   * If true, hides the icon from screen readers.
   */
  ariaHidden?: boolean;
  /**
   * If true, makes the icon clickable.
   */
  clickable?: boolean;
  /**
   * If true, replaces the `fill` attribute in the SVG with `currentColor`.
   */
  replaceToCurrentColor?: boolean;
  /**
   * Overrides the default color of the icon.
   */
  customColor?: string;
  /**
   * Reference to the SVG element.
   */
  ref?: Ref<SVGElement>;
}

const CustomSvgIcon: FunctionComponent<CustomSvgIconProps> = ({
  className,
  ref,
  src,
  onClick,
  clickable,
  ariaLabel,
  ariaHidden,
  replaceToCurrentColor = false,
  customColor,
  id,
  "data-testid": dataTestId
}) => {
  const screenReaderAccessProps = useIconScreenReaderAccessProps({
    isClickable: clickable,
    label: ariaLabel,
    isDecorationOnly: ariaHidden
  });

  const isMounted = useIsMounted();

  const svgProcessor = useCallback(
    (svg: string) => {
      if (replaceToCurrentColor) return modifySvgCode(svg, "currentColor");
      if (customColor) return modifySvgCode(svg, customColor);
      return svg;
    },
    [replaceToCurrentColor, customColor]
  );

  if (typeof src !== "string") return null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const SVGComponent = (SVG.default || SVG) as React.FC<any>; // fix esm issue

  const PlaceHolder = <div className={className} id={id}></div>;

  if (!isMounted) {
    // placeholder for server side rendering
    return PlaceHolder;
  }
  return (
    <SVGComponent
      innerRef={ref}
      {...screenReaderAccessProps}
      onClick={onClick}
      loader={PlaceHolder} // avoid flickering
      src={src}
      className={className}
      preProcessor={svgProcessor}
      id={id}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.SVG_ICON, id)}
      data-vibe={ComponentVibeId.ICON}
    >
      {PlaceHolder}
    </SVGComponent>
  );
};

export default CustomSvgIcon;
