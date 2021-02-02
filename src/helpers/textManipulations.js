import { convertToArray } from "../utils/function-utils";

const MIN_PRECISION = 0;
const MAX_PRECISION = 20;
const DEFAULT_LOCAL = "en-US";

const validateLocalSupported = local => {
  let isLocalSupported;
  try {
    const options = { localeMatcher: "lookup" };
    isLocalSupported = !!Intl.NumberFormat.supportedLocalesOf(convertToArray(local), options).length;
  } catch (err) {
    isLocalSupported = false;
  }

  return isLocalSupported;
};

const validatePrecision = precision => {
  if (precision < MIN_PRECISION) return MIN_PRECISION;
  if (precision > MAX_PRECISION) return MAX_PRECISION;
  return precision;
};

export const formatNumberConsts = Object.freeze({
  MIN_PRECISION,
  MAX_PRECISION,
  DEFAULT_LOCAL
});

export const formatNumber = (value, { local = DEFAULT_LOCAL, isCompact = true, precision = 2 } = {}) => {
  if (value === undefined || value === null) return;
  const isLocalSupported = validateLocalSupported(local);
  const normalizedPrecision = validatePrecision(precision);
  const selectedLocal = isLocalSupported ? local : DEFAULT_LOCAL;
  return new Intl.NumberFormat(selectedLocal, {
    ...(isCompact && { notation: "compact" }),
    maximumFractionDigits: normalizedPrecision
  }).format(value);
};
