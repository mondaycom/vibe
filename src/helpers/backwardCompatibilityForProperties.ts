// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function backwardCompatibilityForProperties(valuesArrayByMostUpdateNaming: Array<any> = [], defaultValue?: any) {
  const value = valuesArrayByMostUpdateNaming.find(currentValue => currentValue !== undefined);
  return value || defaultValue;
}
