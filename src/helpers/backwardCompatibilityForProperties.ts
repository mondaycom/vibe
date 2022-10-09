// eslint-disable-next-line default-param-last
export function backwardCompatibilityForProperties(
  valuesArrayByMostUpdateNaming: Array<string | boolean> = [],
  defaultValue?: string | boolean
) {
  const value = valuesArrayByMostUpdateNaming.find(currentValue => currentValue !== undefined);
  return value || defaultValue;
}
