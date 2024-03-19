import React, { FC, useContext, useMemo } from "react";
import cx from "classnames";
import { NOOP } from "../../utils/function-utils";
import Button from "../../components/Button/Button";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import {
  ButtonPropsBackwardCompatible,
  DISMISS_BUTTON_TEXT,
  SUBMIT_BUTTON_TEXT,
  TipseenColor
} from "./TipseenConstants";
import TipseenBasicContent from "./TipseenBasicContent";
import { VibeComponentProps } from "../../types";
import { ElementContent } from "../../types/ElementContent";
import styles from "./TipseenContent.module.scss";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import { TipseenContext } from "./Tipseen";
import { ButtonColor } from "../Button/ButtonConstants";

const EMPTY_OBJECT: ButtonPropsBackwardCompatible = {};

export interface TipseenContentProps extends VibeComponentProps {
  title?: string;
  /**
   * Classname for overriding TipseenTitle styles
   */
  titleClassName?: string;
  /**
   * @deprecated - use hideDismiss instead
   */
  isDismissHidden?: boolean;
  hideDismiss?: boolean;
  children?: ElementContent;
  /**
   * @deprecated - use hideSubmit instead
   */
  isSubmitHidden?: boolean;
  hideSubmit?: boolean;
  submitButtonText?: string;
  submitButtonProps?: ButtonPropsBackwardCompatible;
  onSubmit?: (event: React.MouseEvent) => void;
  dismissButtonText?: string;
  dismissButtonProps?: ButtonPropsBackwardCompatible;
  onDismiss?: (event: React.MouseEvent) => void;
}

const TipseenContent: FC<TipseenContentProps> = ({
  id,
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
  const color = useContext(TipseenContext);
  const buttonColor = useMemo(() => {
    return color === TipseenColor.INVERTED ? ButtonColor.ON_INVERTED_BACKGROUND : ButtonColor.ON_PRIMARY_COLOR;
  }, [color]);

  return (
    <TipseenBasicContent title={title} titleClassName={titleClassName} id={id}>
      {children ? <span>{children}</span> : null}
      <div className={cx(styles.buttons)}>
        {overrideHideDismiss ? null : (
          <Button
            kind={Button.kinds.TERTIARY}
            color={buttonColor}
            className={cx(styles.dismiss, dismissClassName)}
            size={Button.sizes.SMALL}
            onClick={overrideDismissOnClick}
            data-testid={getTestId(ComponentDefaultTestId.TIPSEEN_CONTENT_DISMISS)}
            {...otherDismissButtonProps}
          >
            {overrideDismissContent}
          </Button>
        )}
        {overrideHideSubmit ? null : (
          <Button
            kind={Button.kinds.PRIMARY}
            color={buttonColor}
            size={Button.sizes.SMALL}
            className={submitClassName}
            onClick={overrideSubmitOnClick}
            data-testid={getTestId(ComponentDefaultTestId.TIPSEEN_CONTENT_SUBMIT)}
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
