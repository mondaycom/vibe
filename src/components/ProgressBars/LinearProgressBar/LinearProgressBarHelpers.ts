import { toNumber } from "lodash-es";
import cx from "classnames";

export const calculatePercentage = (value: number, min: number, max: number) => {
  const valuePercentage = (toNumber(value - min) / toNumber(max - min)) * 100;
  return valuePercentage > 100 ? 100 : valuePercentage;
};

export const getProgressBarClassNames = (value: number) => {
  return cx("linear-progress-bar__content", { "linear-progress-bar__content--completed": value >= 100 });
};
