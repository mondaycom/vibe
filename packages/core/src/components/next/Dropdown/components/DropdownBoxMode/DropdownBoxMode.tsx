import React from "react";
import cx from "classnames";
import { useDropdownContext } from "../../context/DropdownContext";
import MenuList from "../Menu/MenuList";
import SingleSelectTrigger from "../Trigger/SingleSelectTrigger";
import MultiSelectTrigger from "../Trigger/MultiSelectTrigger";
import { Flex } from "../../../../Flex";
import styles from "./DropdownBoxMode.module.scss";

const DropdownBoxMode = () => {
  const { multi, searchable, disabled, readOnly, error } = useDropdownContext();

  if (!searchable) {
    return null;
  }

  return (
    <Flex direction="column" gap="xs" className={cx(styles.boxModeContainer)}>
      <div
        className={cx(styles.inputContainer, {
          [styles.disabled]: disabled,
          [styles.readOnly]: readOnly,
          [styles.error]: error
        })}
      >
        {multi ? <MultiSelectTrigger /> : <SingleSelectTrigger />}
      </div>
      <div className={styles.menuContainer}>
        <MenuList />
      </div>
    </Flex>
  );
};

export default DropdownBoxMode;
