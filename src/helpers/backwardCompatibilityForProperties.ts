// eslint-disable-next-line default-param-last
export function backwardCompatibilityForProperties(
  valuesArrayByMostUpdateNaming: Array<string> = [],
  defaultValue: string
) {
  const value = valuesArrayByMostUpdateNaming.find(currentValue => currentValue !== undefined);
  return value || defaultValue;
}
