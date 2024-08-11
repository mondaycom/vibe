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
import { useModal } from "../context/ModalContext";

const ModalHeader = forwardRef(
  (
    { title, subtitle, subtitleIcon, className, id, "data-testid": dataTestId }: ModalHeaderProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const { layout } = useModal();

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
          type={Heading.types.H2}
          weight={Heading.weights.MEDIUM}
          className={cx({ [styles.titleBasicLayoutPadding]: layout === "basic" })}
        >
          {title}
        </Heading>
        {subtitle && (
          <Flex>
            {subtitleIcon && (
              <Icon
                icon={typeof subtitleIcon === "object" ? subtitleIcon.name : subtitleIcon}
                className={cx(styles.subtitleIcon, typeof subtitleIcon === "object" && subtitleIcon.className)}
              />
            )}
            {typeof subtitle === "string" ? (
              <Text element="span" type={Text.types.TEXT1}>
                {subtitle}
              </Text>
            ) : (
              subtitle
            )}
          </Flex>
        )}
      </Flex>
    );
  }
);

export default ModalHeader;
