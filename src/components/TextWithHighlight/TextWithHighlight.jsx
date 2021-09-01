import React, { useRef, forwardRef, useMemo } from "react";
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

const TextWithHighlight = forwardRef(({ className, id, text, highlightTerm, limit }, ref) => {
  const componentRef = useRef(null);
  const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

  const textWithHighlights = useMemo(() => {
    if (!text || !highlightTerm || limit === 0) return text;
    const tokens = text.split(new RegExp(highlightTerm, "i")); // ignore case
    const parts = [];
    // First token should be added as is (if not empty)
    let key = 0;
    if (tokens[0]) {
      parts.push(getTextPart(tokens[0], key++, false));
    }
    // From second tokens - we need to add highlight term part before each tokens
    let highlightTermsCount = 0;
    for (let i = 1; i < tokens.length; i++) {
      // adding highlightend part
      const shouldHighlight = !limit || limit < 0 || highlightTermsCount < limit;
      parts.push(getTextPart(highlightTerm, key++, shouldHighlight));
      highlightTermsCount++;

      // Adding the regular part
      parts.push(getTextPart(tokens[i], key++, false));
    }

    return parts;
  }, [text, highlightTerm, limit]);

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
  limit: PropTypes.number
};

TextWithHighlight.defaultProps = {
  className: "",
  id: undefined,
  text: "",
  highlightTerm: null,
  limit: null
};

export default TextWithHighlight;
