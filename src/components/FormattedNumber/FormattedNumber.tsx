import cx from "classnames";
import React, { forwardRef, useMemo } from "react";
import { formatNumber, formatNumberConsts } from "../../helpers/textManipulations";
import { validateValue } from "./FormattedNumberHelpers";
import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import VibeComponentProps from "../../types/VibeComponentProps";
import VibeComponent from "../../types/VibeComponent";
import styles from "./FormattedNumber.module.scss";

const CSS_BASE_CLASS = "formatted-number-component";

interface FormattedNumberProps extends VibeComponentProps {
  /**
   * A numeric value to format.
   */
  value?: number | string;
  /**
   * If included, will be added as a prefix to the number.
   */
  prefix?: string;
  /**
   * If included, will be added as a suffix to the number.
   */
  suffix?: string;
  /**
   * The text that will be shown if no value is provided.
   */
  emptyPlaceHolder?: string;
  /**
   * Determines the number of decimal numbers (0 ~ 20).
   */
  decimalPrecision?: number;
  /**
   * Format number into compact number and initial (if required).
   */
  compact?: boolean;
  /**
   * Determines the number's local (Unicode BCP 47 locale identifier).
   */
  local?: string;
  /**
   * Determines suffix and prefix location
   */
  rtl?: boolean;
}

type FormattedNumberType = VibeComponent<FormattedNumberProps, HTMLDivElement> & {
  formatNumber?: typeof formatNumber;
  localFallBack?: string;
};

const FormattedNumber: FormattedNumberType = forwardRef(
  (
    {
      value,
      className,
      local = FormattedNumber.localFallBack,
      prefix,
      suffix,
      emptyPlaceHolder = "N/A",
      decimalPrecision = 2,
      compact = true,
      rtl,
      id,
      "data-testid": dataTestId
    },
    ref
  ) => {
    const renderSuffix = useMemo(() => {
      if (!suffix) return null;

      return <span className={cx(styles.suffix, `${CSS_BASE_CLASS}__suffix`)}>{suffix}</span>;
    }, [suffix]);

    const renderPrefix = useMemo(() => {
      if (!prefix) return null;

      return <span className={cx(styles.prefix, `${CSS_BASE_CLASS}__prefix`)}>{prefix}</span>;
    }, [prefix]);

    const calculatedValue = useMemo(() => {
      return formatNumber(Number(value), {
        local,
        precision: decimalPrecision,
        isCompact: compact
      });
    }, [value, decimalPrecision, local, compact]);

    if (validateValue(value)) {
      return (
        <span
          className={`${CSS_BASE_CLASS}__place-holder`}
          id={id}
          data-testid={dataTestId || getTestId(ELEMENT_TYPES.FORMATTED_NUMBER, id)}
        >
          {emptyPlaceHolder}
        </span>
      );
    }

    return (
      <div
        ref={ref}
        className={cx(className, styles.formattedNumber, CSS_BASE_CLASS)}
        id={id}
        data-testid={dataTestId || getTestId(ELEMENT_TYPES.FORMATTED_NUMBER, id)}
      >
        {rtl ? renderSuffix : renderPrefix}
        <span className={`${CSS_BASE_CLASS}__number`}>{calculatedValue}</span>
        {rtl ? renderPrefix : renderSuffix}
      </div>
    );
  }
);

FormattedNumber.formatNumber = formatNumber;
FormattedNumber.localFallBack = formatNumberConsts.DEFAULT_LOCAL;

export default FormattedNumber;
