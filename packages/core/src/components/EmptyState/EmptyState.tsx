import React, { forwardRef } from "react";
import cx from "classnames";
import { EmptyStateProps } from "./EmptyState.types";
import { VibeComponent } from "../../types";
import Flex from "../Flex/Flex";
import EmptyStateVisual from "./components/EmptyStateVisual";
import EmptyStateContent from "./components/EmptyStateContent";
import EmptyStateActions from "./components/EmptyStateActions";
import styles from "./EmptyState.module.scss";

const EmptyState: VibeComponent<EmptyStateProps, HTMLDivElement> = forwardRef(
  (
    {
      className,
      visual,
      title,
      description,
      primaryAction,
      secondaryAction,
      compact = false,
      id,
      "data-testid": dataTestId
    },
    ref
  ) => {
    return (
      <Flex
        ref={ref}
        id={id}
        data-testid={dataTestId}
        direction="column"
        align="center"
        className={cx(
          styles.emptyState,
          {
            [styles.compact]: compact
          },
          className
        )}
      >
        {visual && <EmptyStateVisual visual={visual} compact={compact} />}
        <EmptyStateContent title={title} description={description} compact={compact} />
        <EmptyStateActions primaryAction={primaryAction} secondaryAction={secondaryAction} compact={compact} />
      </Flex>
    );
  }
);

export default EmptyState;
