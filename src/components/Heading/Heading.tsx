import { DialogPosition } from "../../constants/positions";
import React, { CSSProperties, useLayoutEffect } from "react";
import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import cx from "classnames";
import Tooltip from "../../components/Tooltip/Tooltip";
import useIsOverflowing from "../../hooks/useIsOverflowing";
import useStyle from "../../hooks/useStyle";
import useRefWithCallback from "../../hooks/useRefWithCallback";
import TextWithHighlight from "../TextWithHighlight/TextWithHighlight";
import { HeadingSizes, HeadingTypes } from "./HeadingConstants";
import VibeComponentProps from "../../types/VibeComponentProps";
import "./HeadingGlobal.scss";
import styles from "./Heading.module.scss";

export interface HeadingProps extends VibeComponentProps {
  type?: HeadingTypes;
  ariaLabel?: string;
  value?: string;
  ellipsis?: boolean;
  ellipsisMaxLines?: number;
  suggestEditOnHover?: boolean;
  /** Tooltip to show when no overflow */
  nonEllipsisTooltip?: string;
  size?: typeof HeadingSizes;
  highlightTerm?: string;
  customColor?: string;
  style?: CSSProperties;
  tooltipPosition?: DialogPosition;
}

const Heading: React.FC<HeadingProps> & {
  sizes?: typeof HeadingSizes;
  types?: typeof HeadingTypes;
} = ({
  className,
  value = "",
  type = HeadingTypes.h1,
  size = HeadingSizes.LARGE,
  ariaLabel = "",
  id,
  customColor,
  ellipsis = true,
  ellipsisMaxLines = 1,
  style,
  tooltipPosition,
  highlightTerm = null,
  suggestEditOnHover = false,
  nonEllipsisTooltip = null,
  "data-testid": dataTestId
}) => {
  const [componentRef, setRef] = useRefWithCallback(node =>
    node.style.setProperty("--heading-clamp-lines", ellipsisMaxLines.toString())
  );
  const finalStyle = useStyle(style, { color: customColor });
  const classNames = cx(
    styles.headingComponent,
    "heading-component",
    className,
    `element-type-${type}`,
    `size-${size}`,
    {
      [styles.multiLineEllipsis]: ellipsis && ellipsisMaxLines > 1,
      ["multi-line-ellipsis"]: ellipsis && ellipsisMaxLines > 1,
      [styles.singleLineEllipsis]: ellipsis && ellipsisMaxLines <= 1,
      ["single-line-ellipsis"]: ellipsis && ellipsisMaxLines <= 1,
      [styles.suggestEditOnHover]: suggestEditOnHover,
      ["suggest-edit-on-hover"]: suggestEditOnHover
    }
  );

  const Element = React.createElement(
    type,
    { className: classNames, "aria-label": ariaLabel, id, ref: setRef, style: finalStyle },
    highlightTerm ? (
      <TextWithHighlight
        highlightTerm={highlightTerm}
        text={value}
        linesToClamp={ellipsisMaxLines}
        useEllipsis={ellipsis}
        nonEllipsisTooltip={nonEllipsisTooltip}
        tooltipPosition={tooltipPosition}
        data-testid={dataTestId || getTestId(ELEMENT_TYPES.HEADING, id)}
      />
    ) : (
      value
    )
  );

  const isOverflowing = useIsOverflowing({ ref: ellipsis ? componentRef : null });

  useLayoutEffect(() => {
    if (componentRef.current) {
      componentRef.current.style.setProperty("--heading-clamp-lines", ellipsisMaxLines?.toString());
    }
  }, [componentRef, ellipsisMaxLines, isOverflowing]);

  // When using highlight term - use tooltip there
  if (!highlightTerm) {
    if (isOverflowing || nonEllipsisTooltip) {
      const tooltipContent = isOverflowing ? value : nonEllipsisTooltip;
      return (
        <Tooltip
          content={tooltipContent}
          position={tooltipPosition}
          data-testid={dataTestId || getTestId(ELEMENT_TYPES.HEADING, id)}
        >
          {Element}
        </Tooltip>
      );
    }
  }
  return Element;
};

Object.assign(Heading, {
  types: HeadingTypes,
  sizes: HeadingSizes
});

export default Heading;
