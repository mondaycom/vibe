import React, { FC } from "react";
import cx from "classnames";
import { BEMClass } from "../../helpers/bem-helper";
import { NOOP } from "../../utils/function-utils";
import Button from "../../components/Button/Button";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import { ButtonPropsBackwardCompatible, DISMISS_BUTTON_TEXT, SUBMIT_BUTTON_TEXT } from "./TipseenConstants";
import TipseenBasicContent from "./TipseenBasicContent";
import { VibeComponentProps } from "../../types";
import { ElementContent } from "../../types/ElementContent";
import styles from "./TipseenContent.module.scss";

const BASE_CSS_CLASS = "monday-style-tipseen-content";
const bemHelper = BEMClass(BASE_CSS_CLASS);
const EMPTY_OBJECT: ButtonPropsBackwardCompatible = {};

interface TipseenContentProps extends VibeComponentProps {
  title?: string;
  /**
   * Classname for overriding TipseenTitle styles
   */
  titleClassName?: string;
  /**
   * Backward compatability for hideDismiss prop
   */
  isDismissHidden?: boolean;
  hideDismiss?: boolean;
  children?: ElementContent;
  /**
   * Backward compatability for hideSubmit prop
   */
  isSubmitHidden?: boolean;
  hideSubmit?: boolean;
  submitButtonText?: string;
  /** Backward compatibility for props naming **/
  submitButtonProps?: ButtonPropsBackwardCompatible;
  onSubmit?: (event: React.MouseEvent) => void;
  dismissButtonText?: string;
  /** Backward compatibility for props naming **/
  dismissButtonProps?: ButtonPropsBackwardCompatible;
  onDismiss?: (event: React.MouseEvent) => void;
}

const TipseenContent: FC<TipseenContentProps> = ({
  title,
  titleClassName,
  children = null,
  // Backward compatability
  isDismissHidden,
  hideDismiss,
  // Backward compatability
  isSubmitHidden,
  hideSubmit,
  submitButtonText,
  onSubmit,
  dismissButtonText,
  onDismiss,
  // Backward compatibility for props naming
  dismissButtonProps = EMPTY_OBJECT,
  // Backward compatibility for props naming
  submitButtonProps = EMPTY_OBJECT
}) => {
  const overrideHideDismiss = backwardCompatibilityForProperties([hideDismiss, isDismissHidden], true);
  const overrideHideSubmit = backwardCompatibilityForProperties([hideSubmit, isSubmitHidden], false);
  const dismissContent = dismissButtonProps.content || dismissButtonProps.children;
  const {
    className: dismissClassName,
    onClick: dismissDeprecatedOnClick,
    ...otherDismissButtonProps
  } = dismissButtonProps;
  const overrideDismissContent = backwardCompatibilityForProperties(
    [dismissButtonText, dismissContent],
    DISMISS_BUTTON_TEXT
  );
  const overrideDismissOnClick = backwardCompatibilityForProperties([onDismiss, dismissDeprecatedOnClick], NOOP);

  const submitContent = submitButtonProps.content || submitButtonProps.children;
  const { className: submitClassName, onClick: submitDeprecatedOnClick, ...otherSubmitButtonProps } = submitButtonProps;
  const overrideSubmitContent = backwardCompatibilityForProperties(
    [submitButtonText, submitContent],
    SUBMIT_BUTTON_TEXT
  );
  const overrideSubmitOnClick = backwardCompatibilityForProperties([onSubmit, submitDeprecatedOnClick], NOOP);

  return (
    <TipseenBasicContent title={title} className={BASE_CSS_CLASS} titleClassName={titleClassName}>
      {children ? <span className={cx(bemHelper({ element: "content" }))}>{children}</span> : null}
      <div className={cx(styles.buttons, bemHelper({ element: "buttons" }))}>
        {overrideHideDismiss ? null : (
          <Button
            kind={Button.kinds.TERTIARY}
            color={Button.colors.ON_PRIMARY_COLOR}
            className={cx(styles.dismiss, bemHelper({ element: "dismiss" }), dismissClassName)}
            size={Button.sizes.SMALL}
            onClick={overrideDismissOnClick}
            {...otherDismissButtonProps}
          >
            {overrideDismissContent}
          </Button>
        )}
        {overrideHideSubmit ? null : (
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

export default TipseenContent;
