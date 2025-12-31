import React, { forwardRef } from "react";
import cx from "classnames";
import { Flex } from "@vibe/layout";
import Heading from "../../components/Heading/Heading";
import { Text } from "@vibe/typography";
import { type EmptyStateProps } from "./EmptyState.types";
import styles from "./EmptyState.module.scss";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import { Button, type ButtonProps } from "@vibe/button";
import { Link, type LinkProps } from "../Link";
import { ComponentVibeId } from "../../tests/constants";

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
        data-vibe={ComponentVibeId.EMPTY_STATE}
        ref={ref}
      >
        {!!visual && visual}

        <Flex direction="column" align="center" gap={isCompact ? 12 : "medium"} className={styles.content}>
          <Flex direction="column" align="center" gap="xs">
            {title && (
              <Heading type="h3" weight="normal" className={styles.title} align="center" ellipsis={false}>
                {title}
              </Heading>
            )}

            {typeof description === "string" ? (
              <Text className={styles.description} align="center" ellipsis={false}>
                {description}
              </Text>
            ) : (
              description
            )}
          </Flex>

          {(mainAction || supportingAction) && (
            <Flex direction="column" align="center" gap="small" className={styles.actions}>
              {renderMainAction(mainAction, isCompact)}
              {renderSupportingAction(supportingAction, isCompact)}
            </Flex>
          )}
        </Flex>
      </Flex>
    );
  }
);

function renderMainAction(mainAction: EmptyStateProps["mainAction"], isCompact: boolean) {
  if (typeof mainAction === "object" && "text" in mainAction) {
    return (
      <Button kind="secondary" size={isCompact ? "small" : "medium"} {...mainAction}>
        {mainAction.text}
      </Button>
    );
  }

  return mainAction;
}

function renderSupportingAction(supportingAction: EmptyStateProps["supportingAction"], isCompact: boolean) {
  if (typeof supportingAction === "object") {
    if ("text" in supportingAction && "href" in supportingAction) {
      const { text, ...linkProps } = supportingAction as LinkProps & { text: string };
      return <Link text={text} {...linkProps} />;
    }
    if ("text" in supportingAction) {
      const { text, ...buttonProps } = supportingAction as ButtonProps & { text: string };
      return (
        <Button kind="tertiary" size={isCompact ? "small" : "medium"} {...buttonProps}>
          {text}
        </Button>
      );
    }
  }

  return supportingAction;
}

export default EmptyState;
