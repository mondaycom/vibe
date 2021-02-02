import React, { useMemo, forwardRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { baseClassName } from "./FormattedNumberConsts";
import { formatNumber, formatNumberConsts } from "../../helpers/textManipulations";
import { customPropTypes, validateValue } from "./FormattedNumberHelpers";
import "./FormattedNumber.scss";

const { MAX_PRECISION, MIN_PRECISION } = formatNumberConsts;

const FormattedNumber = forwardRef(
  ({ value, className, local, prefix, suffix, emptyPlaceHolder, decimalPrecision, compact, rtl }, ref) => {
    const renderSuffix = useMemo(() => {
      if (!suffix) return null;

      return <span className={`${baseClassName}__suffix`}>{suffix}</span>;
    }, [suffix]);

    const renderPrefix = useMemo(() => {
      if (!prefix) return null;

      return <span className={`${baseClassName}__prefix`}>{prefix}</span>;
    }, [prefix]);

    const calculatedValue = useMemo(() => {
      return formatNumber(value, {
        local,
        precision: decimalPrecision,
        isCompact: compact
      });
    }, [value, decimalPrecision, local, compact]);

    if (validateValue(value)) {
      return <span className={`${baseClassName}__place-holder`}>{emptyPlaceHolder}</span>;
    }

    return (
      <div ref={ref} className={classNames(className, baseClassName)}>
        {rtl ? renderSuffix : renderPrefix}
        <span className={`${baseClassName}__number`}>{calculatedValue}</span>
        {rtl ? renderPrefix : renderSuffix}
      </div>
    );
  }
);

FormattedNumber.formatNumber = formatNumber;
FormattedNumber.localFallBack = formatNumberConsts.DEFAULT_LOCAL;

const { range } = customPropTypes;

FormattedNumber.propTypes = {
  /**
   * A numeric value to format.
   */
  // eslint-disable-next-line react/require-default-props
  value: PropTypes.number,
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
  decimalPrecision: range(MIN_PRECISION, MAX_PRECISION),
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
