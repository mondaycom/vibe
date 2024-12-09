import React, { FC, ReactElement } from "react";
import cx from "classnames";
import Text from "../../Text/Text";
import VibeComponentProps from "../../../types/VibeComponentProps";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";
import styles from "./LegacyModalContent.module.scss";

export interface LegacyModalContentProps extends VibeComponentProps {
  children: ReactElement | ReactElement[] | string;
}

const LegacyModalContent: FC<LegacyModalContentProps> = ({ className, id, "data-testid": dataTestId, children }) => {
  return (
    <Text
      type="text1"
      id={id}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.MODAL_CONTENT, id)}
      className={cx(styles.container, className)}
      ellipsis={false}
    >
      {children}
    </Text>
  );
};

Object.assign(LegacyModalContent, {
  displayName: "ModalContent"
});

export default LegacyModalContent;
