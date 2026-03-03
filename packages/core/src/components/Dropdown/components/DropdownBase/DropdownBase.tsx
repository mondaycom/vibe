import React from "react";
import cx from "classnames";
import FieldLabel from "../../../FieldLabel/FieldLabel";
import { Text } from "@vibe/typography";
import styles from "./DropdownBase.module.scss";
import { getTestId } from "../../../../tests/test-ids-utils";
import { ComponentDefaultTestId, ComponentVibeId } from "../../../../tests/constants";
import { useDropdownContext } from "../../context/DropdownContext";
import { type BaseItemData } from "../../../BaseItem";
import { Tooltip } from "@vibe/tooltip";

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
    isOpen,
    helperText,
    dir,
    tooltipProps,
    boxMode,
    borderless
  } = useDropdownContext<BaseItemData>();

  const coreDropdownElement = (
    <div
      ref={dropdownRef}
      className={cx(
        styles.wrapper,
        {
          [styles.disabled]: disabled,
          [styles.readOnly]: readOnly,
          [styles.error]: error,
          [styles.active]: isFocused || isOpen,
          [styles.boxMode]: boxMode,
          [styles.borderless]: borderless
        },
        className
      )}
      id={id}
      aria-label={ariaLabel}
      data-testid={dataTestIdFromContext || getTestId(ComponentDefaultTestId.DROPDOWN, id)}
      data-vibe={ComponentVibeId.DROPDOWN}
    >
      {children}
    </div>
  );

  return (
    <div dir={dir} className={styles.outerWrapper}>
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
