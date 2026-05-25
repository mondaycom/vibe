import cx from "classnames";
import React, { useEffect, useRef } from "react";
import {
  type DayContentProps as DatePickerDayContentProps,
  DayContent as DatePickerDayContent
} from "react-day-picker";
import { useDayContentHoverContext } from "./DateContentHoverContext";
import styles from "./DatePicker.module.scss";

export const RangeDayContent = (props: DatePickerDayContentProps) => {
  const { date, activeModifiers } = props;
  const { setHover } = useDayContentHoverContext();

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const td = ref.current.closest("td");
    const onMouseEnter = () => setHover(date);
    const onMouseLeave = () => setHover(undefined);

    td?.addEventListener("mouseenter", onMouseEnter);
    td?.addEventListener("mouseleave", onMouseLeave);

    return () => {
      td?.removeEventListener("mouseenter", onMouseEnter);
      td?.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [date, setHover]);

  return (
    <div ref={ref} className={cx(styles.datePickerDayContent, activeModifiers)}>
      <DatePickerDayContent {...props} />
    </div>
  );
};
