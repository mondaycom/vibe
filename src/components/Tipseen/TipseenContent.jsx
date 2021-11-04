import cx from "classnames";
import PropTypes from "prop-types";
import { BEMClass } from "../../helpers/bem-helper";
import { NOOP } from "../../utils/function-utils";
import Button from "../Button/Button";
import { DISMISS_BUTTON_TEXT, SUBMIT_BUTTON_TEXT } from "./TipseenConstants";
import TipseenBasicContent from "./TipseenBasicContent";
import "./TipseenContent.scss";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";

const BASE_CSS_CLASS = "monday-style-tipseen-content";

const bemHelper = BEMClass(BASE_CSS_CLASS);
const TipseenContent = ({
  title,
  children,
  isDismissHidden,
  isSubmitHidden,
  submitButtonText,
  submitButtonOnClick,
  dismissButtonText,
  dismissButtonOnClick,
  // Backward compatibility for props naming
  dismissButtonProps,
  // Backward compatibility for props naming
  submitButtonProps
}) => {
  debugger;
  const {
    content: dismissContent,
    className: dismissClassName,
    onClick: dismissDeprecatedOnClick,
    ...otherDismissButtonProps
  } = dismissButtonProps || {};
  const overrideDismissContent = backwardCompatibilityForProperties(
    [dismissButtonText, dismissContent],
    DISMISS_BUTTON_TEXT
  );
  const overrideDismissOnClick = backwardCompatibilityForProperties(
    [dismissButtonOnClick, dismissDeprecatedOnClick],
    NOOP
  );
  const {
    content: submitContent,
    className: submitClassName,
    onClick: submitDeprecatedOnClick,
    ...otherSubmitButtonProps
  } = submitButtonProps || {};
  const overrideSubmitContent = backwardCompatibilityForProperties(
    [submitButtonText, submitContent],
    SUBMIT_BUTTON_TEXT
  );
  const overrideSubmitOnClick = backwardCompatibilityForProperties(
    [submitButtonOnClick, submitDeprecatedOnClick],
    NOOP
  );
  return (
    <TipseenBasicContent title={title} className={BASE_CSS_CLASS}>
      {children ? <span className={bemHelper({ element: "content" })}>{children}</span> : null}
      <div className={bemHelper({ element: "buttons" })}>
        {isDismissHidden ? null : (
          <Button
            kind={Button.kinds.TERTIARY}
            color={Button.colors.ON_PRIMARY_COLOR}
            className={cx(bemHelper({ element: "dismiss" }), dismissClassName)}
            size={Button.sizes.SMALL}
            onClick={overrideDismissOnClick}
            {...otherDismissButtonProps}
          >
            {overrideDismissContent}
          </Button>
        )}
        {isSubmitHidden ? null : (
          <Button
            kind={Button.kinds.PRIMARY}
            color={Button.colors.ON_PRIMARY_COLOR}
            size={Button.sizes.SMALL}
            className={cx(bemHelper({ element: "submit" }), submitClassName)}
            onClick={overrideSubmitOnClick}
            {...otherSubmitButtonProps}
          >
            {overrideSubmitContent}
          </Button>
        )}
      </div>
    </TipseenBasicContent>
  );
};

TipseenContent.propTypes = {
  title: PropTypes.string,
  onSubmit: PropTypes.func,
  onDismiss: PropTypes.func,
  isDismissHidden: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  isSubmitHidden: PropTypes.bool,
  submitButtonText: PropTypes.string,
  submitButtonOnClick: PropTypes.func,
  dismissButtonText: PropTypes.string,
  dismissButtonOnClick: PropTypes.func
};

TipseenContent.defaultProps = {
  title: undefined,
  children: null,
  onSubmit: NOOP,
  onDismiss: NOOP,
  isDismissHidden: true,
  isSubmitHidden: false,
  submitButtonText: undefined,
  submitButtonOnClick: NOOP,
  dismissButtonText: undefined,
  dismissButtonOnClick: NOOP
};

export default TipseenContent;
