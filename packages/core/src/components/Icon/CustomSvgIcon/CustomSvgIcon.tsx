import React, { FunctionComponent, useCallback, AriaRole, Ref } from "react";
import SVG from "react-inlinesvg";
import useIconScreenReaderAccessProps from "../../../hooks/useIconScreenReaderAccessProps";
import VibeComponentProps from "../../../types/VibeComponentProps";
import { ComponentDefaultTestId } from "../../../tests/constants";
import { getTestId } from "../../../tests/test-ids-utils";
import { useIsMounted } from "../../../hooks/ssr/useIsMounted";

function modifySvgCode(svg: string, color = "currentColor") {
  return svg.replace(/fill=".*?"/g, `fill="${color}"`);
}

export interface CustomSvgIconProps extends VibeComponentProps {
  onClick?: (event: React.MouseEvent) => void;
  src: string | object;
  ariaLabel?: string;
  tabIndex?: number;
  role?: AriaRole;
  ariaHidden?: boolean;
  clickable?: boolean;
  replaceToCurrentColor?: boolean;
  customColor?: string;
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
  const SVGComponent = SVG as React.FC<any>;

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
    >
      {PlaceHolder}
    </SVGComponent>
  );
};

export default CustomSvgIcon;
