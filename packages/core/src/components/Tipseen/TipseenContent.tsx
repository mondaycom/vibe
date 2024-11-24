import React, { FC, useContext, useMemo } from "react";
import cx from "classnames";
import Button from "../../components/Button/Button";
import { DISMISS_BUTTON_TEXT, SUBMIT_BUTTON_TEXT, TipseenColor } from "./TipseenConstants";
import TipseenBasicContent from "./TipseenBasicContent";
import { VibeComponentProps } from "../../types";
import { ElementContent } from "../../types/ElementContent";
import styles from "./TipseenContent.module.scss";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import { TipseenContext } from "./Tipseen";
import { ButtonColor } from "../Button/ButtonConstants";

export interface TipseenContentProps extends VibeComponentProps {
  title?: string;
  /**
   * Classname for overriding TipseenTitle styles
   */
  titleClassName?: string;
  hideDismiss?: boolean;
  children?: ElementContent;
  hideSubmit?: boolean;
  submitButtonText?: string;
  onSubmit?: (event: React.MouseEvent) => void;
  dismissButtonText?: string;
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
          >
            {submitButtonText}
          </Button>
        )}
      </div>
    </TipseenBasicContent>
  );
};

export default TipseenContent;
