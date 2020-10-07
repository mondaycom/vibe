import React, { useMemo } from "react";
import cx from "classnames";
import { calculatePercentage } from "../LinearProgressBarHelpers";

const Bar = ({ value, baseClass, barStyle, animated, min, max, color }) => {
  const classNames = useMemo(() => {
    const classNames = cx(baseClass, `${baseClass}--${barStyle}`, {
      [`${baseClass}--animate`]: animated
    });
    return classNames;
  }, [barStyle, animated, animated]);

  const valuePercentage = useMemo(() => {
    if (value === null || value === undefined) return 0;
    return calculatePercentage(value, min, max);
  }, [value, min, max]);

  if (!value) return null;

  return (
    <div
      role={"progressbar"}
      aria-valuenow={valuePercentage}
      aria-valuemin={0}
      aria-valuemax={100}
      className={classNames}
      style={{
        width: `${valuePercentage}%`,
        ...(color && { backgroundColor: color })
      }}
    />
  );
};

export default Bar;
