import { camelCase } from "lodash";
import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import cx from "classnames";
import { SIZES } from "../../constants/sizes";
import React, { useLayoutEffect } from "react";
import PropTypes from "prop-types";
import Tooltip from "../../components/Tooltip/Tooltip";
import useIsOverflowing from "../../hooks/useIsOverflowing";
import useStyle from "../../hooks/useStyle";
import useRefWithCallback from "../../hooks/useRefWithCallback";
import TextWithHighlight from "../../components/TextWithHighlight/TextWithHighlight";
import { TYPES } from "./HeadingConstants";
import styles from "./Heading.module.scss";

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
  // tooltip to show when no overflow
  nonEllipsisTooltip,
  "data-testId": dataTestId
}) => {
  const [componentRef, setRef] = useRefWithCallback(node =>
    node.style.setProperty("--heading-clamp-lines", ellipsisMaxLines)
  );
  const finalStyle = useStyle(style, { color: customColor });
  const classNames = cx(
    styles.headingComponent,
    "heading-component",
    className,
    styles[`${camelCase("element-type-" + type)}`],
    `element-type-${type}`,
    styles[`${camelCase("size-" + size)}`],
    `size-${size}`,
    {
      [styles.multiLineEllipsis]: ellipsis && ellipsisMaxLines > 1,
      ["multi-line-ellipsis"]: ellipsis && ellipsisMaxLines > 1,
      [styles.singleLineEllipsis]: ellipsis && ellipsisMaxLines <= 1,
      ["single-line-ellipsis"]: ellipsis && ellipsisMaxLines <= 1,
      [styles.suggestEditOnHover]: suggestEditOnHover,
      ["suggest-edit-on-hover"]: suggestEditOnHover,
      "brand-font": type === TYPES.h1 && brandFont
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
