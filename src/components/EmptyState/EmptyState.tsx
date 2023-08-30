import React, { forwardRef, useRef } from "react";
import cx from "classnames";
import { useMergeRefs } from "../../hooks";
import VibeComponentProps from "../../types/VibeComponentProps";
import VibeComponent from "../../types/VibeComponent";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import styles from "./EmptyState.module.scss";
import Flex from "../Flex/Flex";
import Heading from "../Heading/Heading";
import Text from "../Text/Text";
import Button from "../Button/Button";

export interface EmptyStateProps extends VibeComponentProps {
  imgSrc: string;
  title: string;
  body: string;
  onPrimaryActionClick?: () => void;
  primaryActionLabel?: string;
  onSecondaryActionClick?: () => void;
  secondaryActionLabel?: string;
  imgClassName?: string;
}

const EmptyState: VibeComponent<EmptyStateProps, HTMLElement> = forwardRef(
  (
    {
      imgSrc,
      title,
      body,
      onPrimaryActionClick,
      primaryActionLabel,
      onSecondaryActionClick,
      secondaryActionLabel,
      className,
      imgClassName,
      id,
      "data-testid": dataTestId
    },
    ref
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    return (
      <Flex
        ref={mergedRef}
        className={cx(styles.emptyState, className)}
        direction={Flex.directions.COLUMN}
        align={Flex.align.CENTER}
        justify={Flex.justify.CENTER}
        gap={Flex.gaps.LARGE}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.EMPTY_STATE, id)}
      >
        <img src={imgSrc} alt={title} className={cx(styles.image, imgClassName)} />
        <Flex direction={Flex.directions.COLUMN} gap={Flex.gaps.SMALL} align={Flex.align.CENTER}>
          <Heading type={Heading.types.H2}>{title}</Heading>
          <Text type={Text.types.TEXT1}>{body}</Text>
        </Flex>
        <Flex gap={Flex.gaps.SMALL} align={Flex.align.CENTER}>
          {secondaryActionLabel && (
            <Button kind={Button.kinds.TERTIARY} onClick={onSecondaryActionClick}>
              {secondaryActionLabel}
            </Button>
          )}
          {primaryActionLabel && <Button onClick={onPrimaryActionClick}>{primaryActionLabel}</Button>}
        </Flex>
      </Flex>
    );
  }
);

export default EmptyState;
