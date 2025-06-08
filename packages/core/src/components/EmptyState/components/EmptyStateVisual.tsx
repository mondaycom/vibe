import React, { forwardRef } from "react";
import cx from "classnames";
import { EmptyStateVisualProps } from "./EmptyStateVisual.types";
import { VibeComponent } from "../../../types";
import styles from "./EmptyStateVisual.module.scss";

const EmptyStateVisual: VibeComponent<EmptyStateVisualProps, HTMLDivElement> = forwardRef(
  ({ className, visual, compact, id, "data-testid": dataTestId }, ref) => {
    return (
      <div
        ref={ref}
        id={id}
        data-testid={dataTestId}
        className={cx(
          styles.visual,
          {
            [styles.compact]: compact
          },
          className
        )}
        role="img"
        aria-hidden="true"
      >
        {visual}
      </div>
    );
  }
);

export default EmptyStateVisual;
