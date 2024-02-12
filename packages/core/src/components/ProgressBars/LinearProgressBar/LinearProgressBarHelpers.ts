import { toNumber } from "lodash-es";
import { SIZES } from "./../../../constants/sizes";
import cx from "classnames";
import styles from "./LinearProgressBar.module.scss";

export type Size = (typeof SIZES)[keyof typeof SIZES];

export const calculatePercentage = (value: number, min: number, max: number) => {
  const valuePercentage = (toNumber(value - min) / toNumber(max - min)) * 100;
  return valuePercentage > 100 ? 100 : valuePercentage;
};

export const getProgressBarClassNames = (value: number) => {
  return cx(styles.progressBar, { [styles.completed]: value >= 100 });
};
