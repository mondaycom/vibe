import toNumber from "lodash/toNumber";

export const calculatePercentage = (value, min, max) => {
  const valuePercentage = (toNumber(value - min) / toNumber(max - min)) * 100;
  const normalizedPercentage = valuePercentage > 100 ? 100 : valuePercentage;
  return normalizedPercentage;
};
