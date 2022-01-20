export function createTestIdHelper(componentTestId) {
  return function bem(subElement) {
    return `${componentTestId}__${subElement}`;
  };
}
