import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import cx from "classnames";
import React, { forwardRef, useLayoutEffect, useMemo, useRef } from "react";
import Tooltip from "../../components/Tooltip/Tooltip";
import useIsOverflowing from "../../hooks/useIsOverflowing/useIsOverflowing";
import useMergeRef from "../../hooks/useMergeRef";
import VibeComponentProps from "../../types/VibeComponentProps";
import { DialogPosition } from "../../constants";
import styles from "./TextWithHighlight.module.scss";

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
  /** Text to wrap */
  text?: string;
  highlightTerm?: string;
  /** Number of highlighted parts */
  limit?: number;
  ignoreCase?: boolean;
  /** Should use ellipsis */
  useEllipsis?: boolean;
  /** Allow highlight every word as a separate term */
  allowTermSplit?: boolean;
  linesToClamp?: number;
  /** Tooltip to show when there is no overflow */
  nonEllipsisTooltip?: string;
  /** HTML tag to wrap the selected text */
  wrappingTextTag?: keyof JSX.IntrinsicElements;
  wrappingElementClassName?: string;
  tooltipPosition?: DialogPosition;
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
      "data-testid": dataTestId
    },
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

    useLayoutEffect(() => {
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
        <Tooltip content={tooltipContent} position={tooltipPosition}>
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
