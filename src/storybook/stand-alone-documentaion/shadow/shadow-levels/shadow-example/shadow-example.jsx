import cx from "classnames";
import { capitalize } from "lodash";
import { useMemo } from "react";
import { element } from "prop-types";
import { BEMClass } from "../../../../../helpers/bem-helper";
import "./shadow-example.scss";

const CSS_BASE_CLASS = "monday-storybook-shadow-example";
const bemHelper = BEMClass(CSS_BASE_CLASS);

export const ShadowExample = ({ size }) => {
  const sizeName = useMemo(() => capitalize(size), [size]);
  return (
    <div className={CSS_BASE_CLASS}>
      <div className={cx(bemHelper({ element: "example" }), bemHelper({ element: "example", state: size }))} />
      <span className={bemHelper({ element: "title" })}>{sizeName}</span>
      <span className={bemHelper({ element: "code" })}>{`@include box-shadow-${size}`}</span>
    </div>
  );
};
ShadowExample.size = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large"
};
