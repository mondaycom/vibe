import React, { forwardRef } from "react";
import cx from "classnames";
import { EmptyStateContentProps } from "./EmptyStateContent.types";
import { VibeComponent } from "../../../types";
import Heading from "../../Heading/Heading";
import Text from "../../Text/Text";
import styles from "./EmptyStateContent.module.scss";

const EmptyStateContent: VibeComponent<EmptyStateContentProps, HTMLDivElement> = forwardRef(
  ({ className, title, description, compact, id, "data-testid": dataTestId }, ref) => {
    return (
      <div
        ref={ref}
        id={id}
        data-testid={dataTestId}
        className={cx(
          styles.content,
          {
            [styles.compact]: compact
          },
          className
        )}
      >
        {title && (
          <Heading type="h3" align="center" className={styles.title}>
            {title}
          </Heading>
        )}
        <Text align="center" className={styles.description}>
          {description}
        </Text>
      </div>
    );
  }
);

export default EmptyStateContent;
