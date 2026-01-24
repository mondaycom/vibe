import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import cx from "classnames";
import React, { forwardRef, useMemo, useRef } from "react";
import { Tooltip, type TooltipProps } from "@vibe/tooltip";
import { useIsOverflowing } from "@vibe/hooks";
import useIsomorphicLayoutEffect from "../../hooks/ssr/useIsomorphicLayoutEffect";
import useMergeRef from "../../hooks/useMergeRef";
import type VibeComponentProps from "../../types/VibeComponentProps";
import styles from "./TextWithHighlight.module.scss";
import { type TooltipPositions } from "@vibe/tooltip";

const getTextPart = (
  text: string,
  key: number,
  shouldHighlight: boolean,
  wrappingTextTag: keyof JSX.IntrinsicElements = "em",
  wrappingElementClassName: string
) => {
  const WrappingElement = wrappingTextTag;
  if (shouldHighlight) {
    return (
      <WrappingElement className={cx(styles.highlightText, wrappingElementClassName)} key={key}>
        {text}
      </WrappingElement>
    );
  }
  return <span key={key}>{text}</span>;
};

export interface TextWithHighlightProps extends VibeComponentProps {
  /**
   * The text content to display.
   */
  text?: string;
  /**
   * The term to highlight within the text.
   */
  highlightTerm?: string;
  /**
   * The maximum number of highlighted terms allowed.
   */
  limit?: number;
  /**
   * If true, the highlight search is case-insensitive.
   */
  ignoreCase?: boolean;
  /**
   * If true, truncates overflowing text with an ellipsis.
   */
  useEllipsis?: boolean;
  /**
   * If true, allows splitting the highlight term into separate words.
   */
  allowTermSplit?: boolean;
  /**
   * The number of lines to display before truncating with an ellipsis.
   */
  linesToClamp?: number;
  /**
   * Tooltip content displayed when there is no overflow.
   */
  nonEllipsisTooltip?: string;
  /**
   * The HTML tag used to wrap highlighted text.
   */
  wrappingTextTag?: keyof JSX.IntrinsicElements;
  /**
   * Class name applied to the wrapping element of highlighted text.
   */
  wrappingElementClassName?: string;
  /**
   * The position of the tooltip when displayed.
   * @deprecated Use `tooltipProps.position` instead.
   */
  tooltipPosition?: TooltipPositions;
  /**
   * Additional props to customize the tooltip component.
   */
  tooltipProps?: Partial<TooltipProps>;
}

const TextWithHighlight: React.FC<TextWithHighlightProps> = forwardRef(
  (
    {
      className,
      id,
      text = "",
      highlightTerm,
      limit,
      useEllipsis = true,
      linesToClamp = 3,
      ignoreCase = true,
      allowTermSplit = true,
      nonEllipsisTooltip,
      tooltipPosition,
      wrappingTextTag = "em",
      wrappingElementClassName,
      tooltipProps = {},
      "data-testid": dataTestId
    }: TextWithHighlightProps,
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);

    const textWithHighlights = useMemo(() => {
      if (!text || !highlightTerm || limit === 0) return text;
      let finalTerm = escapeRegExp(highlightTerm);
      if (allowTermSplit) {
        finalTerm = finalTerm.split(" ").join("|");
      }
      const regex = new RegExp(`(${finalTerm})`, ignoreCase ? "i" : "");
      const tokens = text.split(regex);
      const parts = [];
      // Tokens include the term search (in odd indices)
      let highlightTermsCount = 0;
      let key = 0;
      for (let i = 0; i < tokens.length; i++) {
        // skip empty tokens
        if (tokens[i]) {
          // adding highlight part
          const isTermPart = i % 2 === 1;
          const shouldHighlight = isTermPart && (!limit || limit < 0 || highlightTermsCount < limit);
          parts.push(getTextPart(tokens[i], key++, shouldHighlight, wrappingTextTag, wrappingElementClassName));
          if (isTermPart) highlightTermsCount++;
        }
      }

      return parts;
    }, [text, highlightTerm, limit, ignoreCase, allowTermSplit, wrappingTextTag, wrappingElementClassName]);

    const isOverflowing = useIsOverflowing({ ref: useEllipsis && componentRef });

    useIsomorphicLayoutEffect(() => {
      if (componentRef.current) {
        componentRef.current.style.setProperty("--heading-clamp-lines", linesToClamp.toString());
      }
    }, [componentRef, linesToClamp, isOverflowing]);

    const Element = (
      <div
        ref={mergedRef}
        className={cx(styles.textWithHighlightWrapper, className, {
          [styles.withEllipsis]: useEllipsis
        })}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.TEXT_WITH_HIGHLIGHT, id)}
      >
        {textWithHighlights}
      </div>
    );

    if (isOverflowing || nonEllipsisTooltip) {
      const tooltipContent = isOverflowing ? text : nonEllipsisTooltip;
      return (
        <Tooltip content={tooltipContent} position={tooltipPosition} {...tooltipProps}>
          {Element}
        </Tooltip>
      );
    }
    return Element;
  }
);

export default TextWithHighlight;

function escapeRegExp(string: string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
