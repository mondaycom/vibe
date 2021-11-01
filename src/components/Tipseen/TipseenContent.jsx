import cx from "classnames";
import PropTypes from "prop-types";
import { BEMClass } from "../../helpers/bem-helper";
import { NOOP } from "../../utils/function-utils";
import Button from "../Button/Button";
import { DISMISS_BUTTON_TEXT, SUBMIT_BUTTON_TEXT } from "./TipseenConstants";
import TipseenBasicContent from "./TipseenBasicContent";
import "./TipseenContent.scss";

const BASE_CSS_CLASS = "monday-style-tipseen-content";

const bemHelper = BEMClass(BASE_CSS_CLASS);
const TipseenContent = ({
  title,
  children,
  isDismissHidden,
  isSubmitHidden,
  dismissButtonProps,
  submitButtonProps
}) => {
  const { content: dismissContent, className: dismissClassName, ...otherDismissButtonProps } = dismissButtonProps;
  const { content: submitContent, className: submitClassName, ...otherSubmitButtonProps } = submitButtonProps;
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
            {...otherDismissButtonProps}
          >
            {dismissContent || DISMISS_BUTTON_TEXT}
          </Button>
        )}
        {isSubmitHidden ? null : (
          <Button
            kind={Button.kinds.PRIMARY}
            color={Button.colors.ON_PRIMARY_COLOR}
            size={Button.sizes.SMALL}
            className={cx(bemHelper({ element: "submit" }), submitClassName)}
            {...otherSubmitButtonProps}
          >
            {submitContent || SUBMIT_BUTTON_TEXT}
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
  // An object that contains all the props that will be passed to the dismiss button in order to
  // override its default settings - support all button props with the same syntax
  // eslint-disable-next-line react/forbid-prop-types
  dismissButtonProps: PropTypes.object,
  // An object that contains all the props that will be passed to the submit button in order to
  // override its default settings - support all button props with the same syntax
  // eslint-disable-next-line react/forbid-prop-types
  submitButtonProps: PropTypes.object
};

TipseenContent.defaultProps = {
  title: undefined,
  children: null,
  onSubmit: NOOP,
  onDismiss: NOOP,
  isDismissHidden: true,
  isSubmitHidden: false,
  dismissButtonProps: {},
  submitButtonProps: {}
};

export default TipseenContent;
