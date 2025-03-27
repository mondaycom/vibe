import React, { forwardRef } from "react";
import cx from "classnames";
import Flex from "../../components/Flex/Flex";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import { EmptyStateProps } from "./EmptyState.types";
import styles from "./EmptyState.module.scss";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import { Button, ButtonProps } from "../Button";
import { Link, LinkProps } from "../Link";
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

            {typeof description === "string" ? (
              <Text
                type={isCompact ? "text3" : "text2"}
                color="primary"
                className={styles.description}
                align="center"
                ellipsis={false}
              >
                {description}
              </Text>
            ) : (
              description
            )}
          </>

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
