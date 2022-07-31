import React, { useRef, forwardRef, useMemo, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Tooltip from "../../components/Tooltip/Tooltip";
import useIsOverflowing from "../../hooks/useIsOverflowing";
import useMergeRefs from "../../hooks/useMergeRefs";
import "./TextWithHighlight.scss";

const getTextPart = (text, key, shouldHighlight, wrappingTextTag = "em", wrappingElementClassName) => {
  const WrappingElement = wrappingTextTag;
  if (shouldHighlight) {
    return (
      <WrappingElement className={cx("highlight-text", wrappingElementClassName)} key={key}>
        {text}
      </WrappingElement>
    );
  }
  return <span key={key}>{text}</span>;
};

const TextWithHighlight = forwardRef(
  (
    {
      className,
      id,
      text,
      highlightTerm,
      limit,
      useEllipsis,
      linesToClamp,
      ignoreCase,
      allowTermSplit,
      nonEllipsisTooltip,
      tooltipPosition,
      wrappingTextTag,
      wrappingElementClassName
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    const textWithHighlights = useMemo(() => {
      if (!text || !highlightTerm || limit === 0) return text;
      let finalTerm = highlightTerm;
      if (allowTermSplit) {
        finalTerm = highlightTerm.split(" ").join("|");
      }
      const tokens = text.split(new RegExp(`(${finalTerm})`, ignoreCase ? "i" : ""));
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
        componentRef.current.style.setProperty("--heading-clamp-lines", linesToClamp);
      }
    }, [componentRef, linesToClamp]);

    let Element = (
      <div
        ref={mergedRef}
        className={cx("text-with-highlight--wrapper", className, {
          "with-ellipsis": useEllipsis
        })}
        id={id}
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

TextWithHighlight.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  /** Text to wrap */
  text: PropTypes.string,
  highlightTerm: PropTypes.string,
  /** Number of highlighted parts */
  limit: PropTypes.number,
  ignoreCase: PropTypes.bool,
  /** Should use ellipsis */
  useEllipsis: PropTypes.bool,
  /** Allow highlight every word as a separate term */
  allowTermSplit: PropTypes.bool,
  linesToClamp: PropTypes.number,
  /** Tooltip to show when there is no overflow */
  nonEllipsisTooltip: PropTypes.string,
  /** HTML tag to wrap the selected text */
  wrappingTextTag: PropTypes.string,
  wrappingElementClassName: PropTypes.string
};

TextWithHighlight.defaultProps = {
  className: "",
  id: undefined,
  text: "",
  highlightTerm: null,
  allowTermSplit: true,
  limit: null,
  ignoreCase: true,
  useEllipsis: true,
  linesToClamp: 3,
  nonEllipsisTooltip: null,
  wrappingTextTag: "em",
  wrappingElementClassName: undefined
};

export default TextWithHighlight;
