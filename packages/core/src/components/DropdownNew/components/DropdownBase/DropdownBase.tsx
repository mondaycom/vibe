import React from "react";
import cx from "classnames";
import FieldLabel from "../../../FieldLabel/FieldLabel";
import Text from "../../../Text/Text";
import styles from "./DropdownBase.module.scss";
import { getTestId } from "../../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../../tests/constants";
import { useDropdownContext } from "../../context/DropdownContext";
import { BaseListItemData } from "../../../BaseListItem";
import Tooltip from "../../../Tooltip/Tooltip";

interface DropdownBaseProps {
  dropdownRef: React.Ref<HTMLDivElement>;
  children: React.ReactNode;
}

const DropdownBase = ({ dropdownRef, children }: DropdownBaseProps) => {
  const {
    label,
    required,
    getLabelProps,
    className,
    id,
    ariaLabel,
    "data-testid": dataTestIdFromContext,
    disabled,
    readOnly,
    error,
    isFocused,
    helperText,
    dir,
    tooltipProps
  } = useDropdownContext<BaseListItemData>();

  const coreDropdownElement = (
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
  );

  return (
    <div dir={dir}>
      {label && <FieldLabel labelText={label} required={required} {...getLabelProps()} />}
      <Tooltip {...tooltipProps} content={tooltipProps?.content}>
        {coreDropdownElement}
      </Tooltip>
      {helperText && (
        <Text color={error ? "negative" : "secondary"} className={styles.helperText}>
          {helperText}
        </Text>
      )}
    </div>
  );
};

export default DropdownBase;
