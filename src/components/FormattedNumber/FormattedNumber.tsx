import { camelCase } from "lodash-es";
import { getStyle } from "src/helpers/typesciptCssModulesHelper";
import cx from "classnames";
import React, { useMemo, forwardRef } from "react";
import { formatNumber, formatNumberConsts } from "../../helpers/textManipulations";
import { baseClassName } from "./FormattedNumberConsts";
import { validateValue } from "./FormattedNumberHelpers";
import VibeComponentProps from "../../types/VibeComponentProps";
import VibeComponent from "../../types/VibeComponent";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import styles from "./FormattedNumber.module.scss";

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

      return <span className={cx(styles.suffix, `${baseClassName}__suffix`)}>{suffix}</span>;
    }, [suffix]);

    const renderPrefix = useMemo(() => {
      if (!prefix) return null;

      return <span className={cx(styles.prefix, `${baseClassName}__prefix`)}>{prefix}</span>;
    }, [prefix]);

    const calculatedValue = useMemo(() => {
      return formatNumber(Number(value), {
        local,
        precision: decimalPrecision,
        isCompact: compact
      });
    }, [value, decimalPrecision, local, compact]);

    if (validateValue(value)) {
      return <span className={cx(`${baseClassName}__place-holder`)}>{emptyPlaceHolder}</span>;
    }

    return (
      <div
        ref={ref}
        className={cx(className, baseClassName)}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.FORMATTED_NUMBER, id)}
      >
        {rtl ? renderSuffix : renderPrefix}
        <span className={cx(`${baseClassName}__number`)}>{calculatedValue}</span>
        {rtl ? renderPrefix : renderSuffix}
      </div>
    );
  }
);

FormattedNumber.formatNumber = formatNumber;
FormattedNumber.localFallBack = formatNumberConsts.DEFAULT_LOCAL;

Object.assign(FormattedNumber, {
  defaultTestId: ComponentDefaultTestId.FORMATTED_NUMBER
});

export default FormattedNumber;
