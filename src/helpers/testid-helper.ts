export function createTestIdHelper(componentTestId: string) {
  return function bem(subElement: string) {
    return `${componentTestId}__${subElement}`;
  };
}
