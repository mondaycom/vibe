import React, { FC } from "react";
import cx from "classnames";
import Button from "../../components/Button/Button";
import Link from "../../components/Link/Link";
import Flex from "../../components/Flex/Flex";
import Heading from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";
import { EmptyStateProps, EmptyStateLayout, EmptyStateSupportingActionProps } from "./EmptyState.types";
import styles from "./EmptyState.module.scss";

const EmptyState: FC<EmptyStateProps> = ({
  className,
  title,
  description,
  illustration,
  mainAction,
  supportingAction,
  layout = EmptyStateLayout.DEFAULT,
  id,
  "data-testid": dataTestId
}) => {
  const isCompact = layout === EmptyStateLayout.COMPACT;

  return (
    <Flex
      direction={Flex.directions.COLUMN}
      align={Flex.align.CENTER}
      justify={Flex.justify.CENTER}
      gap={isCompact ? Flex.gaps.SMALL : Flex.gaps.MEDIUM}
      className={cx(styles.emptyState, styles[layout], className)}
      id={id}
      data-testid={dataTestId || "empty-state"}
    >
      {!!illustration && illustration}

      <Flex direction={Flex.directions.COLUMN} align={Flex.align.CENTER} gap={Flex.gaps.XS} className={styles.content}>
        {title && (
          <Heading
            type={Heading.types.H3}
            weight={Heading.weights.MEDIUM}
            className={styles.title}
            align={Heading.align.CENTER}
            ellipsis={false}
          >
            {title}
          </Heading>
        )}

        <Text
          type={isCompact ? Text.types.TEXT3 : Text.types.TEXT2}
          color={Text.colors.SECONDARY}
          className={styles.description}
          align={Text.align.CENTER}
          ellipsis={false}
        >
          {description}
        </Text>

        {(mainAction || supportingAction) && (<Flex
          direction={Flex.directions.COLUMN}
          align={Flex.align.CENTER}
          gap={Flex.gaps.MEDIUM}
          className={styles.actions}
        >
          {mainAction && (
            <Button
              kind={mainAction.kind || Button.kinds.SECONDARY}
              size={Button.sizes.MEDIUM}
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
        </Flex>)}
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
      kind={Button.kinds.TERTIARY}
      size={isCompact ? Button.sizes.SMALL : Button.sizes.MEDIUM}
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
