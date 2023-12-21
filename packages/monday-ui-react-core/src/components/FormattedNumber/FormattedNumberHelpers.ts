export const validateValue = (value: number | string): boolean => {
  const isNullOrUndefined = value === null || value === undefined;
  const isEmptyStringWithSpaces = typeof value === "string" && !value.replace(" ", "").length;
  return isNullOrUndefined || isNaN(Number(value)) || isEmptyStringWithSpaces;
};

const range =
  (min: number, max: number) => (props: Record<string, number>, propName: string, componentName: string) => {
    if (props[propName] < min || props[propName] > max) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}. ${propName} should be between ${min} to ${max}.`
      );
    }
  };

export const customPropTypes = Object.freeze({
  range
});
