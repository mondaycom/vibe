import React, { forwardRef } from "react";
import cx from "classnames";
import { EmptyStateActionsProps } from "./EmptyStateActions.types";
import { EmptyStateAction } from "../EmptyState.types";
import { VibeComponent } from "../../../types";
import Button from "../../Button/Button";
import Link from "../../Link/Link";
import styles from "./EmptyStateActions.module.scss";

const EmptyStateActions: VibeComponent<EmptyStateActionsProps, HTMLDivElement> = forwardRef(
  ({ className, primaryAction, secondaryAction, compact, id, "data-testid": dataTestId }, ref) => {
    const renderAction = (action: EmptyStateAction, isPrimary: boolean) => {
      const { text, onClick, href, kind = isPrimary ? "secondary" : "tertiary", disabled, loading, icon } = action;

      if (href) {
        return (
          <Link
            href={href}
            text={text}
            onClick={onClick}
            className={cx(styles.action, {
              [styles.primary]: isPrimary,
              [styles.secondary]: !isPrimary
            })}
          />
        );
      }

      return (
        <Button
          kind={kind}
          onClick={onClick}
          disabled={disabled}
          loading={loading}
          leftIcon={icon}
          size={compact ? "small" : "medium"}
          className={cx(styles.action, {
            [styles.primary]: isPrimary,
            [styles.secondary]: !isPrimary
          })}
        >
          {text}
        </Button>
      );
    };

    if (!primaryAction && !secondaryAction) {
      return null;
    }

    return (
      <div
        ref={ref}
        id={id}
        data-testid={dataTestId}
        className={cx(
          styles.actions,
          {
            [styles.compact]: compact
          },
          className
        )}
      >
        {primaryAction && renderAction(primaryAction, true)}
        {secondaryAction && renderAction(secondaryAction, false)}
      </div>
    );
  }
);

export default EmptyStateActions;
