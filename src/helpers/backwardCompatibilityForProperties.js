export function backwardCompatibilityForProperties(valuesArrayByMostUpdateNaming) {
  return valuesArrayByMostUpdateNaming.find(value => value !== undefined);
}
