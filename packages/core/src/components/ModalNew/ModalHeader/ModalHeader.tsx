import React, { forwardRef } from "react";
import cx from "classnames";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";
import styles from "./ModalHeader.module.scss";
import { ModalHeaderProps } from "./ModalHeader.types";
import Flex from "../../Flex/Flex";
import Heading from "../../Heading/Heading";
import Text from "../../Text/Text";
import Icon from "../../Icon/Icon";

const ModalHeader = forwardRef(
  (
    { title, description, descriptionIcon, className, id, "data-testid": dataTestId }: ModalHeaderProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
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
        <Heading type={Heading.types.H2} weight={Heading.weights.MEDIUM} maxLines={2} className={styles.title}>
          {title}
        </Heading>
        {description && (
          <Flex>
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
