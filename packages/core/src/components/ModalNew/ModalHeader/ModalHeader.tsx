import React, { forwardRef, useEffect } from "react";
import cx from "classnames";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";
import styles from "./ModalHeader.module.scss";
import { ModalHeaderProps } from "./ModalHeader.types";
import Flex from "../../Flex/Flex";
import Heading from "../../Heading/Heading";
import Text from "../../Text/Text";
import Icon from "../../Icon/Icon";
import { useModal } from "../context/ModalContext";

const ModalHeader = forwardRef(
  (
    { title, description, descriptionIcon, className, id, "data-testid": dataTestId }: ModalHeaderProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const { modalId, setDescriptionId, setTitleId } = useModal();
    const titleId = id ? `${modalId}_${id}_label` : `${modalId}_label`;
    const descriptionId = id ? `${modalId}_${id}_desc` : `${modalId}_desc`;

    useEffect(() => {
      if (!modalId) return;
      setTitleId(titleId);
      if (!description) return;
      setDescriptionId(descriptionId);
    }, [modalId, setTitleId, titleId, description, setDescriptionId, descriptionId]);

    return (
      <Flex
        gap={Flex.gaps.XS}
        direction={Flex.directions.COLUMN}
        align={Flex.align.START}
        ref={ref}
        className={cx(styles.header, className)}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.MODAL_NEXT_HEADER, id)}
      >
        <Heading
          id={titleId}
          type={Heading.types.H2}
          weight={Heading.weights.MEDIUM}
          maxLines={2}
          className={styles.title}
        >
          {title}
        </Heading>
        {description && (
          <Flex id={descriptionId}>
            {descriptionIcon && (
              <Icon
                icon={typeof descriptionIcon === "object" ? descriptionIcon.name : descriptionIcon}
                className={cx(styles.descriptionIcon, typeof descriptionIcon === "object" && descriptionIcon.className)}
              />
            )}
            {typeof description === "string" ? (
              <Text element="span" type={Text.types.TEXT1}>
                {description}
              </Text>
            ) : (
              description
            )}
          </Flex>
        )}
      </Flex>
    );
  }
);

export default ModalHeader;
