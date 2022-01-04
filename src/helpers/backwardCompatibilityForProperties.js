// eslint-disable-next-line default-param-last
export function backwardCompatibilityForProperties(valuesArrayByMostUpdateNaming = [], defaultValue) {
  const value = valuesArrayByMostUpdateNaming.find(currentValue => currentValue !== undefined);
  return value || defaultValue;
}
