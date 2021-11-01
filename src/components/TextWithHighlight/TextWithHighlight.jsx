import React, { useRef, forwardRef, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import "./TextWithHighlight.scss";

const getTextPart = (text, key, shouldHighlight) => {
  if (shouldHighlight) {
    return (
      <em className="highlight-text" key={key}>
        {text}
      </em>
    );
  }
  return <span key={key}>{text}</span>;
};

const TextWithHighlight = forwardRef(({ className, id, text, highlightTerm, limit, linesToClamp }, ref) => {
  const componentRef = useRef(null);
  const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

  const textWithHighlights = useMemo(() => {
    if (!text || !highlightTerm || limit === 0) return text;
    const tokens = text.split(new RegExp(`(${highlightTerm})`, "i")); // ignore case
    const parts = [];
    // Tokens include the term search (in odd indices)
    let highlightTermsCount = 0;
    let key = 0;
    for (let i = 0; i < tokens.length; i++) {
      // skip empty tokens
      if (tokens[i]) {
        // adding highlightend part
        const isTermPart = i % 2 === 1;
        const shouldHighlight = isTermPart && (!limit || limit < 0 || highlightTermsCount < limit);
        parts.push(getTextPart(tokens[i], key++, shouldHighlight));
        if (isTermPart) highlightTermsCount++;
      }
    }

    return parts;
  }, [text, highlightTerm, limit]);

  useEffect(() => {
    if (!componentRef.current) return;
    componentRef.current.style.setProperty("-webkit-line-clamp", linesToClamp);
  }, [componentRef, linesToClamp]);

  return (
    <div ref={mergedRef} className={cx("text-with-highlight--wrapper", className)} id={id}>
      {textWithHighlights}
    </div>
  );
});

TextWithHighlight.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  text: PropTypes.string,
  highlightTerm: PropTypes.string,
  limit: PropTypes.number,
  linesToClamp: PropTypes.number
};

TextWithHighlight.defaultProps = {
  className: "",
  id: undefined,
  text: "",
  highlightTerm: null,
  limit: null,
  linesToClamp: 3
};

export default TextWithHighlight;
