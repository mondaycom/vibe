import toNumber from "lodash/toNumber";

export const calculatePercentage = (value: number, min: number, max: number) => {
  const valuePercentage = (toNumber(value - min) / toNumber(max - min)) * 100;
  return valuePercentage > 100 ? 100 : valuePercentage;
};
