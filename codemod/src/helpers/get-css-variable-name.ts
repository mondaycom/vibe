export const getCssVariableName = cssVariable => {
  const match = cssVariable.match(/^var\(--(.*?)\)$/);
  return match ? match[1] : null;
};
