export function backwardCompatibilityForProperties(valuesArrayByMostUpdateNaming) {
  return valuesArrayByMostUpdateNaming.reduce((finalValue, currentValue) => {
    if (finalValue === undefined) return currentValue;
    return finalValue;
  });
}
