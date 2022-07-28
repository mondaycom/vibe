import cx from "classnames";
import PropTypes from "prop-types";
import { BEMClass } from "../../helpers/bem-helper";
import { NOOP } from "../../utils/function-utils";
import Button from "../../components/Button/Button";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import { DISMISS_BUTTON_TEXT, SUBMIT_BUTTON_TEXT } from "./TipseenConstants";
import TipseenBasicContent from "./TipseenBasicContent";
import styles from "./TipseenContent.module.scss";

const BASE_CSS_CLASS = "monday-style-tipseen-content";
const bemHelper = BEMClass(BASE_CSS_CLASS);
const EMPTY_OBJECT = {};

const TipseenContent = ({
  title,
  children,
  isDismissHidden,
  isSubmitHidden,
  submitButtonText,
  onSubmit,
  dismissButtonText,
  onDismiss,
  // Backward compatibility for props naming
  dismissButtonProps,
  // Backward compatibility for props naming
  submitButtonProps
}) => {
  const {
    content: dismissContent,
    className: dismissClassName,
    onClick: dismissDeprecatedOnClick,
    ...otherDismissButtonProps
  } = dismissButtonProps || EMPTY_OBJECT;
  const overrideDismissContent = backwardCompatibilityForProperties(
    [dismissButtonText, dismissContent],
    DISMISS_BUTTON_TEXT
  );
  const overrideDismissOnClick = backwardCompatibilityForProperties([onDismiss, dismissDeprecatedOnClick], NOOP);
  const {
    content: submitContent,
    className: submitClassName,
    onClick: submitDeprecatedOnClick,
    ...otherSubmitButtonProps
  } = submitButtonProps || EMPTY_OBJECT;
  const overrideSubmitContent = backwardCompatibilityForProperties(
    [submitButtonText, submitContent],
    SUBMIT_BUTTON_TEXT
  );
  const overrideSubmitOnClick = backwardCompatibilityForProperties([onSubmit, submitDeprecatedOnClick], NOOP);
  return (
    <TipseenBasicContent title={title} className={BASE_CSS_CLASS}>
      {children ? (
        <span className={cx(styles.tipseenContent, bemHelper({ element: "content" }))}>{children}</span>
      ) : null}
      <div className={cx(styles.tipseenContentButtons, bemHelper({ element: "buttons" }))}>
        {isDismissHidden ? null : (
          <Button
            kind={Button.kinds.TERTIARY}
            color={Button.colors.ON_PRIMARY_COLOR}
            className={cx(styles.tipseenContentButtonsDismiss, bemHelper({ element: "dismiss" }), dismissClassName)}
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
  isDismissHidden: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  isSubmitHidden: PropTypes.bool,
  submitButtonText: PropTypes.string,
  onSubmit: PropTypes.func,
  dismissButtonText: PropTypes.string,
  onDismiss: PropTypes.func
};

TipseenContent.defaultProps = {
  title: undefined,
  children: null,
  isDismissHidden: true,
  isSubmitHidden: false,
  submitButtonText: undefined,
  onSubmit: NOOP,
  dismissButtonText: undefined,
  onDismiss: NOOP
};

export default TipseenContent;
