import React, { type FC, useContext, useMemo } from "react";
import cx from "classnames";
import Button from "../../components/Button/Button";
import { DISMISS_BUTTON_TEXT, SUBMIT_BUTTON_TEXT, TipseenColor } from "./TipseenConstants";
import TipseenBasicContent from "./TipseenBasicContent";
import { type VibeComponentProps } from "../../types";
import { type ElementContent } from "../../types/ElementContent";
import styles from "./TipseenContent.module.scss";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import { TipseenContext } from "./Tipseen";
import { ButtonColor } from "../Button/ButtonConstants";
import { type SubIcon } from "@vibe/icon";

export interface TipseenContentProps extends VibeComponentProps {
  /**
   * The title text displayed in the Tipseen content.
   */
  title?: string;
  /**
   * Class name applied to the Tipseen title.
   */
  titleClassName?: string;
  /**
   * If true, hides the dismiss button.
   */
  hideDismiss?: boolean;
  /**
   * The content inside the Tipseen.
   */
  children?: ElementContent;
  /**
   * If true, hides the submit button.
   */
  hideSubmit?: boolean;
  /**
   * The text displayed on the submit button.
   */
  submitButtonText?: string;
  /**
   * Icon to display in the submit button
   */
  submitButtonIcon?: SubIcon;
  /**
   * Callback fired when the submit button is clicked.
   */
  onSubmit?: (event: React.MouseEvent) => void;
  /**
   * The text displayed on the dismiss button.
   */
  dismissButtonText?: string;
  /**
   * Callback fired when the dismiss button is clicked.
   */
  onDismiss?: (event: React.MouseEvent) => void;
}

const TipseenContent: FC<TipseenContentProps> = ({
  id,
  title,
  titleClassName,
  children = null,
  hideDismiss = true,
  hideSubmit,
  submitButtonText = SUBMIT_BUTTON_TEXT,
  submitButtonIcon,
  onSubmit,
  dismissButtonText = DISMISS_BUTTON_TEXT,
  onDismiss
}) => {
  const color = useContext(TipseenContext);
  const buttonColor = useMemo(() => {
    return color === TipseenColor.INVERTED ? ButtonColor.ON_INVERTED_BACKGROUND : ButtonColor.ON_PRIMARY_COLOR;
  }, [color]);

  return (
    <TipseenBasicContent title={title} titleClassName={titleClassName} id={id}>
      {children ? <span>{children}</span> : null}
      <div className={cx(styles.buttons)}>
        {hideDismiss ? null : (
          <Button
            kind="tertiary"
            color={buttonColor}
            className={styles.dismiss}
            size="small"
            onClick={onDismiss}
            data-testid={getTestId(ComponentDefaultTestId.TIPSEEN_CONTENT_DISMISS)}
          >
            {dismissButtonText}
          </Button>
        )}
        {hideSubmit ? null : (
          <Button
            kind="primary"
            color={buttonColor}
            size="small"
            onClick={onSubmit}
            data-testid={getTestId(ComponentDefaultTestId.TIPSEEN_CONTENT_SUBMIT)}
            leftIcon={submitButtonIcon}
          >
            {submitButtonText}
          </Button>
        )}
      </div>
    </TipseenBasicContent>
  );
};

export default TipseenContent;
