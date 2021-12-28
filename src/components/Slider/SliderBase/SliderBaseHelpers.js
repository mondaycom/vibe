export function calcDimensions(max, min, value) {
  const valuePoints = max - min;
  const dimension = Math.round((value * 100) / valuePoints);
  const position = dimension;
  return { dimension, position };
}
