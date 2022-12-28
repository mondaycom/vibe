// eslint-disable-next-line default-param-last
export function backwardCompatibilityForProperties<T>(valuesArrayByMostUpdateNaming: Array<T> = [], defaultValue?: T) {
  const value = valuesArrayByMostUpdateNaming.find(currentValue => currentValue !== undefined);
  return value || defaultValue;
}
