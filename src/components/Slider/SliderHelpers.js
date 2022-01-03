export function calcDimensions({ isRange, max, min, value }) {
  if (!isRange) {
    const [dimension, position] = calcDimension({ max, min, value });
    return { dimension, offset: 0, positions: [position] };
  }
  const [val1, val2] = value;
  const [offset, position] = calcDimension({ max, min, value: val1 });
  const [dimension, position2] = calcDimension({ max, min, value: val2 });
  return { dimension, offset, positions: [position, position2] };
}

export function calcDimension({ max, min, value }) {
  const valuePoints = max - min;
  const dimension = Math.round(((value - min) * 100) / valuePoints);
  const position = dimension;
  console.log("dimensions", { max, min, value, dimension });
  return [dimension, position];
}

export function moveToPx({ offsetInPx, min, max, railCoords, step }) {
  const valuePoints = max - min;
  const pxToValuePoints = railCoords.width / valuePoints;
  const offsetInValuePoints = Math.round(offsetInPx / pxToValuePoints) + min;
  const steppedOffset = Math.round(offsetInValuePoints / step) * step;
  console.log("moveToPx", { offsetInPx, offsetInValuePoints, step, steppedOffset, min, max });
  const newValue = steppedOffset;
  if (newValue < min) {
    return min;
  }
  if (newValue > max) {
    return max;
  }
  return newValue;
}

export function getNearest({ isRange, newValue, value }) {
  console.log("SliderHelpers: getNearest", { isRange });
  if (!isRange) {
    return 0;
  }
  const diff0 = Math.abs(value[0] - newValue);
  const diff1 = Math.abs(value[1] - newValue);
  console.log("SliderHelpers: getNearest", { diff0, diff1, newValue, value });
  return diff0 > diff1 ? 1 : 0;
}
