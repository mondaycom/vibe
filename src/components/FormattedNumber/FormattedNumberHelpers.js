export const validateValue = value => {
  const isNullOrUndefined = value === null || value === undefined;
  const isEmptyStringWithSpaces = typeof value === "string" && !value.replace(" ", "").length;
  // eslint-disable-next-line no-restricted-globals
  return isNullOrUndefined || isNaN(value) || isEmptyStringWithSpaces;
};

const range = (min, max) => (props, propName, componentName) => {
  if (props[propName] < min || props[propName] > max) {
    return new Error(
      `Invalid prop ${propName} supplied to ${componentName}. ${propName} should be between ${min} to ${max}.`
    );
  }
};

export const customPropTypes = Object.freeze({
  range
});
