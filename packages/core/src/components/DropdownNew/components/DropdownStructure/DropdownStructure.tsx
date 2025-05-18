import React from "react";
import cx from "classnames";
import FieldLabel from "../../../FieldLabel/FieldLabel";
import Text from "../../../Text/Text";
import styles from "../../Dropdown.module.scss";
import { getTestId } from "../../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../../tests/constants";
import { useDropdownContext } from "../../context/DropdownContext";
import { BaseListItemData } from "../../../BaseListItem";

interface DropdownStructureProps {
  dropdownRef: React.Ref<HTMLDivElement>; // Only ref
  children: React.ReactNode; // and children are direct props
}

const DropdownStructure: React.FC<DropdownStructureProps> = ({ dropdownRef, children }) => {
  const {
    // Values from context that DropdownStructure now consumes
    label,
    required,
    getLabelProps, // from context (Downshift hook result)
    className,
    id,
    ariaLabel,
    "data-testid": dataTestIdFromContext, // get data-testid from context
    disabled,
    readOnly,
    error,
    isFocused, // State from context
    helperText,
    dir
  } = useDropdownContext<BaseListItemData>();

  return (
    <div dir={dir}>
      {label && <FieldLabel labelText={label} required={required} {...getLabelProps()} />}
      <div
        ref={dropdownRef}
        className={cx(styles.wrapper, className, {
          [styles.disabled]: disabled,
          [styles.readOnly]: readOnly,
          [styles.error]: error,
          [styles.active]: isFocused
        })}
        id={id}
        aria-label={ariaLabel}
        data-testid={dataTestIdFromContext || getTestId(ComponentDefaultTestId.DROPDOWN, id)}
      >
        {children}
      </div>
      {helperText && (
        <Text color={error ? "negative" : "secondary"} className={styles.helperText}>
          {helperText}
        </Text>
      )}
    </div>
  );
};

export default DropdownStructure;
