import { camelCase } from "lodash-es";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import cx from "classnames";
import { DialogPosition, Sizes } from "../../constants";
import React, { CSSProperties, useLayoutEffect } from "react";
import Tooltip from "../../components/Tooltip/Tooltip";
import useIsOverflowing from "../../hooks/useIsOverflowing/useIsOverflowing";
import useStyle from "../../hooks/useStyle";
import useRefWithCallback from "../../hooks/useRefWithCallback";
import TextWithHighlight from "../TextWithHighlight/TextWithHighlight";
import { HeadingSizes, HeadingTypes } from "./LegacyHeadingConstants";
import { withStaticProps, VibeComponentProps } from "../../types";
import styles from "./LegacyHeading.module.scss";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";

export interface HeadingProps extends VibeComponentProps {
  type?: HeadingTypes;
  ariaLabel?: string;
  value?: string;
  ellipsis?: boolean;
  ellipsisMaxLines?: number;
  suggestEditOnHover?: boolean;
  /** Tooltip to show when no overflow */
  nonEllipsisTooltip?: string;
  size?: Sizes;
  highlightTerm?: string;
  customColor?: string;
  style?: CSSProperties;
  tooltipPosition?: DialogPosition;
}

const LegacyHeading: React.FC<HeadingProps> & {
  sizes?: typeof Sizes;
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
    className,
    getStyle(styles, camelCase("element-type-" + type)),
    getStyle(styles, camelCase("size-" + size)),
    {
      [styles.multiLineEllipsis]: ellipsis && ellipsisMaxLines > 1,
      [styles.singleLineEllipsis]: ellipsis && ellipsisMaxLines <= 1,
      [styles.suggestEditOnHover]: suggestEditOnHover
    }
  );
  const Element = React.createElement(
    type,
    {
      className: classNames,
      "aria-label": ariaLabel,
      id,
      "data-testid": dataTestId || getTestId(ComponentDefaultTestId.HEADING, id),
      ref: setRef,
      style: finalStyle
    },
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

  const isOverflowing = useIsOverflowing({ ref: ellipsis ? componentRef : null, ignoreHeightOverflow: true });

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
        <Tooltip content={tooltipContent} position={tooltipPosition}>
          {Element}
        </Tooltip>
      );
    }
  }
  return Element;
};

export default withStaticProps(LegacyHeading, {
  types: HeadingTypes,
  sizes: Sizes
});
