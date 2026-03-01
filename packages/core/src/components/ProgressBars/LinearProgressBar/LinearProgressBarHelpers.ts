import { type SIZES } from "./../../../constants/sizes";
import cx from "classnames";
import styles from "./LinearProgressBar.module.scss";

export type Size = (typeof SIZES)[keyof typeof SIZES];

export const calculatePercentage = (value: number, min: number, max: number, allowExceeding?: boolean) => {
  const valuePercentage = (Number(value - min) / Number(max - min)) * 100;
  return !allowExceeding && valuePercentage > 100 ? 100 : valuePercentage;
};

export const getProgressBarClassNames = (value: number) => {
  return cx(styles.progressBar, { [styles.completed]: value >= 100 });
};
