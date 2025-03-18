import React, { forwardRef } from "react";
import cx from "classnames";
import Flex from "../../components/Flex/Flex";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import { EmptyStateProps } from "./EmptyState.types";
import styles from "./EmptyState.module.scss";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";

const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(
  (
    {
      className,
      title,
      description,
      visual,
      mainAction,
      supportingAction,
      layout = "default",
      id,
      "data-testid": dataTestId
    },
    ref
  ) => {
    const isCompact = layout === "compact";

    return (
      <Flex
        direction="column"
        align="center"
        justify="center"
        gap={isCompact ? "small" : "medium"}
        className={cx(styles.emptyState, getStyle(styles, layout), className)}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.EMPTY_STATE, id)}
        ref={ref}
      >
        {!!visual && visual}

        <Flex direction="column" align="center" gap={isCompact ? "small" : 12} className={styles.content}>
          <>
            {title && (
              <Heading type="h3" weight="normal" className={styles.title} align="center" ellipsis={false}>
                {title}
              </Heading>
            )}

            <Text
              type={isCompact ? "text3" : "text2"}
              color="primary"
              className={styles.description}
              align="center"
              ellipsis={false}
            >
              {description}
            </Text>
          </>

          {(mainAction || supportingAction) && (
            <Flex direction="column" align="center" gap="small" className={styles.actions}>
              {mainAction}
              {supportingAction}
            </Flex>
          )}
        </Flex>
      </Flex>
    );
  }
);

export default EmptyState;
