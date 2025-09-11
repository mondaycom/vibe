import cx from "classnames";
import React, { useMemo, forwardRef } from "react";
import { formatNumber, formatNumberConsts } from "../../helpers/textManipulations";
import { validateValue } from "./FormattedNumberHelpers";
import { type VibeComponentProps, withStaticProps } from "../../types";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import styles from "./FormattedNumber.module.scss";

export interface FormattedNumberProps extends VibeComponentProps {
  /**
   * The numeric value to format.
   */
  value?: number | string;
  /**
   * The text displayed before the number.
   */
  prefix?: string;
  /**
   * The text displayed after the number.
   */
  suffix?: string;
  /**
   * The text displayed when no value is provided.
   */
  emptyPlaceHolder?: string;
  /**
   * The number of decimal places to display (0 ~ 20).
   */
  decimalPrecision?: number;
  /**
   * If true, formats the number into a compact notation.
   */
  compact?: boolean;
  /**
   * The locale used for formatting (Unicode BCP 47 locale identifier).
   */
  local?: string;
  /**
   * If true, reverses the order of the prefix and suffix.
   */
  rtl?: boolean;
}

const FormattedNumber = forwardRef(
  (
    {
      value,
      className,
      local = formatNumberConsts.DEFAULT_LOCAL,
      prefix,
      suffix,
      emptyPlaceHolder = "N/A",
      decimalPrecision = 2,
      compact = true,
      rtl,
      id,
      "data-testid": dataTestId
    }: FormattedNumberProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const renderSuffix = useMemo(() => {
      if (!suffix) return null;

      return <span className={cx(styles.suffix)}>{suffix}</span>;
    }, [suffix]);

    const renderPrefix = useMemo(() => {
      if (!prefix) return null;

      return <span className={cx(styles.prefix)}>{prefix}</span>;
    }, [prefix]);

    const calculatedValue = useMemo(() => {
      return formatNumber(Number(value), {
        local,
        precision: decimalPrecision,
        isCompact: compact
      });
    }, [value, decimalPrecision, local, compact]);

    if (validateValue(value)) {
      return <span>{emptyPlaceHolder}</span>;
    }

    return (
      <div
        ref={ref}
        className={className}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.FORMATTED_NUMBER, id)}
      >
        {rtl ? renderSuffix : renderPrefix}
        <span>{calculatedValue}</span>
        {rtl ? renderPrefix : renderSuffix}
      </div>
    );
  }
);

interface FormattedNumberStaticProps {
  formatNumber: typeof formatNumber;
  localFallBack: string;
}

export default withStaticProps<FormattedNumberProps, FormattedNumberStaticProps>(FormattedNumber, {
  formatNumber: formatNumber,
  localFallBack: formatNumberConsts.DEFAULT_LOCAL
});
