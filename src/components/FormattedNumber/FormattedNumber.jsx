import cx from "classnames";
import React, { forwardRef, useMemo } from "react";
import PropTypes from "prop-types";
import { formatNumber, formatNumberConsts } from "../../helpers/textManipulations";
import { validateValue } from "./FormattedNumberHelpers";
import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import styles from "./FormattedNumber.module.scss";

const CSS_BASE_CLASS = "formatted-number-component";

const FormattedNumber = forwardRef(
  (
    {
      value,
      className,
      local,
      prefix,
      suffix,
      emptyPlaceHolder,
      decimalPrecision,
      compact,
      rtl,
      id,
      "data-testId": dataTestId
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
      return formatNumber(value, {
        local,
        precision: decimalPrecision,
        isCompact: compact
      });
    }, [value, decimalPrecision, local, compact]);

    if (validateValue(value)) {
      return (
        <span
          className={cx(`${CSS_BASE_CLASS}__place-holder`)}
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
        <span className={cx(`${CSS_BASE_CLASS}__number`)}>{calculatedValue}</span>
        {rtl ? renderPrefix : renderSuffix}
      </div>
    );
  }
);

FormattedNumber.formatNumber = formatNumber;
FormattedNumber.localFallBack = formatNumberConsts.DEFAULT_LOCAL;

FormattedNumber.propTypes = {
  /**
   * A numeric value to format.
   */
  // eslint-disable-next-line react/require-default-props
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * Add external styling. Will be added to the main container.
   */
  className: PropTypes.string,
  /**
   * If included, will be added as a prefix to the number.
   */
  prefix: PropTypes.string,
  /**
   * If included, will be added as a suffix to the number.
   */
  suffix: PropTypes.string,
  /**
   * The text that will be shown if no value is provided.
   */
  emptyPlaceHolder: PropTypes.string,
  /**
   * Determines the number of decimal numbers (0 ~ 20).
   */
  decimalPrecision: PropTypes.number,
  /**
   * Format number into compact number and initial (if required).
   */
  compact: PropTypes.bool,
  /**
   * Determines the number's local (Unicode BCP 47 locale identifier).
   */
  local: PropTypes.string,
  /**
   * Determines suffix and prefix location
   */
  rtl: PropTypes.bool
};

FormattedNumber.defaultProps = {
  emptyPlaceHolder: "N/A",
  decimalPrecision: 2,
  compact: true,
  local: FormattedNumber.localFallBack,
  rtl: false,
  className: "",
  prefix: "",
  suffix: ""
};

export default FormattedNumber;
