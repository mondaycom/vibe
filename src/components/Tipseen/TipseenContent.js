import React from "react";
import { element } from "prop-types";
import { BEMClass } from "../../helpers/bem-helper";
import { NOOP } from "../../utils/function-utils";
import { Button } from "../index";

const TIPSEEN_BASE_CSS_CLASS = "monday-style-tipseen-content";

const bemHelper = BEMClass(TIPSEEN_BASE_CSS_CLASS);
export const TipseenContent = ({
  title,
  content,
  isDismissHidden,
  isSubmitHidden,
  dismissButtonProps,
  submitButtonProps
}) => {
  return (
    <div className={TIPSEEN_BASE_CSS_CLASS}>
      {title ? <span className={bemHelper({ element: "title" })}>{title}</span> : null}
      {content ? <span className={bemHelper({ element: "content" })}>{content}</span> : null}
      <div className={bemHelper({ element: "buttons" })}>
        {isDismissHidden ? null : <Button {...dismissButtonProps} />}
        {isSubmitHidden ? null : <Button {...submitButtonProps} />}
      </div>
    </div>
  );
};

TipseenContent.propTypes = {
  title: PropTypes.string,
  content: PropTypes.oneOf([PropTypes.element, PropTypes.string]),
  onSubmit: PropTypes.func,
  onDismiss: PropTypes.func,
  isDismissHidden: PropTypes.bool,
  isSubmitHidden: PropTypes.bool
};

TipseenContent.defaultProps = {
  title: undefined,
  content: undefined,
  onSubmit: NOOP,
  onDismiss: NOOP,
  isDismissHidden: true,
  isSubmitHidden: false,
  dismissButtonProps: {},
  submitButtonProps: {}
};
