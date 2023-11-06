export function _calcDimension(max: number, min: number, value: number): [number, number] {
  const valuePoints = max - min;
  const dimension = Math.round(((value - min) * 100) / valuePoints);
  return [dimension, dimension];
}

function _ensureSingleValueText(valueText: string, value: number, formatter: (value: number) => string): string {
  if (valueText) {
    return valueText;
  }
  if (typeof value === "undefined") {
    return undefined;
  }
  if (typeof formatter !== "function") {
    return value.toString();
  }
  return formatter(value);
}

function _ensureStepModulo(pageStep: number, step: number) {
  const moduloToStep = pageStep % step;
  if (moduloToStep === 0) {
    return pageStep;
  }
  return pageStep - moduloToStep;
}

export function calcDimensions(max: number, min: number, ranged: boolean, value: number | number[]) {
  if (!ranged) {
    const [dimension, position] = _calcDimension(max, min, value as number);
    return { dimension, offset: 0, positions: [position], thumbKeys: ["start"] };
  }
  const [val1, val2] = value as number[];
  const [offset, position] = _calcDimension(max, min, val1);
  const [dimension, position2] = _calcDimension(max, min, val2);
  return { dimension, offset, positions: [position, position2], thumbKeys: ["start", "end"] };
}

export function calculatePageStep(max: number, min: number, step: number) {
  const pageStep = (max - min) / 10;
  if (pageStep < step) {
    // too small pageSize --> return step
    return step;
  }
  const fixedPageStep = _ensureStepModulo(Math.round(pageStep), step);
  if ((max - min) / fixedPageStep > 10) {
    // too many steps with fixedPageStep - multiply it
    return 2 * fixedPageStep;
  }
  // basic page size is ok
  return fixedPageStep;
}

export function ensureDefaultValue(
  defaultValue: number | number[],
  min: number,
  max: number,
  ranged: boolean
): number | number[] {
  if (ranged && !Array.isArray(defaultValue)) {
    return [min, max];
  }
  if (defaultValue < min) {
    return min;
  }
  if (defaultValue > max) {
    return max;
  }
  return defaultValue;
}

export function ensureValueText(
  valueText: string,
  value: number | number[],
  formatter: (value: number) => string
): string | string[] {
  if (!Array.isArray(value)) {
    return _ensureSingleValueText(valueText, value, formatter);
  }
  return value.map((valueSingle, index) => {
    const valueTextSingle = Array.isArray(valueText) ? valueText[index] : undefined;
    return _ensureSingleValueText(valueTextSingle, valueSingle, formatter);
  });
}

export function getNearest(newValue: number, ranged: boolean, value: number | number[]) {
  if (!ranged) {
    return 0;
  }
  const diff0 = Math.abs((value as number[])[0] - newValue);
  const diff1 = Math.abs((value as number[])[1] - newValue);
  return diff0 > diff1 ? 1 : 0;
}

export function moveToPx(offsetInPx: number, min: number, max: number, railCoords: { width: number }, step: number) {
  const valuePoints = max - min;
  const pxToValuePoints = railCoords.width / valuePoints;
  const offsetInValuePoints = Math.round(offsetInPx / pxToValuePoints) + min;
  const newValue = Math.round(offsetInValuePoints / step) * step;
  if (newValue < min) {
    return min;
  }
  if (newValue > max) {
    return max;
  }
  return newValue;
}
