import { SIZES } from "../../constants/sizes";
import React, { useLayoutEffect } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Tooltip from "../../components/Tooltip/Tooltip";
import useIsOverflowing from "../../hooks/useIsOverflowing";
import useStyle from "../../hooks/useStyle";
import useRefWithCallback from "../../hooks/useRefWithCallback";
import TextWithHighlight from "../../components/TextWithHighlight/TextWithHighlight";
import { TYPES } from "./HeadingConstants";
import "./Heading.scss";

const Heading = ({
  className,
  value,
  type,
  size,
  ariaLabel,
  id,
  customColor,
  ellipsis,
  ellipsisMaxLines,
  style,
  tooltipPosition,
  highlightTerm,
  suggestEditOnHover,
  brandFont,
  nonEllipsisTooltip // tooltip to show when no overflow
}) => {
  const [componentRef, setRef] = useRefWithCallback(node =>
    node.style.setProperty("--heading-clamp-lines", ellipsisMaxLines)
  );
  const finalStyle = useStyle(style, { color: customColor });
  const classNames = cx("heading-component", className, `element-type-${type}`, `size-${size}`, {
    "multi-line-ellipsis": ellipsis && ellipsisMaxLines > 1,
    "single-line-ellipsis": ellipsis && ellipsisMaxLines <= 1,
    "suggest-edit-on-hover": suggestEditOnHover,
    "brand-font": type === TYPES.h1 && brandFont
  });
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
      />
    ) : (
      value
    )
  );

  const isOverflowing = useIsOverflowing({ ref: ellipsis && componentRef });

  useLayoutEffect(() => {
    if (componentRef.current) {
      componentRef.current.style.setProperty("--heading-clamp-lines", ellipsisMaxLines);
    }
  }, [componentRef, ellipsisMaxLines, isOverflowing]);

  // When using highlight term - use tooltip there
  if (!highlightTerm) {
    if (isOverflowing || nonEllipsisTooltip) {
      const tooltipContent = isOverflowing ? value : nonEllipsisTooltip;
      return (
        <Tooltip content={tooltipContent} position={tooltipPosition}>
          {Element}
        </Tooltip>
      );
    }
  }
  return Element;
};

Heading.types = TYPES;
Heading.sizes = SIZES;

Heading.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf([
    Heading.types.h1,
    Heading.types.h2,
    Heading.types.h3,
    Heading.types.h4,
    Heading.types.h5,
    Heading.types.h6
  ]),
  ariaLabel: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  ellipsis: PropTypes.bool,
  ellipsisMaxLines: PropTypes.number,
  suggestEditOnHover: PropTypes.bool,
  nonEllipsisTooltip: PropTypes.string,
  size: PropTypes.oneOf([Heading.sizes.SMALL, Heading.sizes.MEDIUM, Heading.sizes.LARGE]),
  highlightTerm: PropTypes.string,
  customColor: PropTypes.string,
  /** Custom font flag, use to enable new font family on H1 headers */
  brandFont: PropTypes.bool
};

Heading.defaultProps = {
  className: "",
  type: TYPES.h1,
  ariaLabel: "",
  value: "",
  id: "",
  ellipsis: true,
  ellipsisMaxLines: 1,
  suggestEditOnHover: false,
  nonEllipsisTooltip: null,
  size: SIZES.LARGE,
  highlightTerm: null,
  brandFont: false,
  customColor: undefined
};

Heading.types = TYPES;
Heading.sizes = SIZES;

export default Heading;
