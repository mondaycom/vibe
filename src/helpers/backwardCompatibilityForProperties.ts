// eslint-disable-next-line default-param-last
export function backwardCompatibilityForProperties<T>(valuesArrayByMostUpdateNaming: Array<T> = [], defaultValue?: T) {
  const value = valuesArrayByMostUpdateNaming.find(currentValue => currentValue !== undefined);
  if (value === undefined) {
    return defaultValue;
  }
  return value;
}
