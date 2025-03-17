import React, { forwardRef } from "react";
import cx from "classnames";
import Button from "../../components/Button/Button";
import Link from "../../components/Link/Link";
import Flex from "../../components/Flex/Flex";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import { EmptyStateProps, EmptyStateSupportingActionProps } from "./EmptyState.types";
import styles from "./EmptyState.module.scss";
import { getStyle } from "src/helpers/typesciptCssModulesHelper";
import { ComponentDefaultTestId, getTestId } from "src/tests/test-ids-utils";

const EmptyState = forwardRef<HTMLDivElement, EmptyStateProps>(({
  className,
  title,
  description,
  illustration,
  mainAction,
  supportingAction,
  layout = "default",
  id,
  "data-testid": dataTestId
}, ref) => {
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
      {!!illustration && illustration}

      <Flex direction="column" align="center" gap={isCompact ? "small" : 12} className={styles.content}>
        <div>
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
        </div>

        {(mainAction || supportingAction) && (
          <Flex direction="column" align="center" gap="small" className={styles.actions}>
            {mainAction && (
              <Button
                kind={mainAction.kind || "secondary"}
                size="medium"
                leftIcon={mainAction.leftIcon}
                rightIcon={mainAction.rightIcon}
                disabled={mainAction.disabled}
                color={mainAction.color}
                loading={mainAction.loading}
                onClick={mainAction.onClick}
                className={styles.mainAction}
              >
                {mainAction.text}
              </Button>
            )}

            {supportingAction && renderSupportingAction(supportingAction, isCompact)}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

export default EmptyState;

function renderSupportingAction(
  supportingAction: EmptyStateSupportingActionProps,
  isCompact: boolean
): React.ReactNode {
  return supportingAction.type === "button" ? (
    <Button
      kind="tertiary"
      size={isCompact ? "small" : "medium"}
      leftIcon={supportingAction.leftIcon}
      rightIcon={supportingAction.rightIcon}
      disabled={supportingAction.disabled}
      color={supportingAction.color}
      loading={supportingAction.loading}
      onClick={supportingAction.onClick}
      className={styles.supportingAction}
    >
      {supportingAction.text}
    </Button>
  ) : (
    <Link
      href={supportingAction.href || "#"}
      text={supportingAction.text}
      onClick={supportingAction.onClick}
      className={styles.supportingAction}
    />
  );
}
