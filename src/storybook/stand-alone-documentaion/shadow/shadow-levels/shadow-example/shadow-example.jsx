import cx from "classnames";
import { BEMClass } from "../../../../../helpers/bem-helper";

const CSS_BASE_CLASS = "monday-storybook-shadow-example";
const bemHelper = BEMClass(CSS_BASE_CLASS);

export const ShadowExample = ({ size }) => <div className={cx(CSS_BASE_CLASS, bemHelper({ state: size }))} />;
ShadowExample.size = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large"
};
